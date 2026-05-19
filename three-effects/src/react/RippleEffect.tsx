import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { RippleEffect as RippleEffectCore, RippleEffectOptions } from '../effects/RippleEffect';

export interface RippleEffectProps extends RippleEffectOptions {
  className?: string;
  style?: React.CSSProperties;
}

export interface RippleEffectHandle {
  trigger: () => void;
}

export const RippleEffect = forwardRef<RippleEffectHandle, RippleEffectProps>(
  function RippleEffect({ className, style, ...options }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const instanceRef = useRef<RippleEffectCore | null>(null);

    useEffect(() => {
      if (!containerRef.current) return;
      instanceRef.current = new RippleEffectCore(containerRef.current, options);
      return () => instanceRef.current?.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useImperativeHandle(ref, () => ({
      trigger: () => instanceRef.current?.trigger(),
    }));

    return (
      <div
        ref={containerRef}
        className={className}
        style={{ width: '100%', height: '300px', cursor: 'pointer', ...style }}
      />
    );
  }
);
