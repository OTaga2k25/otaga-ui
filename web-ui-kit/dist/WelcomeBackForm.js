'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export function WelcomeBackForm({ onLogin, onSignUp, onForgotPassword, onApple, onGoogle }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [focused, setFocused] = useState('');
    const [btnActive, setBtnActive] = useState(false);
    const [hoverLink, setHoverLink] = useState('');
    const inputStyle = (key) => ({
        borderRadius: 20,
        border: `1px solid ${focused === key ? '#999' : '#c0c0c0'}`,
        outline: 'none',
        boxSizing: 'border-box',
        padding: '12px 15px',
        width: '100%',
        fontSize: 14,
        color: '#333',
    });
    const socialBtnBase = {
        borderRadius: 20,
        boxSizing: 'border-box',
        padding: '10px 15px',
        boxShadow: 'rgba(0,0,0,0.16) 0px 10px 36px 0px, rgba(0,0,0,0.06) 0px 0px 0px 1px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Lucida Sans', Geneva, Verdana, sans-serif",
        fontSize: 11,
        gap: 5,
        border: 'none',
        width: '100%',
    };
    return (_jsxs("div", { style: {
            width: 350,
            height: 500,
            backgroundColor: '#fff',
            boxShadow: 'rgba(0,0,0,0.35) 0px 5px 15px',
            borderRadius: 10,
            boxSizing: 'border-box',
            padding: '20px 30px',
            fontFamily: "'Lucida Sans', Geneva, Verdana, sans-serif",
            display: 'flex',
            flexDirection: 'column',
        }, children: [_jsx("p", { style: { textAlign: 'center', margin: '10px 0 30px', fontSize: 28, fontWeight: 800 }, children: "Welcome back" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 15 }, children: [_jsx("input", { type: "email", placeholder: "Email", value: email, onChange: e => setEmail(e.target.value), onFocus: () => setFocused('email'), onBlur: () => setFocused(''), style: inputStyle('email') }), _jsx("input", { type: "password", placeholder: "Password", value: password, onChange: e => setPassword(e.target.value), onFocus: () => setFocused('pwd'), onBlur: () => setFocused(''), style: inputStyle('pwd') }), _jsx("p", { style: { margin: 0, textAlign: 'right', color: '#747474', textDecoration: 'underline', textDecorationColor: '#747474' }, children: _jsx("span", { onClick: onForgotPassword, onMouseEnter: () => setHoverLink('forgot'), onMouseLeave: () => setHoverLink(''), style: { cursor: 'pointer', fontSize: 9, fontWeight: 700, color: hoverLink === 'forgot' ? '#000' : '#747474' }, children: "Forgot Password?" }) }), _jsx("button", { onClick: () => onLogin?.(email, password), onMouseDown: () => setBtnActive(true), onMouseUp: () => setBtnActive(false), onMouseLeave: () => setBtnActive(false), style: {
                            padding: '10px 15px',
                            borderRadius: 20,
                            border: 'none',
                            outline: 'none',
                            background: 'teal',
                            color: 'white',
                            cursor: 'pointer',
                            boxShadow: btnActive ? 'none' : 'rgba(0,0,0,0.24) 0px 3px 8px',
                            fontSize: 14,
                            fontFamily: 'inherit',
                        }, children: "Log in" })] }), _jsxs("p", { style: { margin: 0, fontSize: 10, color: '#747474' }, children: ["Don't have an account?", ' ', _jsx("span", { onClick: onSignUp, onMouseEnter: () => setHoverLink('signup'), onMouseLeave: () => setHoverLink(''), style: { cursor: 'pointer', fontSize: 11, textDecoration: 'underline', textDecorationColor: 'teal', color: 'teal', fontWeight: 800 }, children: "Sign up" })] }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', marginTop: 20, gap: 15 }, children: [_jsxs("button", { style: { ...socialBtnBase, backgroundColor: '#000', color: '#fff', border: '2px solid #000' }, onClick: onApple, children: [_jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: 0, viewBox: "0 0 1024 1024", height: "18", width: "18", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z" }) }), _jsx("span", { children: "Log in with Apple" })] }), _jsxs("button", { style: { ...socialBtnBase, backgroundColor: '#fff', border: '2px solid #747474', color: '#333' }, onClick: onGoogle, children: [_jsxs("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: 0, version: "1.1", viewBox: "0 0 48 48", height: "18", width: "18", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { fill: "#FFC107", d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" }), _jsx("path", { fill: "#FF3D00", d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" }), _jsx("path", { fill: "#4CAF50", d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" }), _jsx("path", { fill: "#1976D2", d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" })] }), _jsx("span", { children: "Log in with Google" })] })] })] }));
}
//# sourceMappingURL=WelcomeBackForm.js.map