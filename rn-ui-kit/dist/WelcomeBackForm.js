'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export function WelcomeBackForm({ onLogin, onSignUp, onForgotPassword, onApple, onGoogle }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [focused, setFocused] = useState('');
    return (_jsxs(View, { style: styles.container, children: [_jsx(Text, { style: styles.title, children: "Welcome back" }), _jsxs(View, { style: styles.form, children: [_jsx(TextInput, { placeholder: "Email", placeholderTextColor: "#c0c0c0", keyboardType: "email-address", autoCapitalize: "none", value: email, onChangeText: setEmail, onFocus: () => setFocused('email'), onBlur: () => setFocused(''), style: [styles.input, focused === 'email' && styles.inputFocused] }), _jsx(TextInput, { placeholder: "Password", placeholderTextColor: "#c0c0c0", secureTextEntry: true, value: password, onChangeText: setPassword, onFocus: () => setFocused('pwd'), onBlur: () => setFocused(''), style: [styles.input, focused === 'pwd' && styles.inputFocused] }), _jsx(TouchableOpacity, { onPress: onForgotPassword, style: styles.forgotWrap, children: _jsx(Text, { style: styles.forgotText, children: "Forgot Password?" }) }), _jsx(TouchableOpacity, { style: styles.loginBtn, activeOpacity: 0.85, onPress: () => onLogin?.(email, password), children: _jsx(Text, { style: styles.loginBtnText, children: "Log in" }) })] }), _jsxs(Text, { style: styles.signUpText, children: ["Don't have an account?", ' ', _jsx(Text, { style: styles.signUpLink, onPress: onSignUp, children: "Sign up" })] }), _jsxs(View, { style: styles.socialContainer, children: [_jsxs(TouchableOpacity, { style: styles.appleBtn, activeOpacity: 0.8, onPress: onApple, children: [_jsx(Text, { style: styles.appleIcon }), _jsx(Text, { style: styles.appleBtnText, children: "Log in with Apple" })] }), _jsxs(TouchableOpacity, { style: styles.googleBtn, activeOpacity: 0.8, onPress: onGoogle, children: [_jsx(Text, { style: styles.googleIcon, children: "G" }), _jsx(Text, { style: styles.googleBtnText, children: "Log in with Google" })] })] })] }));
}
const styles = StyleSheet.create({
    container: {
        width: 350,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        elevation: 8,
        borderRadius: 10,
        padding: 20,
        paddingHorizontal: 30,
    },
    title: {
        textAlign: 'center',
        marginVertical: 10,
        marginBottom: 30,
        fontSize: 28,
        fontWeight: '800',
        color: '#333',
    },
    form: { gap: 18, marginBottom: 15 },
    input: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        padding: 12,
        paddingHorizontal: 15,
        fontSize: 14,
        color: '#333',
    },
    inputFocused: { borderColor: '#999' },
    forgotWrap: { alignItems: 'flex-end' },
    forgotText: { fontSize: 9, fontWeight: '700', color: '#747474', textDecorationLine: 'underline' },
    loginBtn: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'teal',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.24,
        shadowRadius: 4,
        elevation: 3,
    },
    loginBtnText: { color: 'white', fontSize: 14 },
    signUpText: { fontSize: 10, color: '#747474' },
    signUpLink: { fontSize: 11, color: 'teal', fontWeight: '800', textDecorationLine: 'underline' },
    socialContainer: { marginTop: 20, gap: 15 },
    appleBtn: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5,
        borderRadius: 20, padding: 10, paddingHorizontal: 15,
        backgroundColor: '#000', borderWidth: 2, borderColor: '#000',
        shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 3,
    },
    appleIcon: { fontSize: 16, color: '#fff' },
    appleBtnText: { fontSize: 11, color: '#fff' },
    googleBtn: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5,
        borderRadius: 20, padding: 10, paddingHorizontal: 15,
        backgroundColor: '#fff', borderWidth: 2, borderColor: '#747474',
        shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.16, shadowRadius: 10, elevation: 3,
    },
    googleIcon: { fontSize: 16, fontWeight: '900', color: '#4285F4' },
    googleBtnText: { fontSize: 11, color: '#333' },
});
//# sourceMappingURL=WelcomeBackForm.js.map