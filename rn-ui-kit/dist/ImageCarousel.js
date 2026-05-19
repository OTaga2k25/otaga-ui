'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
const COLLAPSED_FLEX = 1;
const EXPANDED_FLEX = 6;
export function ImageCarousel({ persons, height = 340, style }) {
    const initial = Math.floor(persons.length / 2);
    const [active, setActive] = useState(initial);
    const flexValues = useRef(persons.map((_, i) => new Animated.Value(i === initial ? EXPANDED_FLEX : COLLAPSED_FLEX))).current;
    const textOpacities = useRef(persons.map((_, i) => new Animated.Value(i === initial ? 1 : 0))).current;
    const handleSelect = (index) => {
        if (index === active)
            return;
        Animated.parallel([
            // Collapse old
            Animated.spring(flexValues[active], {
                toValue: COLLAPSED_FLEX,
                useNativeDriver: false,
                damping: 15,
            }),
            Animated.timing(textOpacities[active], {
                toValue: 0,
                duration: 150,
                useNativeDriver: false,
            }),
            // Expand new
            Animated.spring(flexValues[index], {
                toValue: EXPANDED_FLEX,
                useNativeDriver: false,
                damping: 15,
            }),
            Animated.timing(textOpacities[index], {
                toValue: 1,
                duration: 400,
                delay: 150,
                useNativeDriver: false,
            }),
        ]).start();
        setActive(index);
    };
    return (_jsx(View, { style: [styles.container, { height }, style], children: persons.map((person, i) => {
            const isActive = active === i;
            return (_jsx(Animated.View, { style: [styles.item, { flex: flexValues[i] }], children: _jsxs(TouchableOpacity, { activeOpacity: 0.9, onPress: () => handleSelect(i), style: StyleSheet.absoluteFill, children: [_jsx(Image, { source: { uri: person.img }, style: [
                                StyleSheet.absoluteFill,
                                { opacity: isActive ? 1 : 0.45 },
                            ], resizeMode: "cover" }), _jsx(View, { style: [styles.gradient, { opacity: isActive ? 1 : 0 }] }), _jsxs(Animated.View, { style: [styles.textWrap, { opacity: textOpacities[i] }], children: [_jsx(Text, { style: styles.personTitle, children: person.title }), _jsx(Text, { style: styles.personName, children: person.name })] })] }) }, person.name));
        }) }));
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 340, // overridden by prop via inline style
        gap: 6,
        width: '100%',
    },
    item: {
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#111',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 16,
        elevation: 8,
    },
    gradient: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0,0,0,0.45)',
    },
    textWrap: {
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        padding: 16,
    },
    personTitle: {
        color: '#e5e7eb',
        fontSize: 10,
        fontWeight: '300',
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: 4,
    },
    personName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        textShadowColor: 'rgba(0,0,0,0.8)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
});
//# sourceMappingURL=ImageCarousel.js.map