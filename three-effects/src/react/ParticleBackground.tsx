import React, { useEffect, useRef } from 'react';
import { ParticleBackground as ParticleBackgroundCore, ParticleBackgroundOptions } from '../effects/ParticleBackground';

export interface ParticleBackgroundProps extends ParticleBackgroundOptions {
  className?: string;
  style?: React.CSSProperties;
}

export function ParticleBackground({ className, style, ...options }: ParticleBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const instance = new ParticleBackgroundCore(ref.current, options);
    return () => instance.destroy();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, ...style }}
    />
  );
}
