'use client';
import { CSSProperties, ReactNode, useState } from 'react';

export type FlipCardProps = {
  front: ReactNode;
  back: ReactNode;
  width?: number;
  height?: number;
  frontStyle?: CSSProperties;
  backStyle?: CSSProperties;
};

const face: CSSProperties = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  border: '1px solid coral',
  borderRadius: '1rem',
  boxShadow: '0 8px 14px 0 rgba(0,0,0,0.2)',
};

export function FlipCard({
  front,
  back,
  width = 190,
  height = 254,
  frontStyle,
  backStyle,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{ width, height, perspective: 1000, fontFamily: 'sans-serif', backgroundColor: 'transparent' } as CSSProperties}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          transition: 'transform 0.8s',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        } as CSSProperties}
      >
        {/* Front face */}
        <div
          style={{
            ...face,
            background: 'linear-gradient(120deg, bisque 60%, rgb(255,231,222) 88%, rgb(255,211,195) 40%, rgba(255,127,80,0.603) 48%)',
            color: 'coral',
            ...frontStyle,
          }}
        >
          {front}
        </div>

        {/* Back face */}
        <div
          style={{
            ...face,
            background: 'linear-gradient(120deg, rgb(255,174,145) 30%, coral 88%, bisque 40%, rgb(255,185,160) 78%)',
            color: 'white',
            transform: 'rotateY(180deg)',
            ...backStyle,
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
