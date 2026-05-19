'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Colors, Fonts } from './theme';
import { useColorScheme } from './use-color-scheme';
const TYPE_STYLES = {
    default: { fontSize: 16, lineHeight: '24px' },
    title: { fontSize: 32, fontWeight: 700, lineHeight: '40px' },
    subtitle: { fontSize: 20, fontWeight: '600', lineHeight: '28px' },
    defaultSemiBold: { fontSize: 16, fontWeight: '600', lineHeight: '24px' },
    link: { fontSize: 16, color: '#0a7ea4', textDecoration: 'underline', cursor: 'pointer' },
};
export function ThemedText({ type = 'default', style, children, ...props }) {
    const scheme = useColorScheme();
    const theme = Colors[scheme];
    return (_jsx("span", { style: {
            fontFamily: Fonts.sans,
            color: theme.text,
            ...TYPE_STYLES[type],
            ...style,
        }, ...props, children: children }));
}
//# sourceMappingURL=ThemedText.js.map