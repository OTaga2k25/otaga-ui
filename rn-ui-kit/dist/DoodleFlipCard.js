'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const INK = '#323232';
const PAPER_FRONT = '#fff9e6';
const PAPER_BACK = '#e6f0ff';
const PRIMARY_BTN = '#ff6b6b';
const SECONDARY_BTN = '#4ecdc4';
const SWITCH_BG = '#ffe66d';
const INPUT_FOCUS = '#2d8cf0';
export function DoodleFlipCard({ onLogin, onSignUp }) {
    const flipAnim = useRef(new Animated.Value(0)).current;
    const thumbAnim = useRef(new Animated.Value(0)).current;
    const starY = useRef(new Animated.Value(0)).current;
    const sparkleY = useRef(new Animated.Value(0)).current;
    const swirlY = useRef(new Animated.Value(0)).current;
    const [isSignUp, setIsSignUp] = useState(false);
    const [focused, setFocused] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPwd, setLoginPwd] = useState('');
    const [signName, setSignName] = useState('');
    const [signEmail, setSignEmail] = useState('');
    const [signPwd, setSignPwd] = useState('');
    // Start floating animations on mount
    useEffect(() => {
        const makeFloat = (val, delay = 0) => Animated.loop(Animated.sequence([
            Animated.timing(val, { toValue: -8, duration: 2000, delay, useNativeDriver: true }),
            Animated.timing(val, { toValue: 0, duration: 2000, useNativeDriver: true }),
        ]));
        makeFloat(starY, 0).start();
        makeFloat(sparkleY, 1000).start();
        makeFloat(swirlY, 2000).start();
    }, []);
    const toggle = () => {
        const toValue = isSignUp ? 0 : 1;
        Animated.parallel([
            Animated.spring(flipAnim, { toValue, friction: 8, useNativeDriver: true }),
            Animated.timing(thumbAnim, { toValue, duration: 400, useNativeDriver: true }),
        ]).start();
        setIsSignUp(s => !s);
    };
    const frontRotate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
    const backRotate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });
    const frontOpacity = flipAnim.interpolate({ inputRange: [0, 0.5, 0.5, 1], outputRange: [1, 1, 0, 0] });
    const backOpacity = flipAnim.interpolate({ inputRange: [0, 0.5, 0.5, 1], outputRange: [0, 0, 1, 1] });
    const thumbX = thumbAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 24] });
    const trackColor = thumbAnim.interpolate({ inputRange: [0, 1], outputRange: [SWITCH_BG, '#aaddff'] });
    const inputBorder = (key) => focused === key ? INPUT_FOCUS : INK;
    const CARD_W = 300;
    const CARD_H = isSignUp ? 420 : 370;
    return (_jsxs(View, { style: styles.wrapper, children: [_jsxs(View, { style: styles.header, children: [_jsx(TouchableOpacity, { onPress: () => isSignUp && toggle(), children: _jsx(Text, { style: [styles.modeText, { opacity: isSignUp ? 0.5 : 1 }], children: "Log in" }) }), _jsxs(TouchableOpacity, { onPress: toggle, style: styles.switchOuter, activeOpacity: 0.9, children: [_jsx(Animated.View, { style: [styles.track, { backgroundColor: trackColor }] }), _jsx(Animated.View, { style: [styles.thumb, { transform: [{ translateX: thumbX }] }] })] }), _jsx(TouchableOpacity, { onPress: () => !isSignUp && toggle(), children: _jsx(Text, { style: [styles.modeText, { opacity: isSignUp ? 1 : 0.5 }], children: "Sign up" }) })] }), _jsx(Animated.View, { style: [styles.deco, styles.decoStar, { transform: [{ translateY: starY }] }], children: _jsx(Text, { style: { fontSize: 28 }, children: "\u2B50" }) }), _jsx(Animated.View, { style: [styles.deco, styles.decoSparkle, { transform: [{ translateY: sparkleY }] }], children: _jsx(Text, { style: { fontSize: 24, color: '#06d6a0' }, children: "\u2726" }) }), _jsxs(View, { style: { width: CARD_W, height: CARD_H, position: 'relative' }, children: [_jsxs(Animated.View, { style: [
                            styles.face,
                            styles.faceFront,
                            { width: CARD_W, height: CARD_H, opacity: frontOpacity, transform: [{ rotateY: frontRotate }] },
                        ], children: [_jsx(Text, { style: styles.titleFront, children: "Welcome!" }), _jsxs(View, { style: styles.form, children: [_jsx(TextInput, { placeholder: "Email", placeholderTextColor: "#666", keyboardType: "email-address", autoCapitalize: "none", value: loginEmail, onChangeText: setLoginEmail, onFocus: () => setFocused('le'), onBlur: () => setFocused(''), style: [styles.input, { borderColor: inputBorder('le') }] }), _jsx(TextInput, { placeholder: "Password", placeholderTextColor: "#666", secureTextEntry: true, value: loginPwd, onChangeText: setLoginPwd, onFocus: () => setFocused('lp'), onBlur: () => setFocused(''), style: [styles.input, { borderColor: inputBorder('lp') }] }), _jsx(TouchableOpacity, { style: [styles.btn, { backgroundColor: PRIMARY_BTN, transform: [{ rotate: '-1deg' }] }], activeOpacity: 0.8, onPress: () => onLogin?.(loginEmail, loginPwd), children: _jsx(Text, { style: styles.btnText, children: "Let's Go!" }) })] })] }), _jsxs(Animated.View, { style: [
                            styles.face,
                            styles.faceBack,
                            { width: CARD_W, height: CARD_H, opacity: backOpacity, transform: [{ rotateY: backRotate }] },
                        ], children: [_jsx(Text, { style: styles.titleBack, children: "Join Us!" }), _jsxs(View, { style: styles.form, children: [_jsx(TextInput, { placeholder: "Name", placeholderTextColor: "#666", autoCapitalize: "words", value: signName, onChangeText: setSignName, onFocus: () => setFocused('sn'), onBlur: () => setFocused(''), style: [styles.input, { borderColor: inputBorder('sn') }] }), _jsx(TextInput, { placeholder: "Email", placeholderTextColor: "#666", keyboardType: "email-address", autoCapitalize: "none", value: signEmail, onChangeText: setSignEmail, onFocus: () => setFocused('se'), onBlur: () => setFocused(''), style: [styles.input, { borderColor: inputBorder('se') }] }), _jsx(TextInput, { placeholder: "Password", placeholderTextColor: "#666", secureTextEntry: true, value: signPwd, onChangeText: setSignPwd, onFocus: () => setFocused('sp'), onBlur: () => setFocused(''), style: [styles.input, { borderColor: inputBorder('sp') }] }), _jsx(TouchableOpacity, { style: [styles.btn, { backgroundColor: SECONDARY_BTN, transform: [{ rotate: '1deg' }] }], activeOpacity: 0.8, onPress: () => onSignUp?.(signName, signEmail, signPwd), children: _jsx(Text, { style: styles.btnText, children: "Confirm!" }) })] })] })] })] }));
}
const styles = StyleSheet.create({
    wrapper: { alignItems: 'center', fontFamily: 'sans-serif', position: 'relative' },
    header: { flexDirection: 'row', alignItems: 'center', gap: 15, marginBottom: 25, zIndex: 5 },
    modeText: { fontSize: 18, fontWeight: 'bold', color: INK },
    switchOuter: { position: 'relative', width: 50, height: 24, justifyContent: 'center' },
    track: {
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        borderRadius: 12, borderWidth: 2, borderColor: INK,
        shadowColor: INK, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 1, shadowRadius: 0,
    },
    thumb: {
        position: 'absolute', width: 16, height: 16, left: 3,
        backgroundColor: '#fff', borderRadius: 8, borderWidth: 2, borderColor: INK,
        shadowColor: INK, shadowOffset: { width: 1, height: 1 }, shadowOpacity: 1, shadowRadius: 0,
    },
    deco: { position: 'absolute', zIndex: 10 },
    decoStar: { top: -20, left: -30 },
    decoSparkle: { bottom: 30, right: -20 },
    face: {
        position: 'absolute',
        padding: 20,
        borderWidth: 2, borderColor: INK,
        shadowColor: INK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0,
        elevation: 6,
        backfaceVisibility: 'hidden',
        justifyContent: 'center', alignItems: 'center',
    },
    faceFront: { backgroundColor: PAPER_FRONT, borderRadius: 16 },
    faceBack: { backgroundColor: PAPER_BACK, borderRadius: 20 },
    titleFront: {
        fontSize: 25, fontWeight: '900', color: INK,
        marginBottom: 20, textTransform: 'uppercase', letterSpacing: 1,
        transform: [{ rotate: '-3deg' }],
    },
    titleBack: {
        fontSize: 25, fontWeight: '900', color: INK,
        marginBottom: 15, textTransform: 'uppercase', letterSpacing: 1,
        transform: [{ rotate: '2deg' }],
    },
    form: { alignItems: 'center', gap: 15, width: '100%' },
    input: {
        width: 250, height: 40, padding: 5, paddingHorizontal: 15,
        fontWeight: '600', color: INK, fontSize: 15,
        backgroundColor: '#fff',
        borderWidth: 2, borderRadius: 12,
        shadowColor: INK, shadowOffset: { width: 3, height: 3 }, shadowOpacity: 1, shadowRadius: 0,
        elevation: 3,
    },
    btn: {
        marginVertical: 15, width: 120, height: 40,
        borderWidth: 2, borderColor: INK, borderRadius: 12,
        shadowColor: INK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0,
        elevation: 4,
        alignItems: 'center', justifyContent: 'center',
    },
    btnText: { fontSize: 17, fontWeight: '900', letterSpacing: 1, color: INK },
});
//# sourceMappingURL=DoodleFlipCard.js.map