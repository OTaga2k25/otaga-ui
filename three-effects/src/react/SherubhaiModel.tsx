import React, { useEffect, useRef } from 'react';
import { SherubhaiModel as SherubhaiCore, SherubhaiModelOptions } from '../effects/SherubhaiModel';

export interface SherubhaiModelProps extends SherubhaiModelOptions {
  className?: string;
  style?: React.CSSProperties;
}

export function SherubhaiModel({ className, style, animation = 'Idle', ...options }: SherubhaiModelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const model = useRef<SherubhaiCore | null>(null);

  // create once
  useEffect(() => {
    if (!ref.current) return;
    const instance = new SherubhaiCore(ref.current, { ...options, animation });
    model.current = instance;
    return () => { instance.destroy(); model.current = null; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.url]);

  // switch clip when the prop changes
  useEffect(() => {
    const m = model.current;
    if (!m) return;
    m.ready.then(() => m.play(animation));
  }, [animation]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ width: '100%', height: '460px', ...style }}
    />
  );
}
