'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const INK = '#323232';
const PAPER_FRONT = '#fff9e6';
const PAPER_BACK = '#e6f0ff';
const PRIMARY_BTN = '#ff6b6b';
const SECONDARY_BTN = '#4ecdc4';
const SWITCH_BG = '#ffe66d';
const INPUT_FOCUS = '#2d8cf0';
const SKETCH_1 = '8px 24px 8px 24px / 24px 8px 24px 8px';
const SKETCH_2 = '24px 8px 24px 8px / 8px 24px 8px 24px';
const SKETCH_BTN = '16px 5px 16px 5px / 5px 16px 5px 16px';
const NOTEBOOK = 'repeating-linear-gradient(transparent,transparent 28px,rgba(0,0,0,0.06) 28px,rgba(0,0,0,0.06) 30px)';
export function DoodleFlipCard({ onLogin, onSignUp }) {
    const [isSignUp, setIsSignUp] = useState(false);
    const [focused, setFocused] = useState('');
    const [hoverIn, setHoverIn] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPwd, setLoginPwd] = useState('');
    const [signName, setSignName] = useState('');
    const [signEmail, setSignEmail] = useState('');
    const [signPwd, setSignPwd] = useState('');
    const inputStyle = (key) => ({
        width: 250, height: 40, padding: '5px 15px', boxSizing: 'border-box',
        fontFamily: 'inherit', fontSize: 15, fontWeight: 600, color: INK,
        backgroundColor: '#fff',
        border: `2px solid ${focused === key ? INPUT_FOCUS : INK}`,
        borderRadius: focused === key ? SKETCH_2 : SKETCH_1,
        boxShadow: `${hoverIn === key || focused === key ? 4 : 3}px ${hoverIn === key || focused === key ? 4 : 3}px 0px ${INK}`,
        outline: 'none',
        transform: hoverIn === key && focused !== key ? 'translateY(-2px)' : 'none',
        transition: 'all 0.2s ease',
    });
    const faceBase = {
        position: 'absolute', width: '100%', height: '100%',
        backfaceVisibility: 'hidden',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: 20, boxSizing: 'border-box',
        border: `2px solid ${INK}`,
        boxShadow: `4px 4px 0px ${INK}`,
        backgroundImage: NOTEBOOK,
        backgroundPosition: '0 15px',
    };
    const makeBtn = (bg, rot) => ({
        margin: '15px 0', width: 120, height: 40,
        fontFamily: 'inherit', fontSize: 17, fontWeight: 900, letterSpacing: 1,
        color: INK, backgroundColor: bg,
        border: `2px solid ${INK}`, borderRadius: SKETCH_BTN,
        boxShadow: `4px 4px 0px ${INK}`,
        cursor: 'pointer', transform: `rotate(${rot})`, transition: 'all 0.15s ease',
    });
    const onBtnEnter = (e, hoverBg, rot) => {
        const b = e.currentTarget;
        b.style.backgroundColor = hoverBg;
        b.style.transform = `translateY(-2px) rotate(${rot})`;
        b.style.boxShadow = `5px 5px 0px ${INK}`;
    };
    const onBtnLeave = (e, bg, rot) => {
        const b = e.currentTarget;
        b.style.backgroundColor = bg;
        b.style.transform = `rotate(${rot})`;
        b.style.boxShadow = `4px 4px 0px ${INK}`;
    };
    const onBtnDown = (e) => {
        e.currentTarget.style.transform = 'translate(3px,3px) rotate(0deg)';
        e.currentTarget.style.boxShadow = `0px 0px 0px ${INK}`;
    };
    return (_jsxs("div", { style: { fontFamily: "'Comic Sans MS','Chalkboard SE',sans-serif", display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }, children: [_jsx("style", { children: `
        @keyframes dfc-star    { 0%,100%{transform:translateY(0) rotate(-15deg)} 50%{transform:translateY(-8px) rotate(-10deg)} }
        @keyframes dfc-sparkle { 0%,100%{transform:translateY(0) rotate(10deg)}  50%{transform:translateY(-8px) rotate(15deg)} }
        @keyframes dfc-swirl   { 0%,100%{transform:translateY(0) rotate(0deg)}   50%{transform:translateY(-8px) rotate(5deg)} }
        @keyframes dfc-wiggle  { 0%,100%{transform:rotate(-3deg)} 25%{transform:rotate(2deg)} 50%{transform:rotate(-4deg)} 75%{transform:rotate(1deg)} }
        .dfc-scene:hover .dfc-title { animation: dfc-wiggle 0.5s ease-in-out; }
      ` }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: 15, marginBottom: 25, zIndex: 5 }, children: [_jsx("span", { style: { fontSize: 18, fontWeight: 'bold', color: INK, opacity: isSignUp ? 0.5 : 1, cursor: 'pointer', transition: 'opacity 0.3s' }, onClick: () => setIsSignUp(false), children: "Log in" }), _jsx("div", { style: { position: 'relative', width: 50, height: 24, backgroundColor: SWITCH_BG, border: `2px solid ${INK}`, borderRadius: 20, cursor: 'pointer', boxShadow: `2px 2px 0px ${INK}` }, onClick: () => setIsSignUp(s => !s), children: _jsx("div", { style: { position: 'absolute', top: 2, left: 3, width: 16, height: 16, backgroundColor: '#fff', border: `2px solid ${INK}`, borderRadius: '50%', transition: 'transform 0.4s cubic-bezier(0.68,-0.55,0.265,1.55)', transform: isSignUp ? 'translateX(24px)' : 'translateX(0)' } }) }), _jsx("span", { style: { fontSize: 18, fontWeight: 'bold', color: INK, opacity: isSignUp ? 1 : 0.5, cursor: 'pointer', transition: 'opacity 0.3s' }, onClick: () => setIsSignUp(true), children: "Sign up" })] }), _jsxs("div", { className: "dfc-scene", style: { position: 'relative', perspective: 1000, width: 300, height: isSignUp ? 400 : 350, zIndex: 2, transition: 'height 0.4s' }, children: [_jsx("svg", { style: { position: 'absolute', top: -25, left: -35, width: 48, height: 48, zIndex: -1, animation: 'dfc-star 4s ease-in-out infinite' }, viewBox: "0 0 24 24", fill: "#ffd166", stroke: INK, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) }), _jsx("svg", { style: { position: 'absolute', bottom: -20, right: -25, width: 40, height: 40, zIndex: -1, animation: 'dfc-sparkle 4s ease-in-out infinite 1s' }, viewBox: "0 0 24 24", fill: "#06d6a0", stroke: INK, strokeWidth: "1.5", children: _jsx("path", { d: "M12 2 Q12 12 22 12 Q12 12 12 22 Q12 12 2 12 Q12 12 12 2 Z" }) }), _jsx("svg", { style: { position: 'absolute', top: 30, right: -30, width: 32, height: 32, zIndex: -1, animation: 'dfc-swirl 4s ease-in-out infinite 2s' }, viewBox: "0 0 24 24", fill: "none", stroke: INK, strokeWidth: "1.5", strokeLinecap: "round", children: _jsx("path", { d: "M3 12 C 3 5 10 5 16 5 C 20 5 21 9 18 12 C 15 15 10 13 12 9 C 14 5 22 9 21 16" }) }), _jsxs("div", { style: { width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d', transition: 'transform 0.8s cubic-bezier(0.4,0.2,0.2,1)', transform: isSignUp ? 'rotateY(180deg)' : 'rotateY(0deg)' }, children: [_jsxs("div", { style: { ...faceBase, backgroundColor: PAPER_FRONT, borderRadius: SKETCH_1 }, children: [_jsx("div", { className: "dfc-title", style: { fontSize: 25, fontWeight: 900, color: INK, margin: '10px 0 20px', textTransform: 'uppercase', letterSpacing: 1, transform: 'rotate(-3deg)', textShadow: '1px 1px 0px rgba(0,0,0,0.1)' }, children: "Welcome!" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 15, width: '100%', alignItems: 'center' }, children: [_jsx("input", { placeholder: "Email", type: "email", value: loginEmail, onChange: e => setLoginEmail(e.target.value), onFocus: () => setFocused('le'), onBlur: () => setFocused(''), onMouseEnter: () => setHoverIn('le'), onMouseLeave: () => setHoverIn(''), style: inputStyle('le') }), _jsx("input", { placeholder: "Password", type: "password", value: loginPwd, onChange: e => setLoginPwd(e.target.value), onFocus: () => setFocused('lp'), onBlur: () => setFocused(''), onMouseEnter: () => setHoverIn('lp'), onMouseLeave: () => setHoverIn(''), style: inputStyle('lp') }), _jsx("button", { style: makeBtn(PRIMARY_BTN, '-1deg'), onMouseEnter: e => onBtnEnter(e, '#ff5252', '-2deg'), onMouseLeave: e => onBtnLeave(e, PRIMARY_BTN, '-1deg'), onMouseDown: onBtnDown, onClick: () => onLogin?.(loginEmail, loginPwd), children: "Let's Go!" })] })] }), _jsxs("div", { style: { ...faceBase, backgroundColor: PAPER_BACK, borderRadius: SKETCH_2, transform: 'rotateY(180deg)' }, children: [_jsx("div", { style: { fontSize: 25, fontWeight: 900, color: INK, margin: '0 0 15px', textTransform: 'uppercase', letterSpacing: 1, transform: 'rotate(2deg)', textShadow: '1px 1px 0px rgba(0,0,0,0.1)' }, children: "Join Us!" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 15, width: '100%', alignItems: 'center' }, children: [_jsx("input", { placeholder: "Name", type: "text", value: signName, onChange: e => setSignName(e.target.value), onFocus: () => setFocused('sn'), onBlur: () => setFocused(''), onMouseEnter: () => setHoverIn('sn'), onMouseLeave: () => setHoverIn(''), style: inputStyle('sn') }), _jsx("input", { placeholder: "Email", type: "email", value: signEmail, onChange: e => setSignEmail(e.target.value), onFocus: () => setFocused('se'), onBlur: () => setFocused(''), onMouseEnter: () => setHoverIn('se'), onMouseLeave: () => setHoverIn(''), style: inputStyle('se') }), _jsx("input", { placeholder: "Password", type: "password", value: signPwd, onChange: e => setSignPwd(e.target.value), onFocus: () => setFocused('sp'), onBlur: () => setFocused(''), onMouseEnter: () => setHoverIn('sp'), onMouseLeave: () => setHoverIn(''), style: inputStyle('sp') }), _jsx("button", { style: makeBtn(SECONDARY_BTN, '1deg'), onMouseEnter: e => onBtnEnter(e, '#3bbfb6', '2deg'), onMouseLeave: e => onBtnLeave(e, SECONDARY_BTN, '1deg'), onMouseDown: onBtnDown, onClick: () => onSignUp?.(signName, signEmail, signPwd), children: "Confirm!" })] })] })] })] })] }));
}
//# sourceMappingURL=DoodleFlipCard.js.map