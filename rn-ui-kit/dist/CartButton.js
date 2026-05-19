'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Animated, PanResponder, useWindowDimensions, } from 'react-native';
import { IconSymbol } from './IconSymbol';
import { ThemedText } from './ThemedText';
import { useThemeColor } from '@otaga/shared-utils';
export function CartButton({ onAddToCart, onBagPress, label = 'Add to cart', color = '#000', iconColor = '#FFF', width: customWidth, height: customHeight = 66, }) {
    const [isAdded, setIsAdded] = useState(false);
    const { width: screenWidth } = useWindowDimensions();
    const themeIconColor = useThemeColor({}, 'icon');
    const containerHeight = customHeight;
    const padding = containerHeight * 0.1;
    const innerHeight = containerHeight - padding * 2;
    const circleSize = innerHeight;
    const fontSize = innerHeight * 0.3;
    const iconSize = innerHeight * 0.4;
    const finalWidth = customWidth || screenWidth - 40;
    const swipeLimit = finalWidth - circleSize - padding * 2;
    const pan = useRef(new Animated.Value(0)).current;
    const panResponder = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: () => !isAdded,
        onPanResponderMove: (_, gestureState) => {
            if (gestureState.dx >= 0 && gestureState.dx <= swipeLimit) {
                pan.setValue(gestureState.dx);
            }
        },
        onPanResponderRelease: (_, gestureState) => {
            if (gestureState.dx > swipeLimit * 0.7) {
                Animated.spring(pan, { toValue: swipeLimit, useNativeDriver: false, friction: 8 }).start(() => {
                    setIsAdded(true);
                    onAddToCart?.();
                    setTimeout(() => {
                        setIsAdded(false);
                        Animated.spring(pan, { toValue: 0, useNativeDriver: false }).start();
                    }, 2000);
                });
            }
            else {
                Animated.spring(pan, { toValue: 0, useNativeDriver: false }).start();
            }
        },
    })).current;
    const buttonWidth = pan.interpolate({
        inputRange: [0, swipeLimit],
        outputRange: [finalWidth * 0.5, circleSize],
        extrapolate: 'clamp',
    });
    const textOpacity = pan.interpolate({
        inputRange: [0, swipeLimit * 0.4],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });
    const bagOpacity = pan.interpolate({
        inputRange: [swipeLimit * 0.7, swipeLimit],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });
    return (_jsxs(View, { style: [styles.container, { width: finalWidth, height: containerHeight, padding, borderRadius: containerHeight / 2 }], children: [_jsxs(View, { style: styles.chevronContainer, children: [_jsx(IconSymbol, { name: "chevron.right", size: iconSize * 0.8, color: themeIconColor + '20' }), _jsx(IconSymbol, { name: "chevron.right", size: iconSize * 0.8, color: themeIconColor + '40' })] }), _jsxs(Animated.View, { ...panResponder.panHandlers, style: [
                    styles.mainButton,
                    { backgroundColor: color, width: buttonWidth, height: innerHeight, borderRadius: innerHeight / 2, transform: [{ translateX: pan }] },
                ], children: [_jsxs(Animated.View, { style: [styles.contentWrapper, { opacity: textOpacity }], children: [_jsx(ThemedText, { numberOfLines: 1, style: [styles.buttonText, { color: iconColor, fontSize }], children: label }), _jsx(IconSymbol, { name: "chevron.right", size: iconSize, color: iconColor })] }), isAdded && (_jsx(View, { style: styles.centeredIconOverlay, children: _jsx(IconSymbol, { name: "checkmark", size: iconSize * 1.5, color: iconColor }) }))] }), _jsx(Animated.View, { style: [styles.bagContainer, { opacity: isAdded ? 0 : bagOpacity }], children: _jsx(TouchableOpacity, { style: [styles.bagButton, { backgroundColor: color, width: circleSize, height: circleSize, borderRadius: circleSize / 2 }], onPress: onBagPress, activeOpacity: 0.8, children: _jsx(IconSymbol, { name: "bag", size: iconSize, color: iconColor }) }) })] }));
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        position: 'relative',
        overflow: 'hidden',
    },
    mainButton: { zIndex: 10, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
    contentWrapper: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 },
    buttonText: { fontWeight: 'bold', marginRight: 6 },
    chevronContainer: { position: 'absolute', left: '50%', flexDirection: 'row', gap: 4 },
    bagContainer: { marginLeft: 'auto' },
    bagButton: { alignItems: 'center', justifyContent: 'center' },
    centeredIconOverlay: { ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center' },
});
//# sourceMappingURL=CartButton.js.map