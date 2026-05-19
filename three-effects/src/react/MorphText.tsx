import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { MorphText as MorphTextCore, MorphTextOptions } from '../effects/MorphText';

export interface MorphTextProps extends MorphTextOptions {
  className?: string;
  style?: React.CSSProperties;
}

export interface MorphTextHandle {
  next: () => void;
}

export const MorphText = forwardRef<MorphTextHandle, MorphTextProps>(
  function MorphText({ className, style, ...options }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const instanceRef = useRef<MorphTextCore | null>(null);

    useEffect(() => {
      if (!containerRef.current) return;
      instanceRef.current = new MorphTextCore(containerRef.current, options);
      return () => instanceRef.current?.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useImperativeHandle(ref, () => ({
      next: () => instanceRef.current?.next(),
    }));

    return (
      <div
        ref={containerRef}
        className={className}
        style={{ width: '100%', height: '180px', ...style }}
      />
    );
  }
);
