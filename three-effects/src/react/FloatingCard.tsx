import React, { useEffect, useRef } from 'react';
import { FloatingCard as FloatingCardCore, FloatingCardOptions } from '../effects/FloatingCard';

export interface FloatingCardProps extends FloatingCardOptions {
  className?: string;
  style?: React.CSSProperties;
}

export function FloatingCard({ className, style, ...options }: FloatingCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const instance = new FloatingCardCore(ref.current, options);
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
