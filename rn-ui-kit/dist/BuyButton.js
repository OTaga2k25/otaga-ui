'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { StyleSheet, View, Animated, PanResponder, useWindowDimensions, } from 'react-native';
import { IconSymbol } from './IconSymbol';
import { ThemedText } from './ThemedText';
export function BuyButton({ onBuy, label = 'Buy Now', color = '#000', width: customWidth, height: customHeight = 62, }) {
    const [isBought, setIsBought] = useState(false);
    const { width: screenWidth } = useWindowDimensions();
    const containerHeight = customHeight;
    const padding = containerHeight * 0.1;
    const innerSize = containerHeight - padding * 2;
    const fontSize = innerSize * 0.35;
    const iconSize = innerSize * 0.5;
    const finalWidth = customWidth || screenWidth - 40;
    const swipeLimit = finalWidth - innerSize - padding * 2;
    const pan = useRef(new Animated.Value(0)).current;
    const panResponder = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: () => !isBought,
        onPanResponderMove: (_, gestureState) => {
            if (gestureState.dx >= 0 && gestureState.dx <= swipeLimit) {
                pan.setValue(gestureState.dx);
            }
        },
        onPanResponderRelease: (_, gestureState) => {
            if (gestureState.dx > swipeLimit * 0.8) {
                Animated.spring(pan, { toValue: swipeLimit, useNativeDriver: false, friction: 8 }).start(() => {
                    setIsBought(true);
                    onBuy?.();
                    setTimeout(() => {
                        setIsBought(false);
                        Animated.spring(pan, { toValue: 0, useNativeDriver: false }).start();
                    }, 2000);
                });
            }
            else {
                Animated.spring(pan, { toValue: 0, useNativeDriver: false }).start();
            }
        },
    })).current;
    const showText = finalWidth > 120;
    const textOpacity = pan.interpolate({
        inputRange: [0, swipeLimit * 0.4],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });
    return (_jsxs(View, { style: [styles.container, { width: finalWidth, height: containerHeight, backgroundColor: color, padding, borderRadius: containerHeight / 2 }], children: [showText && (_jsxs(Animated.View, { style: [styles.contentOverlay, { opacity: textOpacity }], children: [_jsx(ThemedText, { numberOfLines: 1, style: [styles.label, { fontSize }], children: label }), _jsxs(View, { style: styles.chevronContainer, children: [_jsx(IconSymbol, { name: "chevron.right", size: fontSize * 0.8, color: "rgba(255,255,255,0.3)" }), _jsx(IconSymbol, { name: "chevron.right", size: fontSize * 0.8, color: "rgba(255,255,255,0.6)" }), _jsx(IconSymbol, { name: "chevron.right", size: fontSize * 0.8, color: "#FFF" })] })] })), _jsx(Animated.View, { ...panResponder.panHandlers, style: [
                    styles.slider,
                    { width: innerSize, height: innerSize, borderRadius: innerSize / 2, transform: [{ translateX: pan }] },
                ], children: _jsx(IconSymbol, { name: isBought ? 'checkmark' : 'bag', size: iconSize, color: "#000" }) })] }));
}
const styles = StyleSheet.create({
    container: { justifyContent: 'center', position: 'relative', overflow: 'hidden' },
    slider: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    contentOverlay: {
        ...StyleSheet.absoluteFill,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 30,
    },
    label: { color: '#FFF', fontWeight: 'bold', marginRight: 6 },
    chevronContainer: { flexDirection: 'row', gap: 2 },
});
//# sourceMappingURL=BuyButton.js.map