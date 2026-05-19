'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from 'react';
import { Icon } from './Icon';
export function CartButton({ label = 'Add to cart', color = '#000', iconColor = '#fff', height: containerH = 66, width = '100%', onAddToCart, onBagPress, }) {
    const [isAdded, setIsAdded] = useState(false);
    const [translateX, setTranslateX] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const [containerW, setContainerW] = useState(typeof width === 'number' ? width : 320);
    const containerRef = useRef(null);
    const startX = useRef(0);
    const dragging = useRef(false);
    // Track real container width via ResizeObserver
    useEffect(() => {
        if (!containerRef.current)
            return;
        const ro = new ResizeObserver(entries => {
            const w = entries[0]?.contentRect.width;
            if (w && w > 0)
                setContainerW(w);
        });
        ro.observe(containerRef.current);
        // read immediately
        setContainerW(containerRef.current.clientWidth || containerW);
        return () => ro.disconnect();
    }, []);
    const padding = containerH * 0.1;
    const innerH = containerH - padding * 2;
    const circleSize = innerH;
    const fontSize = Math.max(11, innerH * 0.28);
    const iconSize = innerH * 0.4;
    const swipeLimit = containerW - circleSize - padding * 2;
    const onPointerDown = (e) => {
        if (isAdded)
            return;
        dragging.current = true;
        startX.current = e.clientX - translateX;
        setTransitioning(false);
        e.currentTarget.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e) => {
        if (!dragging.current)
            return;
        setTranslateX(Math.max(0, Math.min(swipeLimit, e.clientX - startX.current)));
    };
    const onPointerUp = () => {
        if (!dragging.current)
            return;
        dragging.current = false;
        setTransitioning(true);
        if (translateX > swipeLimit * 0.7) {
            setTranslateX(swipeLimit);
            setIsAdded(true);
            onAddToCart?.();
            setTimeout(() => { setIsAdded(false); setTranslateX(0); }, 2000);
        }
        else {
            setTranslateX(0);
        }
    };
    const progress = translateX / (swipeLimit || 1);
    // pixel-based button width (avoids % formula fallback issues)
    const initialW = containerW * 0.55;
    const buttonW = initialW - progress * (initialW - circleSize);
    const textOpacity = Math.max(0, 1 - progress * 2.5);
    const bagOpacity = progress > 0.7 ? Math.max(0, 1 - (progress - 0.7) / 0.3) : 1;
    return (_jsxs("div", { ref: containerRef, style: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#F0F0F0',
            borderRadius: containerH / 2,
            height: containerH,
            width,
            padding,
            boxSizing: 'border-box',
            overflow: 'hidden',
            userSelect: 'none',
        }, children: [_jsxs("div", { style: { position: 'absolute', left: '50%', display: 'flex', gap: 4, pointerEvents: 'none' }, children: [_jsx(Icon, { name: "chevron.right", size: iconSize * 0.75, color: "rgba(0,0,0,0.12)" }), _jsx(Icon, { name: "chevron.right", size: iconSize * 0.75, color: "rgba(0,0,0,0.25)" })] }), _jsx("div", { onPointerDown: onPointerDown, onPointerMove: onPointerMove, onPointerUp: onPointerUp, style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: color,
                    height: innerH,
                    width: buttonW,
                    minWidth: circleSize,
                    borderRadius: innerH / 2,
                    transform: `translateX(${translateX}px)`,
                    transition: transitioning ? 'transform 0.35s cubic-bezier(0.32,0.72,0,1), width 0.35s' : 'none',
                    zIndex: 10,
                    cursor: isAdded ? 'default' : 'grab',
                    overflow: 'hidden',
                    flexShrink: 0,
                    touchAction: 'none',
                }, children: isAdded ? (_jsx(Icon, { name: "checkmark", size: iconSize * 1.4, color: iconColor })) : (_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: 5, padding: '0 12px', opacity: textOpacity, overflow: 'hidden' }, children: [_jsx("span", { style: {
                                color: iconColor, fontSize, fontWeight: 700,
                                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                            }, children: label }), _jsx(Icon, { name: "chevron.right", size: iconSize * 0.85, color: iconColor, style: { flexShrink: 0 } })] })) }), _jsx("button", { onClick: onBagPress, style: {
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: color,
                    width: circleSize,
                    height: circleSize,
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    opacity: isAdded ? 0 : bagOpacity,
                    transition: 'opacity 0.2s',
                    flexShrink: 0,
                }, children: _jsx(Icon, { name: "bag", size: iconSize, color: iconColor }) })] }));
}
//# sourceMappingURL=CartButton.js.map