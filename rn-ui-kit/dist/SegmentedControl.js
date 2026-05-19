'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from './ThemedText';
export function SegmentedControl({ options, selectedOption, onSelect, activeColor = '#000' }) {
    return (_jsx(View, { style: styles.container, children: options.map((option) => {
            const isActive = selectedOption === option;
            return (_jsx(TouchableOpacity, { style: [styles.option, isActive && styles.activeOption], onPress: () => onSelect(option), activeOpacity: 0.8, children: _jsx(ThemedText, { style: [styles.text, isActive && { color: activeColor, fontWeight: 'bold' }], children: option }) }, option));
        }) }));
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 50,
        padding: 4,
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#EBE8E2',
    },
    option: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    activeOption: {
        backgroundColor: '#FFF',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    text: {
        fontSize: 14,
        color: '#666',
    },
});
//# sourceMappingURL=SegmentedControl.js.map