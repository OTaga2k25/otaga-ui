'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { StyleSheet, Text } from 'react-native';
import { useThemeColor } from '@otaga/shared-utils';
export function ThemedText({ style, lightColor, darkColor, type = 'default', ...rest }) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    return (_jsx(Text, { style: [
            { color },
            type === 'default' ? styles.default : undefined,
            type === 'title' ? styles.title : undefined,
            type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
            type === 'subtitle' ? styles.subtitle : undefined,
            type === 'link' ? styles.link : undefined,
            style,
        ], ...rest }));
}
const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        lineHeight: 24,
    },
    defaultSemiBold: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 32,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        lineHeight: 30,
        fontSize: 16,
        color: '#3E3E34',
    },
});
//# sourceMappingURL=ThemedText.js.map