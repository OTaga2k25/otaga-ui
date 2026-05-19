'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const MAIN = '#323232';
const INPUT_FOCUS = '#2d8cf0';
const BG = '#fff';
export function AuthFlipCard({ onLogin, onSignUp }) {
    const [isSignUp, setIsSignUp] = useState(false);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPwd, setLoginPwd] = useState('');
    const [signName, setSignName] = useState('');
    const [signEmail, setSignEmail] = useState('');
    const [signPwd, setSignPwd] = useState('');
    const [focused, setFocused] = useState('');
    const inputStyle = (key) => ({
        width: 250,
        height: 40,
        borderRadius: 5,
        border: `2px solid ${focused === key ? INPUT_FOCUS : MAIN}`,
        backgroundColor: BG,
        boxShadow: `4px 4px ${MAIN}`,
        fontSize: 15,
        fontWeight: 600,
        color: MAIN,
        padding: '5px 10px',
        outline: 'none',
        boxSizing: 'border-box',
    });
    const btnStyle = {
        margin: '20px 0',
        width: 120,
        height: 40,
        borderRadius: 5,
        border: `2px solid ${MAIN}`,
        backgroundColor: BG,
        boxShadow: `4px 4px ${MAIN}`,
        fontSize: 17,
        fontWeight: 600,
        color: MAIN,
        cursor: 'pointer',
        transition: 'all 0.1s',
    };
    const faceBase = {
        padding: 20,
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        background: 'lightgrey',
        gap: 20,
        borderRadius: 5,
        border: `2px solid ${MAIN}`,
        boxSizing: 'border-box',
    };
    const onBtnDown = (e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translate(3px,3px)';
    };
    const onBtnUp = (e) => {
        e.currentTarget.style.boxShadow = `4px 4px ${MAIN}`;
        e.currentTarget.style.transform = 'none';
    };
    return (_jsxs("div", { style: { fontFamily: 'sans-serif' }, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 30 }, children: [_jsx("span", { onClick: () => setIsSignUp(false), style: { fontSize: 14, fontWeight: 600, color: MAIN, textDecoration: !isSignUp ? 'underline' : 'none', cursor: 'pointer' }, children: "Log in" }), _jsxs("div", { style: { position: 'relative', width: 50, height: 20, cursor: 'pointer', flexShrink: 0 }, onClick: () => setIsSignUp(s => !s), children: [_jsx("div", { style: {
                                    position: 'absolute', inset: 0, borderRadius: 5,
                                    border: `2px solid ${MAIN}`, boxShadow: `4px 4px ${MAIN}`,
                                    backgroundColor: isSignUp ? INPUT_FOCUS : BG,
                                    transition: '0.3s',
                                } }), _jsx("div", { style: {
                                    position: 'absolute', width: 20, height: 20,
                                    border: `2px solid ${MAIN}`, borderRadius: 5,
                                    bottom: 2, left: -2,
                                    backgroundColor: BG, boxShadow: `0 3px 0 ${MAIN}`,
                                    transition: '0.3s',
                                    transform: isSignUp ? 'translateX(30px)' : 'translateX(0)',
                                    zIndex: 1,
                                } })] }), _jsx("span", { onClick: () => setIsSignUp(true), style: { fontSize: 14, fontWeight: 600, color: MAIN, textDecoration: isSignUp ? 'underline' : 'none', cursor: 'pointer' }, children: "Sign up" })] }), _jsx("div", { style: { perspective: 1000 }, children: _jsxs("div", { style: {
                        width: 300,
                        height: isSignUp ? 390 : 350,
                        position: 'relative',
                        transformStyle: 'preserve-3d',
                        transition: 'transform 0.8s, height 0.3s',
                        transform: isSignUp ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }, children: [_jsxs("div", { style: { ...faceBase, boxShadow: isSignUp ? 'none' : `4px 4px ${MAIN}` }, children: [_jsx("div", { style: { fontSize: 25, fontWeight: 900, textAlign: 'center', color: MAIN }, children: "Log in" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }, children: [_jsx("input", { placeholder: "Email", type: "email", value: loginEmail, onChange: e => setLoginEmail(e.target.value), onFocus: () => setFocused('le'), onBlur: () => setFocused(''), style: inputStyle('le') }), _jsx("input", { placeholder: "Password", type: "password", value: loginPwd, onChange: e => setLoginPwd(e.target.value), onFocus: () => setFocused('lp'), onBlur: () => setFocused(''), style: inputStyle('lp') }), _jsx("button", { style: btnStyle, onMouseDown: onBtnDown, onMouseUp: onBtnUp, onClick: () => onLogin?.(loginEmail, loginPwd), children: "Let's go!" })] })] }), _jsxs("div", { style: { ...faceBase, boxShadow: `4px 4px ${MAIN}`, transform: 'rotateY(180deg)' }, children: [_jsx("div", { style: { fontSize: 25, fontWeight: 900, textAlign: 'center', color: MAIN }, children: "Sign up" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }, children: [_jsx("input", { placeholder: "Name", type: "text", value: signName, onChange: e => setSignName(e.target.value), onFocus: () => setFocused('sn'), onBlur: () => setFocused(''), style: inputStyle('sn') }), _jsx("input", { placeholder: "Email", type: "email", value: signEmail, onChange: e => setSignEmail(e.target.value), onFocus: () => setFocused('se'), onBlur: () => setFocused(''), style: inputStyle('se') }), _jsx("input", { placeholder: "Password", type: "password", value: signPwd, onChange: e => setSignPwd(e.target.value), onFocus: () => setFocused('sp'), onBlur: () => setFocused(''), style: inputStyle('sp') }), _jsx("button", { style: btnStyle, onMouseDown: onBtnDown, onMouseUp: onBtnUp, onClick: () => onSignUp?.(signName, signEmail, signPwd), children: "Confirm!" })] })] })] }) })] }));
}
//# sourceMappingURL=AuthFlipCard.js.map