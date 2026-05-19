'use client';
import React, { useEffect, useRef, useState, useCallback, CSSProperties } from 'react';

export interface ImageSwiperCard {
  id: number;
  imageUrl: string;
  title: string;
}

export interface ImageSwiperProps {
  cards: ImageSwiperCard[];
  cardWidth?: number;
  cardHeight?: number;
  style?: CSSProperties;
}

export function ImageSwiper({
  cards,
  cardWidth  = 256,
  cardHeight = 352,
  style,
}: ImageSwiperProps) {
  const stackRef          = useRef<HTMLDivElement>(null);
  const isSwiping         = useRef(false);
  const startX            = useRef(0);
  const currentX          = useRef(0);
  const rafId             = useRef<number | null>(null);

  const [cardOrder, setCardOrder] = useState<number[]>(() =>
    Array.from({ length: cards.length }, (_, i) => i)
  );

  const getCards = useCallback((): HTMLElement[] => {
    if (!stackRef.current) return [];
    return Array.from(stackRef.current.querySelectorAll('.image-card'));
  }, []);

  const getActiveCard = useCallback((): HTMLElement | null =>
    getCards()[0] ?? null, [getCards]);

  const updatePositions = useCallback(() => {
    getCards().forEach((card, i) => {
      card.style.setProperty('--i', String(i));
      card.style.setProperty('--swipe-x', '0px');
      card.style.setProperty('--swipe-rotate', '0deg');
      card.style.opacity = '1';
      card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    });
  }, [getCards]);

  const applySwipe = useCallback((deltaX: number) => {
    const card = getActiveCard();
    if (!card) return;
    card.style.setProperty('--swipe-x', `${deltaX}px`);
    card.style.setProperty('--swipe-rotate', `${deltaX * 0.1}deg`);
    card.style.opacity = String(1 - Math.abs(deltaX) / (cardWidth * 1.5));
  }, [getActiveCard, cardWidth]);

  const handleStart = useCallback((clientX: number) => {
    if (isSwiping.current) return;
    isSwiping.current = true;
    startX.current = currentX.current = clientX;
    const card = getActiveCard();
    if (card) card.style.transition = 'none';
    if (rafId.current) cancelAnimationFrame(rafId.current);
  }, [getActiveCard]);

  const handleMove = useCallback((clientX: number) => {
    if (!isSwiping.current) return;
    currentX.current = clientX;
    rafId.current = requestAnimationFrame(() =>
      applySwipe(currentX.current - startX.current)
    );
  }, [applySwipe]);

  const handleEnd = useCallback(() => {
    if (!isSwiping.current) return;
    isSwiping.current = false;
    if (rafId.current) cancelAnimationFrame(rafId.current);

    const deltaX  = currentX.current - startX.current;
    const card    = getActiveCard();
    if (!card) return;

    card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

    if (Math.abs(deltaX) > cardWidth / 3) {
      const dir = Math.sign(deltaX);
      card.style.setProperty('--swipe-x', `${dir * cardWidth * 1.5}px`);
      card.style.setProperty('--swipe-rotate', `${dir * 15}deg`);
      card.style.opacity = '0';
      setTimeout(() => setCardOrder(prev => [...prev.slice(1), prev[0]]), 300);
    } else {
      applySwipe(0);
    }
  }, [getActiveCard, applySwipe, cardWidth]);

  useEffect(() => {
    const el = stackRef.current;
    if (!el) return;
    const onDown  = (e: PointerEvent) => handleStart(e.clientX);
    const onMove  = (e: PointerEvent) => handleMove(e.clientX);
    const onUp    = () => handleEnd();
    el.addEventListener('pointerdown',  onDown);
    el.addEventListener('pointermove',  onMove);
    el.addEventListener('pointerup',    onUp);
    el.addEventListener('pointerleave', onUp);
    return () => {
      el.removeEventListener('pointerdown',  onDown);
      el.removeEventListener('pointermove',  onMove);
      el.removeEventListener('pointerup',    onUp);
      el.removeEventListener('pointerleave', onUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleStart, handleMove, handleEnd]);

  useEffect(() => { updatePositions(); }, [cardOrder, updatePositions]);

  return (
    <div
      ref={stackRef}
      style={{
        position: 'relative',
        display: 'grid',
        placeContent: 'center',
        userSelect: 'none',
        width: cardWidth + 32,
        height: cardHeight + 32,
        perspective: '1000px',
        touchAction: 'none',
        ...style,
      }}
    >
      {cardOrder.map((originalIndex, displayIndex) => {
        const card = cards[originalIndex];
        return (
          <div
            key={card.id}
            className="image-card"
            style={{
              position: 'absolute',
              placeSelf: 'center',
              width: cardWidth,
              height: cardHeight,
              borderRadius: 16,
              border: '2px solid #334155',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
              overflow: 'hidden',
              willChange: 'transform',
              backgroundColor: '#1e293b',
              cursor: 'grab',
              zIndex: cards.length - displayIndex,
              transform: `
                translateY(calc(var(--i) * 10px))
                translateZ(calc(var(--i) * -45px))
                translateX(var(--swipe-x))
                rotate(var(--swipe-rotate))
              `,
            } as CSSProperties}
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              draggable={false}
              style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', display: 'block' }}
              onError={e => {
                const t = e.target as HTMLImageElement;
                t.onerror = null;
                t.src = `https://placehold.co/${cardWidth}x${cardHeight}/2d3748/e2e8f0?text=Image+Not+Found`;
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              padding: '1rem',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
            }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: '1.25rem', color: '#fff' }}>
                {card.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
