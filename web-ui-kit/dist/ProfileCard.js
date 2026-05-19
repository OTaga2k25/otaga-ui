'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export function ProfileCard({ name, username, avatar, coverColor, description, accentColor = '#0F4D3C', stats = [
    { label: 'Posts', value: '128' },
    { label: 'Followers', value: '4.2k' },
    { label: 'Following', value: '312' },
], links = {}, onFollow, onMessage, style, }) {
    const [following, setFollowing] = useState(false);
    const cover = coverColor ?? accentColor;
    const dim = (hex, amount = 40) => {
        const n = parseInt(hex.replace('#', ''), 16);
        const r = Math.max(0, (n >> 16) - amount);
        const g = Math.max(0, ((n >> 8) & 0xff) - amount);
        const b = Math.max(0, (n & 0xff) - amount);
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };
    const coverGrad = `linear-gradient(135deg, ${cover}, ${dim(cover, 60)})`;
    const hasLinks = Object.values(links).some(Boolean);
    return (_jsxs("div", { style: {
            width: 300,
            background: '#1C1C1E',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)',
            fontFamily: "system-ui, -apple-system, sans-serif",
            flexShrink: 0,
            ...style,
        }, children: [_jsx("div", { style: {
                    height: 90,
                    background: coverGrad,
                    position: 'relative',
                }, children: _jsx("div", { style: {
                        position: 'absolute', inset: 0,
                        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)',
                    } }) }), _jsx("div", { style: { display: 'flex', justifyContent: 'center', marginTop: -36, position: 'relative', zIndex: 2 }, children: avatar ? (_jsx("img", { src: avatar, alt: name, style: {
                        width: 72, height: 72,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid #1C1C1E',
                        boxShadow: `0 0 0 2px ${accentColor}`,
                    } })) : (_jsx("div", { style: {
                        width: 72, height: 72,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${accentColor}44, ${accentColor}22)`,
                        border: '3px solid #1C1C1E',
                        boxShadow: `0 0 0 2px ${accentColor}66`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }, children: _jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: accentColor, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }), _jsx("circle", { cx: "12", cy: "7", r: "4" })] }) })) }), _jsxs("div", { style: { textAlign: 'center', padding: '10px 20px 0' }, children: [name ? (_jsx("p", { style: { margin: 0, fontSize: 17, fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.3px' }, children: name })) : (_jsx("div", { style: { height: 17, width: 120, borderRadius: 8, background: '#333', margin: '0 auto' } })), _jsx("div", { style: { marginTop: 4 }, children: username ? (_jsx("p", { style: { margin: 0, fontSize: 13, color: '#8A8A8E', fontWeight: 400 }, children: username })) : (_jsx("div", { style: { height: 13, width: 80, borderRadius: 6, background: '#2a2a2a', margin: '4px auto 0' } })) })] }), _jsx("div", { style: { padding: '12px 20px 0', textAlign: 'center', minHeight: 48 }, children: description ? (_jsx("p", { style: {
                        margin: 0, fontSize: 13, color: '#A0A0A6',
                        lineHeight: '19px',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }, children: description })) : (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }, children: [_jsx("div", { style: { height: 12, width: '80%', borderRadius: 6, background: '#2a2a2a' } }), _jsx("div", { style: { height: 12, width: '60%', borderRadius: 6, background: '#2a2a2a' } })] })) }), _jsx("div", { style: {
                    display: 'flex',
                    margin: '16px 20px',
                    background: '#252527',
                    borderRadius: 14,
                    overflow: 'hidden',
                }, children: stats.map((s, i) => (_jsxs("div", { style: {
                        flex: 1,
                        padding: '12px 0',
                        textAlign: 'center',
                        borderRight: i < stats.length - 1 ? '1px solid #333' : 'none',
                    }, children: [_jsx("p", { style: { margin: 0, fontSize: 16, fontWeight: 700, color: '#FFFFFF' }, children: s.value }), _jsx("p", { style: { margin: '2px 0 0', fontSize: 10, color: '#636366', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }, children: s.label })] }, s.label))) }), _jsxs("div", { style: { display: 'flex', gap: 10, padding: '0 20px' }, children: [_jsx("button", { onClick: () => { setFollowing(f => !f); onFollow?.(); }, style: {
                            flex: 1,
                            padding: '10px 0',
                            border: 'none',
                            borderRadius: 12,
                            fontSize: 14,
                            fontWeight: 700,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            background: following ? '#2a2a2a' : accentColor,
                            color: following ? '#8A8A8E' : '#fff',
                            letterSpacing: '-0.2px',
                        }, children: following ? 'Following' : 'Follow' }), _jsx("button", { onClick: onMessage, style: {
                            flex: 1,
                            padding: '10px 0',
                            border: `1px solid #333`,
                            borderRadius: 12,
                            fontSize: 14,
                            fontWeight: 600,
                            cursor: 'pointer',
                            background: 'transparent',
                            color: '#EBEBF5CC',
                            transition: 'all 0.2s ease',
                        }, onMouseEnter: e => (e.currentTarget.style.borderColor = accentColor), onMouseLeave: e => (e.currentTarget.style.borderColor = '#333'), children: "Message" })] }), hasLinks && (_jsx("div", { style: {
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 4,
                    padding: '14px 20px 18px',
                }, children: SOCIALS.map(({ key, label, paths, vb }) => {
                    const href = links[key];
                    return (_jsx("a", { href: href ?? '#', target: href ? '_blank' : undefined, rel: "noopener noreferrer", "aria-label": label, style: {
                            width: 36, height: 36,
                            borderRadius: 10,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: href ? '#252527' : '#1e1e1e',
                            transition: 'all 0.2s',
                            textDecoration: 'none',
                            opacity: href ? 1 : 0.25,
                            pointerEvents: href ? 'auto' : 'none',
                        }, onMouseEnter: e => {
                            if (href) {
                                e.currentTarget.style.background = `${accentColor}33`;
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }
                        }, onMouseLeave: e => {
                            e.currentTarget.style.background = '#252527';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }, children: _jsx("svg", { viewBox: vb, width: "16", height: "16", fill: href ? accentColor : '#555', children: paths.map((d, i) => _jsx("path", { d: d }, i)) }) }, key));
                }) })), !hasLinks && _jsx("div", { style: { height: 18 } })] }));
}
const SOCIALS = [
    {
        key: 'twitter', label: 'X / Twitter', vb: '0 0 512 512',
        paths: ['M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'],
    },
    {
        key: 'instagram', label: 'Instagram', vb: '0 0 448 512',
        paths: ['M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'],
    },
    {
        key: 'facebook', label: 'Facebook', vb: '0 0 512 512',
        paths: ['M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z'],
    },
    {
        key: 'linkedin', label: 'LinkedIn', vb: '0 0 448 512',
        paths: ['M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'],
    },
];
//# sourceMappingURL=ProfileCard.js.map