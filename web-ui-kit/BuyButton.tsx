'use client';
import { CSSProperties, useRef, useState } from 'react';
import { Icon } from './Icon';

export type BuyButtonProps = {
  label?: string;
  color?: string;
  height?: number;
  width?: number | string;
  onBuy?: () => void;
};

export function BuyButton({
  label = 'Buy Now',
  color = '#000',
  height: containerH = 62,
  width = '100%',
  onBuy,
}: BuyButtonProps) {
  const [isBought, setIsBought] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const dragging = useRef(false);

  const padding = containerH * 0.1;
  const innerSize = containerH - padding * 2;
  const fontSize = innerSize * 0.35;
  const iconSize = innerSize * 0.5;

  const getSwipeLimit = () => {
    const w = containerRef.current?.clientWidth ?? 300;
    return w - innerSize - padding * 2;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (isBought) return;
    dragging.current = true;
    startX.current = e.clientX - translateX;
    setTransitioning(false);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const limit = getSwipeLimit();
    setTranslateX(Math.max(0, Math.min(limit, e.clientX - startX.current)));
  };

  const onPointerUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    setTransitioning(true);
    const limit = getSwipeLimit();
    if (translateX > limit * 0.8) {
      setTranslateX(limit);
      setIsBought(true);
      onBuy?.();
      setTimeout(() => { setIsBought(false); setTranslateX(0); }, 2000);
    } else {
      setTranslateX(0);
    }
  };

  const progress = translateX / (getSwipeLimit() || 1);
  const textOpacity = Math.max(0, 1 - progress * 2.5);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: color,
        borderRadius: containerH / 2,
        height: containerH,
        width,
        padding,
        boxSizing: 'border-box',
        overflow: 'hidden',
        userSelect: 'none',
      } as CSSProperties}
    >
      {/* Background label + chevrons */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          paddingLeft: 30,
          opacity: textOpacity,
          pointerEvents: 'none',
        }}
      >
        <span style={{ color: '#fff', fontSize, fontWeight: 700 }}>{label}</span>
        <div style={{ display: 'flex', gap: 2 }}>
          <Icon name="chevron.right" size={fontSize * 0.8} color="rgba(255,255,255,0.3)" />
          <Icon name="chevron.right" size={fontSize * 0.8} color="rgba(255,255,255,0.6)" />
          <Icon name="chevron.right" size={fontSize * 0.8} color="#fff" />
        </div>
      </div>

      {/* Sliding circle */}
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          width: innerSize,
          height: innerSize,
          borderRadius: '50%',
          transform: `translateX(${translateX}px)`,
          transition: transitioning ? 'transform 0.35s cubic-bezier(0.32,0.72,0,1)' : 'none',
          zIndex: 10,
          cursor: isBought ? 'default' : 'grab',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          flexShrink: 0,
          touchAction: 'none',
        } as CSSProperties}
      >
        <Icon name={isBought ? 'checkmark' : 'bag'} size={iconSize} color="#000" />
      </div>
    </div>
  );
}
