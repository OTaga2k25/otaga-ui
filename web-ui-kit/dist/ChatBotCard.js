'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const AttachIcon = () => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 24 24", children: _jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8" }) }));
const GridIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", height: 20, width: 20, xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0-8h6m-3-3v6", strokeWidth: 2, strokeLinejoin: "round", strokeLinecap: "round", stroke: "currentColor", fill: "none" }) }));
const GlobeIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", height: 20, width: 20, xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.01 8.01 0 0 0 5.648 6.667M10.03 13c.151 2.439.848 4.73 1.97 6.752A15.9 15.9 0 0 0 13.97 13zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.01 8.01 0 0 0 19.938 13M4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.01 8.01 0 0 0 4.062 11m5.969 0h3.938A15.9 15.9 0 0 0 12 4.248A15.9 15.9 0 0 0 10.03 11m4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.01 8.01 0 0 0-5.648-6.667", fill: "currentColor" }) }));
const SendIcon = () => (_jsx("svg", { viewBox: "0 0 512 512", width: 18, height: 18, children: _jsx("path", { fill: "currentColor", d: "M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05" }) }));
export function ChatBotCard({ placeholder = 'Imagine Something...✦˚', tags = ['Create An Image', 'Analyse Data', 'More'], onSubmit, onAttach, onGrid, onGlobe, style, }) {
    const [value, setValue] = useState('');
    const [focused, setFocused] = useState(false);
    const [sendHover, setSendHover] = useState(false);
    const [sendFocused, setSendFocused] = useState(false);
    const [sendActive, setSendActive] = useState(false);
    const [btnHover, setBtnHover] = useState(null);
    const handleSubmit = () => { onSubmit?.(value); setValue(''); };
    const actionBtns = [
        { icon: _jsx(AttachIcon, {}), cb: onAttach },
        { icon: _jsx(GridIcon, {}), cb: onGrid },
        { icon: _jsx(GlobeIcon, {}), cb: onGlobe },
    ];
    const sendIconStyle = {
        transition: 'all 0.3s ease',
        color: sendHover || sendFocused ? '#f3f6fd' : '#8b8b8b',
        filter: sendHover || sendFocused ? 'drop-shadow(0 0 5px #fff)' : 'none',
        transform: sendFocused ? 'scale(1.2) rotate(45deg) translateX(-2px) translateY(1px)' : 'none',
    };
    return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', maxWidth: 260, width: '100%', ...style }, children: [_jsxs("div", { style: {
                    position: 'relative',
                    display: 'flex',
                    background: 'linear-gradient(to bottom right, #7e7e7e, #363636, #363636, #363636, #363636)',
                    borderRadius: 16,
                    padding: 1.5,
                    overflow: 'hidden',
                }, children: [_jsx("div", { style: {
                            position: 'absolute',
                            top: -10, left: -10,
                            width: 30, height: 30,
                            background: 'radial-gradient(ellipse at center, #fff, rgba(255,255,255,0.3), rgba(255,255,255,0.1), transparent, transparent)',
                            filter: 'blur(1px)',
                            pointerEvents: 'none',
                        } }), _jsxs("div", { style: {
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            borderRadius: 15,
                            width: '100%',
                            overflow: 'hidden',
                        }, children: [_jsx("textarea", { value: value, onChange: e => setValue(e.target.value), placeholder: focused ? '' : placeholder, onFocus: () => setFocused(true), onBlur: () => setFocused(false), style: {
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    width: '100%',
                                    height: 50,
                                    color: '#fff',
                                    fontFamily: 'sans-serif',
                                    fontSize: 12,
                                    fontWeight: 400,
                                    padding: 10,
                                    resize: 'none',
                                    outline: 'none',
                                    boxSizing: 'border-box',
                                } }), _jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: 10 }, children: [_jsx("div", { style: { display: 'flex', gap: 8 }, children: actionBtns.map((btn, i) => (_jsx("button", { onClick: btn.cb, onMouseEnter: () => setBtnHover(i), onMouseLeave: () => setBtnHover(null), style: {
                                                display: 'flex',
                                                color: btnHover === i ? '#fff' : 'rgba(255,255,255,0.1)',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                cursor: 'pointer',
                                                padding: 0,
                                                transform: btnHover === i ? 'translateY(-5px)' : 'none',
                                                transition: 'all 0.3s ease',
                                            }, children: btn.icon }, i))) }), _jsx("button", { onClick: handleSubmit, onMouseEnter: () => setSendHover(true), onMouseLeave: () => { setSendHover(false); setSendActive(false); }, onFocus: () => setSendFocused(true), onBlur: () => setSendFocused(false), onMouseDown: () => setSendActive(true), onMouseUp: () => setSendActive(false), style: {
                                            display: 'flex',
                                            padding: 2,
                                            backgroundImage: 'linear-gradient(to top, #292929, #555, #292929)',
                                            borderRadius: 10,
                                            boxShadow: 'inset 0 6px 2px -4px rgba(255,255,255,0.5)',
                                            cursor: 'pointer',
                                            border: 'none',
                                            outline: 'none',
                                            transform: sendActive ? 'scale(0.92)' : 'none',
                                            transition: 'all 0.15s ease',
                                        }, children: _jsx("span", { style: {
                                                width: 30, height: 30,
                                                padding: 6,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                backgroundColor: 'rgba(0,0,0,0.1)',
                                                borderRadius: 10,
                                                backdropFilter: 'blur(3px)',
                                            }, children: _jsx("span", { style: sendIconStyle, children: _jsx(SendIcon, {}) }) }) })] })] })] }), _jsx("div", { style: { padding: '14px 0', display: 'flex', color: '#fff', fontSize: 10, gap: 4, flexWrap: 'wrap' }, children: tags.map(tag => (_jsx("span", { style: {
                        padding: '4px 8px',
                        backgroundColor: '#1b1b1b',
                        border: '1.5px solid #363636',
                        borderRadius: 10,
                        cursor: 'pointer',
                        userSelect: 'none',
                    }, children: tag }, tag))) })] }));
}
//# sourceMappingURL=ChatBotCard.js.map