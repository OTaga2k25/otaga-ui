'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const MAIN = '#000000';
const BG = '#F5F5DC'; // beige
const FONT = '#323232';
const FONT_SUB = '#666666';
const FOCUS = '#2d8cf0';
export function LoginForm({ onSubmit, onTwitter, onGoogle, onFacebook }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [focused, setFocused] = useState('');
    const inputBorder = (key) => focused === key ? FOCUS : MAIN;
    return (_jsxs(View, { style: styles.form, children: [_jsxs(View, { style: styles.titleWrap, children: [_jsx(Text, { style: styles.title, children: "Welcome," }), _jsx(Text, { style: styles.subtitle, children: "sign up to continue" })] }), _jsx(TextInput, { placeholder: "Email", placeholderTextColor: FONT_SUB, keyboardType: "email-address", autoCapitalize: "none", value: email, onChangeText: setEmail, onFocus: () => setFocused('email'), onBlur: () => setFocused(''), style: [styles.input, { borderColor: inputBorder('email') }] }), _jsx(TextInput, { placeholder: "Password", placeholderTextColor: FONT_SUB, secureTextEntry: true, value: password, onChangeText: setPassword, onFocus: () => setFocused('pwd'), onBlur: () => setFocused(''), style: [styles.input, { borderColor: inputBorder('pwd') }] }), _jsxs(View, { style: styles.socialRow, children: [_jsx(TouchableOpacity, { style: styles.socialBtn, activeOpacity: 0.75, onPress: onTwitter, children: _jsx(Text, { style: styles.socialIcon, children: "\uD835\uDD4F" }) }), _jsx(TouchableOpacity, { style: styles.socialBtn, activeOpacity: 0.75, onPress: onGoogle, children: _jsx(Text, { style: styles.socialLabel, children: "G" }) }), _jsx(TouchableOpacity, { style: styles.socialBtn, activeOpacity: 0.75, onPress: onFacebook, children: _jsx(Text, { style: styles.socialLabel, children: "f" }) })] }), _jsx(TouchableOpacity, { style: styles.submitBtn, activeOpacity: 0.75, onPress: () => onSubmit?.(email, password), children: _jsx(Text, { style: styles.submitText, children: "Let's go \u2192" }) })] }));
}
const styles = StyleSheet.create({
    form: {
        padding: 20,
        backgroundColor: '#ADD8E6', // lightblue
        alignItems: 'flex-start',
        gap: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: MAIN,
        shadowColor: MAIN,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 6,
    },
    titleWrap: { marginBottom: 5 },
    title: {
        color: FONT,
        fontWeight: '900',
        fontSize: 20,
    },
    subtitle: {
        color: FONT_SUB,
        fontWeight: '600',
        fontSize: 17,
    },
    input: {
        width: 250,
        height: 40,
        borderRadius: 5,
        borderWidth: 2,
        backgroundColor: BG,
        shadowColor: MAIN,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 3,
        fontSize: 15,
        fontWeight: '600',
        color: FONT,
        paddingHorizontal: 10,
    },
    socialRow: { flexDirection: 'row', gap: 20 },
    socialBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: MAIN,
        backgroundColor: BG,
        shadowColor: MAIN,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcon: { fontSize: 18, fontWeight: '900', color: MAIN },
    socialLabel: { fontSize: 20, fontWeight: '900', color: MAIN },
    submitBtn: {
        alignSelf: 'center',
        marginTop: 30,
        width: 120,
        height: 40,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: MAIN,
        backgroundColor: BG,
        shadowColor: MAIN,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitText: { fontSize: 17, fontWeight: '600', color: FONT },
});
//# sourceMappingURL=LoginForm.js.map