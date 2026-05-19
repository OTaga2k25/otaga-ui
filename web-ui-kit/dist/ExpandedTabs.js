'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
export function ExpandedTabs({ tabs, style, activeColor = '#22c55e', onChange, }) {
    const [selected, setSelected] = useState(0);
    const containerRef = useRef(null);
    useEffect(() => {
        const handler = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setSelected(null);
                onChange?.(null);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [onChange]);
    const handleSelect = (index) => {
        setSelected(index);
        onChange?.(index);
    };
    return (_jsx("div", { ref: containerRef, style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 2,
            borderRadius: 9999,
            border: '1px solid rgba(148,163,184,0.25)',
            backgroundColor: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(8px)',
            padding: '4px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            ...style,
        }, children: tabs.map((tab, index) => {
            if (tab.type === 'separator') {
                return (_jsx("div", { style: {
                        width: 1,
                        height: 24,
                        backgroundColor: 'rgba(148,163,184,0.35)',
                        flexShrink: 0,
                        margin: '0 4px',
                    } }, `sep-${index}`));
            }
            const isActive = selected === index;
            const Icon = tab.icon;
            return (_jsxs("button", { onClick: () => handleSelect(index), style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: isActive ? 6 : 0,
                    borderRadius: 9999,
                    padding: '8px 14px',
                    border: `1px solid ${isActive ? `${activeColor}55` : 'transparent'}`,
                    backgroundColor: isActive ? `${activeColor}15` : 'transparent',
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: 600,
                    color: isActive ? '#111827' : '#6b7280',
                    transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, gap 0.2s ease',
                    outline: 'none',
                    whiteSpace: 'nowrap',
                }, children: [_jsx(Icon, { style: { width: 18, height: 18, display: 'block', flexShrink: 0 } }), _jsx("span", { style: {
                            display: 'inline-block',
                            overflow: 'hidden',
                            maxWidth: isActive ? 100 : 0,
                            opacity: isActive ? 1 : 0,
                            transition: 'max-width 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease',
                            verticalAlign: 'middle',
                        }, children: tab.title })] }, tab.title));
        }) }));
}
//# sourceMappingURL=ExpandedTabs.js.map