'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
const MAIN = '#323232';
const INPUT_FOCUS = '#2d8cf0';
const BG = '#fff';
export function AuthFlipCard({ onLogin, onSignUp }) {
    const flipAnim = useRef(new Animated.Value(0)).current;
    const thumbAnim = useRef(new Animated.Value(0)).current;
    const [isSignUp, setIsSignUp] = useState(false);
    const [focused, setFocused] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPwd, setLoginPwd] = useState('');
    const [signName, setSignName] = useState('');
    const [signEmail, setSignEmail] = useState('');
    const [signPwd, setSignPwd] = useState('');
    const toggle = () => {
        const toValue = isSignUp ? 0 : 1;
        Animated.parallel([
            Animated.spring(flipAnim, { toValue, friction: 8, useNativeDriver: true }),
            Animated.timing(thumbAnim, { toValue, duration: 300, useNativeDriver: true }),
        ]).start();
        setIsSignUp(s => !s);
    };
    const cardRotate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
    const backRotate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });
    const frontOpacity = flipAnim.interpolate({ inputRange: [0, 0.5, 0.5, 1], outputRange: [1, 1, 0, 0] });
    const backOpacity = flipAnim.interpolate({ inputRange: [0, 0.5, 0.5, 1], outputRange: [0, 0, 1, 1] });
    const thumbX = thumbAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 30] });
    const trackColor = thumbAnim.interpolate({ inputRange: [0, 1], outputRange: [BG, INPUT_FOCUS] });
    const inputBorder = (key) => focused === key ? INPUT_FOCUS : MAIN;
    return (_jsxs(View, { style: styles.wrapper, children: [_jsxs(View, { style: styles.toggleRow, children: [_jsx(TouchableOpacity, { onPress: () => !isSignUp || toggle(), children: _jsx(Text, { style: [styles.label, { textDecorationLine: !isSignUp ? 'underline' : 'none' }], children: "Log in" }) }), _jsxs(TouchableOpacity, { onPress: toggle, style: styles.sliderWrap, activeOpacity: 0.9, children: [_jsx(Animated.View, { style: [styles.track, { backgroundColor: trackColor }] }), _jsx(Animated.View, { style: [styles.thumb, { transform: [{ translateX: thumbX }] }] })] }), _jsx(TouchableOpacity, { onPress: () => isSignUp || toggle(), children: _jsx(Text, { style: [styles.label, { textDecorationLine: isSignUp ? 'underline' : 'none' }], children: "Sign up" }) })] }), _jsxs(View, { style: styles.cardWrap, children: [_jsxs(Animated.View, { style: [
                            styles.face,
                            { opacity: frontOpacity, transform: [{ rotateY: cardRotate }] },
                        ], children: [_jsx(Text, { style: styles.title, children: "Log in" }), _jsxs(View, { style: styles.form, children: [_jsx(TextInput, { placeholder: "Email", keyboardType: "email-address", autoCapitalize: "none", value: loginEmail, onChangeText: setLoginEmail, onFocus: () => setFocused('le'), onBlur: () => setFocused(''), style: [styles.input, { borderColor: inputBorder('le') }], placeholderTextColor: "#999" }), _jsx(TextInput, { placeholder: "Password", secureTextEntry: true, value: loginPwd, onChangeText: setLoginPwd, onFocus: () => setFocused('lp'), onBlur: () => setFocused(''), style: [styles.input, { borderColor: inputBorder('lp') }], placeholderTextColor: "#999" }), _jsx(TouchableOpacity, { style: styles.btn, activeOpacity: 0.85, onPress: () => onLogin?.(loginEmail, loginPwd), children: _jsx(Text, { style: styles.btnText, children: "Let's go!" }) })] })] }), _jsxs(Animated.View, { style: [
                            styles.face,
                            { opacity: backOpacity, transform: [{ rotateY: backRotate }] },
                        ], children: [_jsx(Text, { style: styles.title, children: "Sign up" }), _jsxs(View, { style: styles.form, children: [_jsx(TextInput, { placeholder: "Name", autoCapitalize: "words", value: signName, onChangeText: setSignName, onFocus: () => setFocused('sn'), onBlur: () => setFocused(''), style: [styles.input, { borderColor: inputBorder('sn') }], placeholderTextColor: "#999" }), _jsx(TextInput, { placeholder: "Email", keyboardType: "email-address", autoCapitalize: "none", value: signEmail, onChangeText: setSignEmail, onFocus: () => setFocused('se'), onBlur: () => setFocused(''), style: [styles.input, { borderColor: inputBorder('se') }], placeholderTextColor: "#999" }), _jsx(TextInput, { placeholder: "Password", secureTextEntry: true, value: signPwd, onChangeText: setSignPwd, onFocus: () => setFocused('sp'), onBlur: () => setFocused(''), style: [styles.input, { borderColor: inputBorder('sp') }], placeholderTextColor: "#999" }), _jsx(TouchableOpacity, { style: styles.btn, activeOpacity: 0.85, onPress: () => onSignUp?.(signName, signEmail, signPwd), children: _jsx(Text, { style: styles.btnText, children: "Confirm!" }) })] })] })] })] }));
}
const styles = StyleSheet.create({
    wrapper: { fontFamily: 'sans-serif', alignItems: 'center' },
    toggleRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 24 },
    label: { fontSize: 14, fontWeight: '600', color: MAIN },
    sliderWrap: { width: 50, height: 20, position: 'relative', justifyContent: 'center' },
    track: {
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        borderRadius: 5, borderWidth: 2, borderColor: MAIN,
        shadowColor: MAIN, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0,
        elevation: 4,
    },
    thumb: {
        position: 'absolute', width: 20, height: 20,
        borderRadius: 5, borderWidth: 2, borderColor: MAIN,
        backgroundColor: BG, left: -2,
        shadowColor: MAIN, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 1, shadowRadius: 0,
        elevation: 3,
    },
    cardWrap: { width: 300, height: 400, position: 'relative' },
    face: {
        position: 'absolute', width: 300, height: 400,
        backgroundColor: '#d3d3d3',
        borderRadius: 5, borderWidth: 2, borderColor: MAIN,
        shadowColor: MAIN, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0,
        elevation: 6,
        padding: 20,
        justifyContent: 'center',
        backfaceVisibility: 'hidden',
    },
    title: { fontSize: 25, fontWeight: '900', textAlign: 'center', color: MAIN, marginBottom: 8 },
    form: { alignItems: 'center', gap: 16 },
    input: {
        width: 250, height: 40,
        borderRadius: 5, borderWidth: 2,
        backgroundColor: BG,
        shadowColor: MAIN, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0,
        elevation: 3,
        fontSize: 15, fontWeight: '600', color: MAIN,
        paddingHorizontal: 10,
    },
    btn: {
        marginTop: 4,
        width: 120, height: 40,
        borderRadius: 5, borderWidth: 2, borderColor: MAIN,
        backgroundColor: BG,
        shadowColor: MAIN, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0,
        elevation: 3,
        alignItems: 'center', justifyContent: 'center',
    },
    btnText: { fontSize: 17, fontWeight: '600', color: MAIN },
});
//# sourceMappingURL=AuthFlipCard.js.map