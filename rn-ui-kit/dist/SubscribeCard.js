'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export function SubscribeCard({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [focused, setFocused] = useState(false);
    return (_jsxs(View, { style: styles.wrapper, children: [_jsxs(View, { style: styles.card, children: [_jsx(Text, { style: styles.title, children: "SUBSCRIBE" }), _jsx(View, { style: styles.triangle }), _jsx(TextInput, { placeholder: "Your e-mail", placeholderTextColor: "#aaa", keyboardType: "email-address", autoCapitalize: "none", value: email, onChangeText: setEmail, onFocus: () => setFocused(true), onBlur: () => setFocused(false), style: [styles.input, { borderBottomColor: focused ? '#0d095e' : '#d4d4d4' }] })] }), _jsx(TouchableOpacity, { activeOpacity: 0.8, onPress: () => onSubmit?.(email), style: styles.submitBtn, children: _jsx(Text, { style: styles.submitText, children: "SUBMIT" }) })] }));
}
const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        alignSelf: 'flex-start',
        marginBottom: 24,
        marginRight: 10,
    },
    card: {
        height: 140,
        width: 240,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 30,
        elevation: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 4,
        lineHeight: 28,
        color: '#333',
    },
    triangle: {
        position: 'absolute',
        right: -10,
        bottom: 18,
        width: 0,
        height: 0,
        borderLeftWidth: 0,
        borderRightWidth: 10,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#1a044e',
    },
    input: {
        position: 'absolute',
        bottom: 30,
        left: 20,
        width: '82%',
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        padding: 10,
        backgroundColor: 'transparent',
        fontSize: 14,
        color: '#333',
    },
    submitBtn: {
        position: 'absolute',
        right: 0,
        bottom: -20,
        borderRadius: 30,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: '#0f0092',
        paddingVertical: 12,
        paddingHorizontal: 25,
        shadowColor: '#1a1a1a',
        shadowOffset: { width: -5, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 6,
    },
    submitText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 5,
    },
});
//# sourceMappingURL=SubscribeCard.js.map