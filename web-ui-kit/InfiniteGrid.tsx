'use client';
import React, {
  useState, useEffect, useRef, useCallback, useMemo, CSSProperties,
} from 'react';

// ── Types ────────────────────────────────────────────────────────────────────

export interface InfiniteGridItem {
  id?: number;
  thumb_src: string;
  title?: string;
  full_src?: string;
}

export interface InfiniteDraggableGridProps {
  gallery: InfiniteGridItem[];
  style?: CSSProperties;
}

export interface InfiniteGridProps {
  galleryUrl?: string;
  fallbackGallery?: InfiniteGridItem[];
  style?: CSSProperties;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const CARD_W = 256;
const CARD_H = 171;

const NEIGHBOURS: [number, number][] = [
  [0, -1], [0, 1], [1, 0], [-1, 0],
  [1, 1], [-1, 1], [-1, -1], [1, -1],
];

const DEFAULT_GALLERY_URL =
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/204379/gallery.json';

const FALLBACK_GALLERY: InfiniteGridItem[] = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  full_src:  `https://s3-us-west-2.amazonaws.com/s.cdpn.io/204379/${i}.jpg`,
  thumb_src: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/204379/thumb_${i}.jpg`,
  title: `Gallery Image ${i}`,
}));

// ── Helpers ───────────────────────────────────────────────────────────────────

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

const applyDamping = (velocity: number, dt: number) =>
  velocity * Math.exp(-0.0028 * dt);

const smoothStep = (cur: number, target: number, dt: number, speed = 0.15) =>
  cur + (target - cur) * (1 - Math.exp(-speed * dt));

// ── Hooks ─────────────────────────────────────────────────────────────────────

function useViewportSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', update);
    update();
    return () => window.removeEventListener('resize', update);
  }, []);
  return size;
}

function useAnimationFrame(cb: (dt: number) => void) {
  const rafRef  = useRef<number | null>(null);
  const prevRef = useRef<number | undefined>(undefined);
  const animate = useCallback((t: number) => {
    if (prevRef.current !== undefined) cb(t - prevRef.current);
    prevRef.current = t;
    rafRef.current  = requestAnimationFrame(animate);
  }, [cb]);
  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
  }, [animate]);
}

// ── Card ──────────────────────────────────────────────────────────────────────

interface CardProps { descriptor: InfiniteGridItem; x: number; y: number; }

const Card = React.memo<CardProps>(({ descriptor, x, y }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(0);
    const img = new Image();
    img.src = descriptor.thumb_src;
    const fadeIn = () => {
      let start: number | null = null;
      const fade = (t: number) => {
        if (!start) start = t;
        const p = Math.min(1, (t - start) / 300);
        setOpacity(p);
        if (p < 1) requestAnimationFrame(fade);
      };
      requestAnimationFrame(fade);
    };
    if (img.decode) img.decode().then(fadeIn).catch(fadeIn);
    else img.onload = fadeIn;
  }, [descriptor]);

  return (
    <div style={{
      position: 'absolute',
      overflow: 'hidden',
      transform: `translate3d(${x}px,${y}px,0)`,
      willChange: 'transform',
      width: CARD_W,
      height: CARD_H,
      contain: 'layout style paint' as CSSProperties['contain'],
    }}>
      <img
        src={descriptor.thumb_src}
        alt={descriptor.title ?? 'Gallery image'}
        draggable={false}
        loading="lazy"
        decoding="async"
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
          userSelect: 'none',
          opacity,
          transition: 'opacity 0.3s ease-out',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
        }}
        onError={e => {
          const t = e.target as HTMLImageElement;
          t.onerror = null;
          t.src = `https://placehold.co/${CARD_W}x${CARD_H}/1a1a1a/666?text=No+Image`;
        }}
      />
    </div>
  );
}, (p, n) => p.descriptor === n.descriptor && p.x === n.x && p.y === n.y);
Card.displayName = 'Card';

// ── InfiniteDraggableGrid ─────────────────────────────────────────────────────

export function InfiniteDraggableGrid({ gallery, style }: InfiniteDraggableGridProps) {
  const viewport  = useViewportSize();
  const [offset,  setOffset]  = useState({ x: 0, y: 0 });
  const [target,  setTarget]  = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState<{ key: string; descriptor: InfiniteGridItem; x: number; y: number }[]>([]);

  const dragging  = useRef(false);
  const lastPos   = useRef({ x: 0, y: 0 });
  const lastTime  = useRef(Date.now());
  const picks     = useRef<Record<string, InfiniteGridItem>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const momentum  = useRef({ x: 0, y: 0 });

  useAnimationFrame(useCallback((dt) => {
    if (!dragging.current) {
      momentum.current.x = applyDamping(momentum.current.x, dt);
      momentum.current.y = applyDamping(momentum.current.y, dt);
      if (Math.abs(momentum.current.x) < 0.01) momentum.current.x = 0;
      if (Math.abs(momentum.current.y) < 0.01) momentum.current.y = 0;
      setTarget(p => ({ x: p.x + momentum.current.x, y: p.y + momentum.current.y }));
    }
    setOffset(p => ({
      x: smoothStep(p.x, target.x, dt, dragging.current ? 0.4 : 0.18),
      y: smoothStep(p.y, target.y, dt, dragging.current ? 0.4 : 0.18),
    }));
  }, [target]));

  const onDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    dragging.current = true;
    momentum.current = { x: 0, y: 0 };
    const pt = 'touches' in e ? e.touches[0] : e;
    lastPos.current  = { x: pt.clientX, y: pt.clientY };
    lastTime.current = Date.now();
    if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
  }, []);

  const onDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragging.current) return;
    e.preventDefault();
    const pt  = e instanceof TouchEvent ? e.touches[0] : e;
    const now = Date.now();
    const dt  = now - lastTime.current;
    const dx  = pt.clientX - lastPos.current.x;
    const dy  = pt.clientY - lastPos.current.y;
    if (dt > 0) {
      const vx = (dx / dt) * 16;
      const vy = (dy / dt) * 16;
      setVelocity(p => ({ x: p.x * 0.5 + vx * 0.5, y: p.y * 0.5 + vy * 0.5 }));
    }
    lastPos.current  = { x: pt.clientX, y: pt.clientY };
    lastTime.current = now;
    setTarget(p => ({ x: p.x + dx, y: p.y + dy }));
  }, []);

  const onDragEnd = useCallback(() => {
    if (!dragging.current) return;
    dragging.current = false;
    momentum.current = { x: clamp(velocity.x, -30, 30), y: clamp(velocity.y, -30, 30) };
    setVelocity({ x: 0, y: 0 });
    if (containerRef.current) containerRef.current.style.cursor = 'grab';
  }, [velocity]);

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => onDragMove(e);
    const end  = () => onDragEnd();
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('mouseup',   end);
    window.addEventListener('touchend',  end);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('mouseup',   end);
      window.removeEventListener('touchend',  end);
    };
  }, [onDragMove, onDragEnd]);

  const visibleData = useMemo(() => {
    if (!gallery.length || viewport.width === 0) return [];

    const getRandom = (col: number, row: number): InfiniteGridItem => {
      let pick: InfiniteGridItem | undefined;
      let tries = 0;
      while (!pick) {
        const item = gallery[Math.floor(Math.random() * gallery.length)];
        let safe = true;
        for (const [ox, oy] of NEIGHBOURS) {
          if (picks.current[`${col + ox}:${row + oy}`] === item) { safe = false; break; }
        }
        if (tries++ > 20 || safe) pick = item;
      }
      return pick!;
    };

    const getDesc = (col: number, row: number) => {
      const key = `${col}:${row}`;
      if (!picks.current[key]) picks.current[key] = getRandom(col, row);
      return picks.current[key];
    };

    const colOff  = Math.floor(offset.x / CARD_W) * -1;
    const rowOff  = Math.floor(offset.y / CARD_H) * -1;
    const viewCols = Math.ceil(viewport.width  / CARD_W) + 4;
    const viewRows = Math.ceil(viewport.height / CARD_H) + 4;
    const buf = 100;
    const cards: { key: string; descriptor: InfiniteGridItem; x: number; y: number }[] = [];

    for (let row = -2; row < viewRows; row++) {
      for (let col = -2; col < viewCols; col++) {
        const x = col * CARD_W + (Math.round(offset.x) % CARD_W) - CARD_W;
        const y = row * CARD_H + (Math.round(offset.y) % CARD_H) - CARD_H;
        if (x + CARD_W > -buf && y + CARD_H > -buf && x < viewport.width + buf && y < viewport.height + buf) {
          cards.push({ key: `${colOff + col}:${rowOff + row}`, descriptor: getDesc(colOff + col, rowOff + row), x, y });
        }
      }
    }
    return cards;
  }, [gallery, offset, viewport]);

  useEffect(() => { setVisible(visibleData); }, [visibleData]);

  return (
    <div
      ref={containerRef}
      onMouseDown={onDragStart}
      onTouchStart={onDragStart}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: 400,
        overflow: 'hidden',
        cursor: 'grab',
        userSelect: 'none',
        touchAction: 'none',
        background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #000 100%)',
        ...style,
      }}
    >
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
        {visible.map(c => <Card key={c.key} descriptor={c.descriptor} x={c.x} y={c.y} />)}
      </div>

      {/* Centered label */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', zIndex: 10,
      }}>
        <h1 style={{
          color: 'white', fontSize: '3.75rem', fontWeight: 700,
          letterSpacing: '0.1em', opacity: 0.8, userSelect: 'none',
          textShadow: '0 25px 50px rgba(0,0,0,0.5)',
          margin: 0,
        }}>
          drag me
        </h1>
      </div>
    </div>
  );
}

// ── InfiniteGrid (with built-in fetch + fallback) ─────────────────────────────

export function InfiniteGrid({
  galleryUrl = DEFAULT_GALLERY_URL,
  fallbackGallery = FALLBACK_GALLERY,
  style,
}: InfiniteGridProps) {
  const [gallery,   setGallery]   = useState<InfiniteGridItem[]>(fallbackGallery);
  const [loading,   setLoading]   = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res  = await fetch(galleryUrl);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: { images: InfiniteGridItem[] } = await res.json();
        if (data.images?.length) {
          setGallery(data.images.map((img, i) => ({ ...img, title: img.title ?? `Gallery Image ${img.id ?? i}` })));
        }
      } catch {
        // keep fallback
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [galleryUrl]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 400, backgroundColor: '#000', overflow: 'hidden', margin: 0, ...style }}>
      <InfiniteDraggableGrid gallery={gallery} />
      {loading && (
        <div style={{ position: 'absolute', top: 8, right: 8, color: 'white', fontSize: 12, opacity: 0.5 }}>
          Updating...
        </div>
      )}
    </div>
  );
}
