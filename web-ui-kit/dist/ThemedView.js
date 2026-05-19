'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Colors } from './theme';
import { useColorScheme } from './use-color-scheme';
export function ThemedView({ lightColor, darkColor, style, children, ...props }) {
    const scheme = useColorScheme();
    const bg = scheme === 'dark'
        ? (darkColor ?? Colors.dark.background)
        : (lightColor ?? Colors.light.background);
    return (_jsx("div", { style: { backgroundColor: bg, ...style }, ...props, children: children }));
}
//# sourceMappingURL=ThemedView.js.map