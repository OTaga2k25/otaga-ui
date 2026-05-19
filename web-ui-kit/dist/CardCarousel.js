'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
const ChevronLeft = () => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "m15 18-6-6 6-6" }) }));
const ChevronRight = () => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "m9 18 6-6-6-6" }) }));
function getCardStyle(offset, total) {
    const absOff = Math.abs(offset);
    const visible = absOff <= 1;
    return {
        position: 'absolute',
        width: '33%',
        height: '95%',
        borderRadius: 24,
        overflow: 'hidden',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.45s cubic-bezier(0.26, 0.86, 0.44, 0.985), opacity 0.45s ease',
        transform: `translateX(${offset * 50}%) scale(${offset === 0 ? 1 : 0.8})`,
        opacity: visible ? 1 : 0,
        zIndex: total - absOff,
        pointerEvents: offset === 0 ? 'auto' : 'none',
        boxShadow: '0 25px 50px rgba(0,0,0,0.35)',
        backgroundColor: '#1e1e1e',
    };
}
export function CardCarousel({ cards, autoPlayDelay = 3000, maxWidth = 900, style, }) {
    const [active, setActive] = useState(Math.floor(cards.length / 2));
    const [paused, setPaused] = useState(false);
    const intervalRef = useRef(null);
    const dragStartX = useRef(null);
    const goTo = (index) => {
        setActive(((index % cards.length) + cards.length) % cards.length);
    };
    const next = () => goTo(active + 1);
    const prev = () => goTo(active - 1);
    useEffect(() => {
        if (paused)
            return;
        intervalRef.current = setInterval(next, autoPlayDelay);
        return () => { if (intervalRef.current)
            clearInterval(intervalRef.current); };
    }, [paused, active, autoPlayDelay]);
    const onPointerDown = (e) => {
        dragStartX.current = e.clientX;
        e.currentTarget.setPointerCapture(e.pointerId);
    };
    const onPointerUp = (e) => {
        if (dragStartX.current === null)
            return;
        const dx = e.clientX - dragStartX.current;
        if (dx > 75)
            prev();
        else if (dx < -75)
            next();
        dragStartX.current = null;
    };
    return (_jsx("section", { style: { width: '100%', fontFamily: 'sans-serif', overflow: 'hidden', ...style }, children: _jsx("div", { style: { maxWidth, margin: '0 auto', padding: 16 }, onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false), children: _jsxs("div", { style: {
                    position: 'relative',
                    borderRadius: 24,
                    border: '1px solid rgba(255,255,255,0.1)',
                    backgroundColor: '#fff',
                    padding: '24px 24px 16px',
                }, children: [_jsx("div", { style: {
                            position: 'absolute', top: 20, left: 20,
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            borderRadius: 12, border: '1px solid #e5e7eb',
                            backgroundColor: 'rgba(243,244,246,0.8)', backdropFilter: 'blur(4px)',
                            padding: '6px 12px', fontSize: 13, fontWeight: 500, color: '#374151',
                        }, children: "\u2726 Enhanced Carousel" }), _jsx("div", { style: {
                            position: 'relative', width: '100%', height: 340,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            overflow: 'hidden', paddingTop: 48, cursor: 'grab', userSelect: 'none',
                        }, onPointerDown: onPointerDown, onPointerUp: onPointerUp, children: cards.map((card, index) => {
                            let offset = index - active;
                            if (offset > cards.length / 2)
                                offset -= cards.length;
                            else if (offset < -cards.length / 2)
                                offset += cards.length;
                            return (_jsxs("div", { style: getCardStyle(offset, cards.length), children: [_jsx("img", { src: card.imageUrl, alt: card.title, style: { width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', display: 'block' }, onError: e => { e.target.src = 'https://placehold.co/400x600/1e1e1e/fff?text=Missing'; } }), _jsx("div", { style: {
                                            position: 'absolute', bottom: 0, left: 0, right: 0,
                                            padding: 16,
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                        }, children: _jsx("p", { style: { margin: 0, color: '#fff', fontSize: 16, fontWeight: 600 }, children: card.title }) })] }, card.id));
                        }) }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginTop: 20 }, children: [_jsx("button", { onClick: prev, style: btnStyle, children: _jsx(ChevronLeft, {}) }), _jsx("div", { style: { display: 'flex', alignItems: 'center', gap: 6 }, children: cards.map((_, i) => (_jsx("button", { onClick: () => goTo(i), style: {
                                        height: 8, width: active === i ? 24 : 8,
                                        borderRadius: 9999, border: 'none', cursor: 'pointer', padding: 0,
                                        backgroundColor: active === i ? '#f472b6' : '#d1d5db',
                                        transition: 'width 0.3s ease, background-color 0.3s ease',
                                    }, "aria-label": `Slide ${i + 1}` }, i))) }), _jsx("button", { onClick: next, style: btnStyle, children: _jsx(ChevronRight, {}) })] })] }) }) }));
}
const btnStyle = {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 36, height: 36, borderRadius: '50%', border: '1px solid #e5e7eb',
    backgroundColor: '#f3f4f6', cursor: 'pointer', color: '#374151',
    transition: 'background-color 0.15s ease',
};
//# sourceMappingURL=CardCarousel.js.map