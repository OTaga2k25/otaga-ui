'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { Icon } from './Icon';
import { ThemedText } from './ThemedText';
import { Colors } from './theme';
import { useColorScheme } from './use-color-scheme';
export function Sidebar({ visible, onClose, title, items, footer, width = '75%' }) {
    const scheme = useColorScheme();
    const theme = Colors[scheme];
    const overlayRef = useRef(null);
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape')
            onClose(); };
        if (visible)
            document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [visible, onClose]);
    // Prevent body scroll when open
    useEffect(() => {
        document.body.style.overflow = visible ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [visible]);
    return (_jsxs("div", { style: {
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            pointerEvents: visible ? 'all' : 'none',
        }, children: [_jsx("div", { ref: overlayRef, onClick: onClose, style: {
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                } }), _jsxs("div", { role: "dialog", "aria-modal": "true", style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width,
                    maxWidth: 320,
                    backgroundColor: theme.background,
                    boxShadow: '4px 0 24px rgba(0,0,0,0.18)',
                    transform: visible ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                }, children: [_jsxs("div", { style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: 20,
                            borderBottom: `1px solid ${theme.icon}20`,
                        }, children: [_jsx(ThemedText, { type: "subtitle", children: title ?? 'Menu' }), _jsx("button", { onClick: onClose, style: { background: 'none', border: 'none', cursor: 'pointer', padding: 4 }, "aria-label": "Close", children: _jsx(Icon, { name: "chevron.left", size: 24, color: theme.icon }) })] }), _jsx("nav", { style: { padding: 10, flex: 1 }, children: items.map((item) => (_jsxs("button", { onClick: () => { item.onPress?.(); onClose(); }, style: {
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 15,
                                padding: '14px 15px',
                                width: '100%',
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                                borderRadius: 8,
                                textAlign: 'left',
                                transition: 'background 0.15s',
                            }, onMouseEnter: (e) => (e.currentTarget.style.background = `${theme.icon}10`), onMouseLeave: (e) => (e.currentTarget.style.background = 'none'), children: [item.icon && _jsx(Icon, { name: item.icon, size: 22, color: theme.icon }), _jsx(ThemedText, { type: "defaultSemiBold", children: item.label })] }, item.id))) }), footer && (_jsx("div", { style: { padding: 20, borderTop: '1px solid rgba(0,0,0,0.05)' }, children: footer }))] })] }));
}
//# sourceMappingURL=Sidebar.js.map