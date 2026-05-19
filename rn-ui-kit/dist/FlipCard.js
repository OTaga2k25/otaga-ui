'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, View } from 'react-native';
export function FlipCard({ front, back, width = 190, height = 254, frontStyle, backStyle, }) {
    const flipAnim = useRef(new Animated.Value(0)).current;
    const [flipped, setFlipped] = useState(false);
    const flip = () => {
        const toValue = flipped ? 0 : 1;
        Animated.spring(flipAnim, { toValue, friction: 8, useNativeDriver: true }).start();
        setFlipped(f => !f);
    };
    const frontRotate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
    const backRotate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });
    // Opacity crossfade at 90° — ensures correct face on Android (backfaceVisibility unreliable)
    const frontOpacity = flipAnim.interpolate({ inputRange: [0, 0.5, 0.5, 1], outputRange: [1, 1, 0, 0] });
    const backOpacity = flipAnim.interpolate({ inputRange: [0, 0.5, 0.5, 1], outputRange: [0, 0, 1, 1] });
    return (_jsxs(Pressable, { onPress: flip, style: { width, height }, children: [_jsx(Animated.View, { style: [
                    styles.face,
                    styles.front,
                    { width, height, opacity: frontOpacity, transform: [{ rotateY: frontRotate }] },
                    frontStyle,
                ], children: _jsx(View, { style: styles.content, children: front }) }), _jsx(Animated.View, { style: [
                    styles.face,
                    styles.back,
                    { width, height, opacity: backOpacity, transform: [{ rotateY: backRotate }] },
                    backStyle,
                ], children: _jsx(View, { style: styles.content, children: back }) })] }));
}
const styles = StyleSheet.create({
    face: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'coral',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 14,
        elevation: 8,
        backfaceVisibility: 'hidden',
    },
    front: {
        backgroundColor: '#FFE4C4', // bisque
    },
    back: {
        backgroundColor: 'coral',
    },
    content: {
        alignItems: 'center',
        gap: 8,
    },
});
//# sourceMappingURL=FlipCard.js.map