'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { IconSymbol } from './IconSymbol';
import { Colors, useColorScheme } from '@otaga/shared-utils';
export function Collapsible({ children, title }) {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useColorScheme() ?? 'light';
    return (_jsxs(ThemedView, { children: [_jsxs(TouchableOpacity, { style: styles.heading, onPress: () => setIsOpen((value) => !value), activeOpacity: 0.8, children: [_jsx(IconSymbol, { name: "chevron.right", size: 18, weight: "medium", color: theme === 'light' ? Colors.light.icon : Colors.dark.icon, style: { transform: [{ rotate: isOpen ? '90deg' : '0deg' }] } }), _jsx(ThemedText, { type: "defaultSemiBold", children: title })] }), isOpen && _jsx(ThemedView, { style: styles.content, children: children })] }));
}
const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    content: {
        marginTop: 6,
        marginLeft: 24,
    },
});
//# sourceMappingURL=Collapsible.js.map