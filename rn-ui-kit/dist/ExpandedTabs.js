'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { Animated, ScrollView, StyleSheet, TouchableOpacity, View, } from 'react-native';
export function ExpandedTabs({ tabs, activeColor = '#22c55e', style, onChange, }) {
    const [selected, setSelected] = useState(0);
    // Per-tab label width animation
    const labelWidths = useRef(tabs.map((_, i) => new Animated.Value(i === 0 ? 1 : 0))).current;
    const labelOpacities = useRef(tabs.map((_, i) => new Animated.Value(i === 0 ? 1 : 0))).current;
    const handleSelect = (index) => {
        // Collapse current
        Animated.parallel([
            Animated.timing(labelWidths[selected], { toValue: 0, duration: 120, useNativeDriver: false }),
            Animated.timing(labelOpacities[selected], { toValue: 0, duration: 100, useNativeDriver: false }),
        ]).start();
        // Expand new
        Animated.parallel([
            Animated.timing(labelWidths[index], { toValue: 1, duration: 200, useNativeDriver: false }),
            Animated.timing(labelOpacities[index], { toValue: 1, duration: 200, useNativeDriver: false }),
        ]).start();
        setSelected(index);
        onChange?.(index);
    };
    return (_jsx(View, { style: [styles.container, style], children: _jsx(ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: styles.row, children: tabs.map((tab, index) => {
                if (tab.type === 'separator') {
                    return (_jsx(View, { style: styles.separator }, `sep-${index}`));
                }
                const isActive = selected === index;
                return (_jsxs(TouchableOpacity, { activeOpacity: 0.75, onPress: () => handleSelect(index), style: [
                        styles.tab,
                        isActive && {
                            backgroundColor: `${activeColor}20`,
                            borderColor: `${activeColor}60`,
                        },
                    ], children: [_jsx(View, { style: styles.iconWrap, children: tab.icon }), _jsx(Animated.View, { style: {
                                width: labelWidths[index].interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 80],
                                }),
                                overflow: 'hidden',
                            }, children: _jsxs(Animated.Text, { style: [
                                    styles.label,
                                    { color: isActive ? '#111' : '#64748b', opacity: labelOpacities[index] },
                                ], numberOfLines: 1, children: [' ', tab.title] }) })] }, tab.title));
            }) }) }));
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        borderRadius: 9999,
        borderWidth: 1,
        borderColor: 'rgba(148,163,184,0.3)',
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 9999,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
    },
    iconWrap: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 13,
        fontWeight: '600',
    },
    separator: {
        width: 1,
        height: 28,
        backgroundColor: 'rgba(148,163,184,0.3)',
        marginHorizontal: 2,
    },
});
//# sourceMappingURL=ExpandedTabs.js.map