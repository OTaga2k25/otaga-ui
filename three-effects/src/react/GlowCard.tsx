import React, { useEffect, useRef } from 'react';
import { GlowCard as GlowCardCore, GlowCardOptions } from '../effects/GlowCard';

export interface GlowCardProps extends GlowCardOptions {
  className?: string;
  style?: React.CSSProperties;
}

export function GlowCard({ className, style, ...options }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const instance = new GlowCardCore(ref.current, options);
    return () => instance.destroy();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ width: '100%', height: '420px', ...style }}
    />
  );
}
