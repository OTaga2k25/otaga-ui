'use client';
import { CSSProperties, useEffect, useRef, useState } from 'react';

export interface CarouselCard {
  id: number;
  imageUrl: string;
  title: string;
}

export interface CardCarouselProps {
  cards: CarouselCard[];
  autoPlayDelay?: number;
  maxWidth?: number;
  style?: CSSProperties;
}

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
);
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
);

function getCardStyle(offset: number, total: number): CSSProperties {
  const absOff = Math.abs(offset);
  const visible = absOff <= 1;
  return {
    position: 'absolute',
    width: '33%',
    height: '95%',
    borderRadius: 24,
    overflow: 'hidden',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.45s cubic-bezier(0.26, 0.86, 0.44, 0.985), opacity 0.45s ease',
    transform: `translateX(${offset * 50}%) scale(${offset === 0 ? 1 : 0.8})`,
    opacity: visible ? 1 : 0,
    zIndex: total - absOff,
    pointerEvents: offset === 0 ? 'auto' : 'none',
    boxShadow: '0 25px 50px rgba(0,0,0,0.35)',
    backgroundColor: '#1e1e1e',
  };
}

export function CardCarousel({
  cards,
  autoPlayDelay = 3000,
  maxWidth = 900,
  style,
}: CardCarouselProps) {
  const [active, setActive] = useState(Math.floor(cards.length / 2));
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragStartX = useRef<number | null>(null);

  const goTo = (index: number) => {
    setActive(((index % cards.length) + cards.length) % cards.length);
  };

  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, autoPlayDelay);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, active, autoPlayDelay]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    if (dx > 75) prev();
    else if (dx < -75) next();
    dragStartX.current = null;
  };

  return (
    <section style={{ width: '100%', fontFamily: 'sans-serif', overflow: 'hidden', ...style }}>
      <div
        style={{ maxWidth, margin: '0 auto', padding: 16 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div style={{
          position: 'relative',
          borderRadius: 24,
          border: '1px solid rgba(255,255,255,0.1)',
          backgroundColor: '#fff',
          padding: '24px 24px 16px',
        }}>
          {/* Badge */}
          <div style={{
            position: 'absolute', top: 20, left: 20,
            display: 'inline-flex', alignItems: 'center', gap: 6,
            borderRadius: 12, border: '1px solid #e5e7eb',
            backgroundColor: 'rgba(243,244,246,0.8)', backdropFilter: 'blur(4px)',
            padding: '6px 12px', fontSize: 13, fontWeight: 500, color: '#374151',
          }}>
            ✦ Enhanced Carousel
          </div>

          {/* Card track */}
          <div
            style={{
              position: 'relative', width: '100%', height: 340,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', paddingTop: 48, cursor: 'grab', userSelect: 'none',
            }}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            {cards.map((card, index) => {
              let offset = index - active;
              if (offset > cards.length / 2) offset -= cards.length;
              else if (offset < -cards.length / 2) offset += cards.length;
              return (
                <div key={card.id} style={getCardStyle(offset, cards.length)}>
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', display: 'block' }}
                    onError={e => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x600/1e1e1e/fff?text=Missing'; }}
                  />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: 16,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                  }}>
                    <p style={{ margin: 0, color: '#fff', fontSize: 16, fontWeight: 600 }}>{card.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginTop: 20 }}>
            <button onClick={prev} style={btnStyle}>
              <ChevronLeft />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    height: 8, width: active === i ? 24 : 8,
                    borderRadius: 9999, border: 'none', cursor: 'pointer', padding: 0,
                    backgroundColor: active === i ? '#f472b6' : '#d1d5db',
                    transition: 'width 0.3s ease, background-color 0.3s ease',
                  }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button onClick={next} style={btnStyle}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const btnStyle: CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  width: 36, height: 36, borderRadius: '50%', border: '1px solid #e5e7eb',
  backgroundColor: '#f3f4f6', cursor: 'pointer', color: '#374151',
  transition: 'background-color 0.15s ease',
};
