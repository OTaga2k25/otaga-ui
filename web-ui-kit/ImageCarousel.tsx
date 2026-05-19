'use client';
import { CSSProperties, useEffect, useRef, useState } from 'react';

export interface ImageCarouselPerson {
  name: string;
  title: string;
  img: string;
}

export interface ImageCarouselProps {
  persons: ImageCarouselPerson[];
  height?: number;
  style?: CSSProperties;
}

export function ImageCarousel({ persons, height = 480, style }: ImageCarouselProps) {
  const [active, setActive] = useState(Math.floor(persons.length / 2));
  const listRef = useRef<HTMLUListElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelect = (index: number) => {
    setActive(index);
    // Temporarily apply fast transition then remove to let CSS var take over
    if (listRef.current) {
      listRef.current.style.setProperty('--item-transition', '600ms cubic-bezier(0.22,0.61,0.36,1)');
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        listRef.current?.style.removeProperty('--item-transition');
      }, 900);
    }
  };

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return (
    <div style={{ width: '100%', fontFamily: 'sans-serif', ...style }}>
      <div style={{ width: '100%', maxWidth: 1200, padding: '16px 24px' }}>
        <ul
          ref={listRef}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1.5%',
            height,
            listStyle: 'none',
            margin: 0,
            padding: 0,
            width: '100%',
          }}
        >
          {persons.map((person, index) => {
            const isActive = active === index;
            return (
              <li
                key={person.name}
                onClick={() => handleSelect(index)}
                style={{
                  position: 'relative',
                  flexShrink: 0,
                  width: isActive ? '48%' : `${(100 - 48 - 1.5 * (persons.length - 1)) / (persons.length - 1)}%`,
                  cursor: 'pointer',
                  transition: 'width var(--item-transition, 300ms ease-in)',
                  borderRadius: 16,
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#000',
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  transform: 'scale(1)',
                  transition: 'transform 0.3s ease',
                }}>
                  <img
                    src={person.img}
                    alt={person.name}
                    style={{
                      position: 'absolute',
                      left: '50%', top: '50%',
                      height: '100%', width: 'auto', maxWidth: 'none',
                      transform: `translate(-50%,-50%) scale(${isActive ? 1.05 : 1})`,
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease, filter 0.5s ease',
                      filter: isActive ? 'grayscale(0)' : 'grayscale(1)',
                      userSelect: 'none', pointerEvents: 'none',
                    }}
                    onError={e => { (e.target as HTMLImageElement).src = 'https://placehold.co/590x640/1e1e1e/fff?text=Missing'; }}
                  />

                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)',
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }} />

                  {/* Text */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, width: '100%',
                    padding: 24,
                    transform: isActive ? 'translateY(0)' : 'translateY(32px)',
                    opacity: isActive ? 1 : 0,
                    transition: 'transform 0.7s ease, opacity 0.7s ease',
                    color: '#fff',
                  }}>
                    <p style={{ margin: '0 0 4px', fontSize: 11, fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#e5e7eb' }}>
                      {person.title}
                    </p>
                    <p style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                      {person.name}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
