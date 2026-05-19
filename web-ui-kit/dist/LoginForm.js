'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const MAIN = 'black';
const BG = 'beige';
const FONT = '#323232';
const FONT_SUB = '#666';
const FOCUS = '#2d8cf0';
const shadow = `4px 4px ${MAIN}`;
export function LoginForm({ onSubmit, onTwitter, onGoogle, onFacebook }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [focused, setFocused] = useState('');
    const inputStyle = (key) => ({
        width: 250,
        height: 40,
        borderRadius: 5,
        border: `2px solid ${focused === key ? FOCUS : MAIN}`,
        backgroundColor: BG,
        boxShadow: shadow,
        fontSize: 15,
        fontWeight: 600,
        color: FONT,
        padding: '5px 10px',
        outline: 'none',
        boxSizing: 'border-box',
    });
    const onBtnDown = (e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translate(3px,3px)';
    };
    const onBtnUp = (e) => {
        e.currentTarget.style.boxShadow = shadow;
        e.currentTarget.style.transform = 'none';
    };
    const logBtnStyle = {
        cursor: 'pointer',
        width: 40,
        height: 40,
        borderRadius: '100%',
        border: `2px solid ${MAIN}`,
        backgroundColor: BG,
        boxShadow: shadow,
        color: FONT,
        fontSize: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.1s',
    };
    return (_jsxs("div", { style: {
            padding: 20,
            background: 'lightblue',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: 20,
            borderRadius: 5,
            border: `2px solid ${MAIN}`,
            boxShadow: shadow,
            fontFamily: 'sans-serif',
            width: 'fit-content',
        }, children: [_jsxs("div", { style: { color: FONT, fontWeight: 900, fontSize: 20, marginBottom: 25 }, children: ["Welcome,", _jsx("br", {}), _jsx("span", { style: { color: FONT_SUB, fontWeight: 600, fontSize: 17 }, children: "sign up to continue" })] }), _jsx("input", { placeholder: "Email", type: "email", value: email, onChange: e => setEmail(e.target.value), onFocus: () => setFocused('email'), onBlur: () => setFocused(''), style: inputStyle('email') }), _jsx("input", { placeholder: "Password", type: "password", value: password, onChange: e => setPassword(e.target.value), onFocus: () => setFocused('pwd'), onBlur: () => setFocused(''), style: inputStyle('pwd') }), _jsxs("div", { style: { display: 'flex', gap: 20 }, children: [_jsx("div", { style: logBtnStyle, onClick: onTwitter, onMouseDown: onBtnDown, onMouseUp: onBtnUp, children: _jsx("b", { style: { fontSize: 18 }, children: "\uD835\uDD4F" }) }), _jsx("div", { style: logBtnStyle, onClick: onGoogle, onMouseDown: onBtnDown, onMouseUp: onBtnUp, children: _jsx("svg", { viewBox: "0 0 56.69 56.69", width: "24", height: "24", style: { fill: MAIN }, children: _jsx("path", { d: "M51.981,24.481c-7.717-0.004-15.435-0.002-23.152-0.001c0.001,3.201-0.004,6.402,0.002,9.602\n              c4.469-0.001,8.939-0.002,13.407,0c-0.518,3.067-2.341,5.872-4.926,7.599c-1.625,1.093-3.492,1.802-5.417,2.139\n              c-1.937,0.331-3.939,0.373-5.871-0.018c-1.965-0.392-3.841-1.211-5.477-2.365c-2.617-1.838-4.614-4.528-5.639-7.555\n              c-1.048-3.079-1.056-6.505,0.005-9.581c0.736-2.168,1.961-4.171,3.571-5.8c1.985-2.032,4.566-3.485,7.347-4.081\n              c2.381-0.508,4.892-0.411,7.223,0.294c1.982,0.602,3.808,1.687,5.304,3.116c1.513-1.504,3.017-3.016,4.527-4.523\n              c0.792-0.811,1.624-1.587,2.391-2.42c-2.293-2.122-4.981-3.827-7.917-4.906C32.072,4.036,26.11,3.995,20.787,5.837\n              C14.789,7.891,9.682,12.376,6.85,18.046c-0.986,1.954-1.706,4.039-2.138,6.184C3.624,29.573,4.382,35.271,6.847,40.138\n              c1.602,3.177,3.899,6.001,6.684,8.215c2.628,2.096,5.692,3.644,8.94,4.508c4.098,1.099,8.461,1.074,12.586,0.136\n              c3.728-0.858,7.256-2.64,10.073-5.24c2.977-2.736,5.101-6.34,6.225-10.214C52.581,33.317,52.75,28.806,51.981,24.481z" }) }) }), _jsx("div", { style: logBtnStyle, onClick: onFacebook, onMouseDown: onBtnDown, onMouseUp: onBtnUp, children: _jsx("svg", { viewBox: "0 0 56.693 56.693", width: "24", height: "24", style: { fill: MAIN }, children: _jsx("path", { d: "M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125\n              l-7.43-0.029c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033\n              c0,0,0-13.32,0-24.137h6.77L40.43,21.739z" }) }) })] }), _jsx("button", { style: {
                    margin: '50px auto 0 auto',
                    width: 120,
                    height: 40,
                    borderRadius: 5,
                    border: `2px solid ${MAIN}`,
                    backgroundColor: BG,
                    boxShadow: shadow,
                    fontSize: 17,
                    fontWeight: 600,
                    color: FONT,
                    cursor: 'pointer',
                    transition: 'all 0.1s',
                    alignSelf: 'center',
                }, onMouseDown: onBtnDown, onMouseUp: onBtnUp, onClick: () => onSubmit?.(email, password), children: "Let's go \u2192" })] }));
}
//# sourceMappingURL=LoginForm.js.map