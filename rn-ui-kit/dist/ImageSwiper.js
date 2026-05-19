'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { Animated, Image, PanResponder, StyleSheet, Text, View, } from 'react-native';
export function ImageSwiper({ cards, cardWidth = 256, cardHeight = 352, style, }) {
    const [order, setOrder] = useState(() => Array.from({ length: cards.length }, (_, i) => i));
    // Single shared position for the top card — reset after each swipe
    const position = useRef(new Animated.ValueXY()).current;
    const THRESHOLD = cardWidth / 3;
    const rotate = position.x.interpolate({
        inputRange: [-cardWidth, 0, cardWidth],
        outputRange: ['-15deg', '0deg', '15deg'],
        extrapolate: 'clamp',
    });
    const topOpacity = position.x.interpolate({
        inputRange: [-cardWidth * 1.5, 0, cardWidth * 1.5],
        outputRange: [0, 1, 0],
        extrapolate: 'clamp',
    });
    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: position.x, dy: position.y }], { useNativeDriver: false }),
        onPanResponderRelease: (_, gesture) => {
            if (Math.abs(gesture.dx) > THRESHOLD) {
                const dir = Math.sign(gesture.dx);
                Animated.timing(position, {
                    toValue: { x: dir * cardWidth * 2, y: gesture.dy },
                    duration: 280,
                    useNativeDriver: false,
                }).start(() => {
                    position.setValue({ x: 0, y: 0 });
                    setOrder(prev => [...prev.slice(1), prev[0]]);
                });
            }
            else {
                Animated.spring(position, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                    friction: 5,
                }).start();
            }
        },
    })).current;
    const visible = order.slice(0, Math.min(4, order.length));
    return (_jsx(View, { style: [styles.container, { width: cardWidth + 32, height: cardHeight + 50 }, style], children: [...visible].reverse().map((originalIndex, reversedI) => {
            const stackIndex = visible.length - 1 - reversedI;
            const isTop = stackIndex === 0;
            return (_jsxs(Animated.View, { ...(isTop ? panResponder.panHandlers : {}), style: [
                    styles.card,
                    {
                        width: cardWidth,
                        height: cardHeight,
                        zIndex: 10 - stackIndex,
                        opacity: isTop ? topOpacity : 1,
                        transform: isTop
                            ? [
                                { translateX: position.x },
                                { translateY: position.y },
                                { rotate },
                            ]
                            : [
                                { scale: 1 - stackIndex * 0.04 },
                                { translateY: stackIndex * 10 },
                            ],
                    },
                ], children: [_jsx(Image, { source: { uri: cards[originalIndex].imageUrl }, style: StyleSheet.absoluteFill, resizeMode: "cover" }), _jsx(View, { style: styles.titleBar, children: _jsx(Text, { style: styles.titleText, numberOfLines: 1, children: cards[originalIndex].title }) })] }, cards[originalIndex].id));
        }) }));
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        position: 'absolute',
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#1e293b',
        borderWidth: 2,
        borderColor: '#334155',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 15,
        elevation: 8,
    },
    titleBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    titleText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 18,
        textShadowColor: 'rgba(0,0,0,0.8)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 4,
    },
});
//# sourceMappingURL=ImageSwiper.js.map