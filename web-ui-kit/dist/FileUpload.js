'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
export function FileUpload({ accept, multiple, onFileChange, style, }) {
    const [browseHover, setBrowseHover] = useState(false);
    const [dragging, setDragging] = useState(false);
    const inputRef = useRef(null);
    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        onFileChange?.(e.dataTransfer.files);
    };
    return (_jsx("div", { style: { width: 'fit-content', height: 'fit-content', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1e1e1e', ...style }, children: _jsxs("label", { onDragOver: e => { e.preventDefault(); setDragging(true); }, onDragLeave: () => setDragging(false), onDrop: handleDrop, style: {
                cursor: 'pointer',
                backgroundColor: dragging ? '#444' : '#333',
                padding: '30px 70px',
                borderRadius: 40,
                border: `2px dashed ${dragging ? '#aaa' : '#666'}`,
                boxShadow: '0 0 200px -50px rgba(0,0,0,0.5)',
                color: '#eee',
                display: 'block',
                transition: 'background-color 0.2s ease, border-color 0.2s ease',
            }, children: [_jsx("input", { ref: inputRef, type: "file", accept: accept, multiple: multiple, style: { display: 'none' }, onChange: e => onFileChange?.(e.target.files) }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5 }, children: [_jsx("svg", { viewBox: "0 0 640 512", style: { height: 50, fill: '#666', marginBottom: 20 }, children: _jsx("path", { d: "M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" }) }), _jsx("p", { style: { margin: 0, fontSize: 14, color: '#eee' }, children: "Drag and Drop" }), _jsx("p", { style: { margin: 0, fontSize: 13, color: '#aaa' }, children: "or" }), _jsx("span", { onMouseEnter: () => setBrowseHover(true), onMouseLeave: () => setBrowseHover(false), style: {
                                backgroundColor: browseHover ? '#888' : '#666',
                                padding: '5px 15px',
                                borderRadius: 10,
                                color: browseHover ? '#fff' : '#eee',
                                transition: 'all 0.3s ease',
                                fontSize: 13,
                            }, children: "Browse file" })] })] }) }));
}
//# sourceMappingURL=FileUpload.js.map