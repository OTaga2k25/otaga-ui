'use client';
import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import { Colors } from './theme';
import { useColorScheme } from './use-color-scheme';

export type BottomSheetProps = {
  visible?: boolean;
  onClose?: () => void;
  children: ReactNode;
  snapPoints?: number[];
  backgroundColor?: string;
  persistent?: boolean;
};

export function BottomSheet({
  visible = true,
  onClose,
  children,
  snapPoints = [300, 520],
  backgroundColor,
  persistent = false,
}: BottomSheetProps) {
  const scheme = useColorScheme();
  const bg = backgroundColor ?? Colors[scheme].background;
  const points = [...snapPoints].sort((a, b) => a - b);
  const minH = points[0];
  const maxH = points[points.length - 1];

  const [sheetH, setSheetH] = useState(persistent ? minH : 0);
  const [dragging, setDragging] = useState(false);
  const startY = useRef(0);
  const startH = useRef(0);

  useEffect(() => {
    if (persistent) {
      setSheetH(minH);
    } else {
      setSheetH(visible ? minH : 0);
    }
  }, [visible, persistent, minH]);

  // Prevent body scroll when open
  useEffect(() => {
    if (visible || persistent) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [visible, persistent]);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    startY.current = e.clientY;
    startH.current = sheetH;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const delta = startY.current - e.clientY;
    setSheetH(Math.min(maxH, Math.max(persistent ? minH : 0, startH.current + delta)));
  };

  const onPointerUp = () => {
    setDragging(false);
    const mid = (minH + maxH) / 2;
    if (!persistent && sheetH < minH * 0.5) {
      setSheetH(0);
      onClose?.();
    } else {
      setSheetH(sheetH > mid ? maxH : minH);
    }
  };

  const isVisible = persistent || visible;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 150,
        pointerEvents: isVisible ? 'all' : 'none',
      }}
    >
      {/* Backdrop */}
      {!persistent && (
        <div
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            opacity: visible ? 1 : 0,
            transition: dragging ? 'none' : 'opacity 0.3s ease',
          }}
        />
      )}

      {/* Sheet */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: sheetH,
          backgroundColor: bg,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          boxShadow: '0 -10px 20px rgba(0,0,0,0.15)',
          transition: dragging ? 'none' : 'height 0.35s cubic-bezier(0.32,0.72,0,1)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'visible',
        } as CSSProperties}
      >
        {/* Notch container — matches rn-ui-kit notchContainer */}
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: -1,
            paddingBottom: 20,
            flexShrink: 0,
            cursor: 'grab',
            touchAction: 'none',
          } as CSSProperties}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 30,
              backgroundColor: bg,
              borderRadius: 20,
              boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
            }}
          >
            <div
              style={{
                width: 40,
                height: 4,
                borderRadius: 2,
                backgroundColor: 'rgba(0,0,0,0.15)',
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: '0 20px 20px', overflowY: 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
