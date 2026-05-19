'use client';
import { CSSProperties, ReactNode, useRef, useState } from 'react';

export interface DockItem {
  name: string;
  href?: string;
  icon: (props: { style?: CSSProperties }) => ReactNode;
  onClick?: () => void;
}

export interface DockProps {
  items: DockItem[];
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  style?: CSSProperties;
}

export function Dock({
  items,
  iconSize       = 36,
  iconMagnification = 60,
  iconDistance   = 140,
  style,
}: DockProps) {
  const [mouseX, setMouseX] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const getSize = (index: number): number => {
    if (mouseX === null) return iconSize;
    const el = itemRefs.current[index];
    if (!el) return iconSize;
    const rect = el.getBoundingClientRect();
    const center = rect.x + rect.width / 2;
    const dist = Math.abs(mouseX - center);
    if (dist >= iconDistance) return iconSize;
    return iconSize + (iconMagnification - iconSize) * (1 - dist / iconDistance);
  };

  return (
    <div
      onMouseMove={e => setMouseX(e.clientX)}
      onMouseLeave={() => setMouseX(null)}
      style={{
        display: 'inline-flex',
        height: 58,
        alignItems: 'center',
        gap: 8,
        borderRadius: 16,
        backgroundColor: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(12px)',
        padding: '0 8px',
        border: '1px solid rgba(0,0,0,0.1)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        ...style,
      }}
    >
      {items.map((item, i) => {
        const size = getSize(i);
        const Icon = item.icon;
        return (
          <div
            key={item.name}
            ref={el => { itemRefs.current[i] = el; }}
            style={{
              width: size,
              height: size,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              flexShrink: 0,
              transition: 'width 0.12s cubic-bezier(0.34,1.56,0.64,1), height 0.12s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          >
            <a
              href={item.href ?? '#'}
              style={{
                display: 'flex', width: '100%', height: '100%',
                alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none',
              }}
              onClick={item.onClick ? e => { e.preventDefault(); item.onClick?.(); } : undefined}
              title={item.name}
            >
              <Icon style={{ width: '72%', height: '72%', color: '#52525b' }} />
            </a>
          </div>
        );
      })}
    </div>
  );
}
