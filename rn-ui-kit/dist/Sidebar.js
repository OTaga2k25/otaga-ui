'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { StyleSheet, Animated, useWindowDimensions, TouchableOpacity, View, Modal, } from 'react-native';
import { ThemedText } from './ThemedText';
import { IconSymbol } from './IconSymbol';
import { useThemeColor } from '@otaga/shared-utils';
export function Sidebar({ visible, onClose, title, items, footer }) {
    const { width: screenWidth } = useWindowDimensions();
    const sidebarWidth = screenWidth * 0.75;
    const slideAnim = useRef(new Animated.Value(-sidebarWidth)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;
    const borderColor = useThemeColor({}, 'icon');
    const bgColor = useThemeColor({}, 'background');
    useEffect(() => {
        if (visible) {
            Animated.parallel([
                Animated.timing(slideAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
                Animated.timing(opacityAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
            ]).start();
        }
        else {
            Animated.parallel([
                Animated.timing(slideAnim, { toValue: -sidebarWidth, duration: 250, useNativeDriver: true }),
                Animated.timing(opacityAnim, { toValue: 0, duration: 250, useNativeDriver: true }),
            ]).start();
        }
    }, [visible, sidebarWidth]);
    return (_jsx(Modal, { transparent: true, visible: visible, onRequestClose: onClose, animationType: "none", children: _jsxs(View, { style: styles.overlay, children: [_jsx(Animated.View, { style: [styles.backdrop, { opacity: opacityAnim }], children: _jsx(TouchableOpacity, { style: styles.flex, onPress: onClose, activeOpacity: 1 }) }), _jsx(Animated.View, { style: [
                        styles.sidebarContainer,
                        {
                            width: sidebarWidth,
                            transform: [{ translateX: slideAnim }],
                            backgroundColor: bgColor,
                        },
                    ], children: _jsxs(View, { style: styles.flex, children: [_jsxs(View, { style: [styles.header, { borderBottomColor: borderColor + '20' }], children: [_jsx(ThemedText, { type: "subtitle", children: title || 'Menu' }), _jsx(TouchableOpacity, { onPress: onClose, children: _jsx(IconSymbol, { name: "chevron.left", size: 24, color: borderColor }) })] }), _jsx(View, { style: styles.itemsContainer, children: items.map((item) => (_jsxs(TouchableOpacity, { style: styles.item, onPress: () => { item.onPress?.(); onClose(); }, children: [item.icon && (_jsx(IconSymbol, { name: item.icon, size: 22, color: borderColor, style: styles.itemIcon })), _jsx(ThemedText, { type: "defaultSemiBold", children: item.label })] }, item.id))) }), footer && _jsx(View, { style: styles.footer, children: footer })] }) })] }) }));
}
const styles = StyleSheet.create({
    overlay: { flex: 1, flexDirection: 'row' },
    flex: { flex: 1 },
    backdrop: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    sidebarContainer: {
        height: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
    },
    itemsContainer: { padding: 10 },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 8,
    },
    itemIcon: { marginRight: 15 },
    footer: {
        marginTop: 'auto',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.05)',
    },
});
//# sourceMappingURL=Sidebar.js.map