'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconSymbol } from './IconSymbol';
import { ThemedText } from './ThemedText';
import { useThemeColor } from '@otaga/shared-utils';
export function BottomBar({ tabs, activeTab, onTabPress, backgroundColor, activeBackgroundColor = '#000000', activeTintColor = '#FFFFFF', inactiveTintColor, }) {
    const themeBgColor = useThemeColor({}, 'background');
    const themeInactiveColor = useThemeColor({}, 'icon');
    const finalBgColor = backgroundColor || themeBgColor;
    const finalInactiveColor = inactiveTintColor || themeInactiveColor;
    return (_jsx(View, { style: styles.wrapper, children: _jsx(View, { style: [styles.container, { backgroundColor: finalBgColor, shadowColor: finalInactiveColor }], children: tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (_jsxs(TouchableOpacity, { style: [
                        styles.tab,
                        isActive && { backgroundColor: activeBackgroundColor, borderRadius: 100 },
                    ], onPress: () => onTabPress(tab.id), activeOpacity: 0.8, children: [_jsx(IconSymbol, { name: tab.icon, size: 24, color: isActive ? activeTintColor : finalInactiveColor }), isActive && (_jsx(ThemedText, { style: [styles.label, { color: activeTintColor }], children: tab.label }))] }, tab.id));
            }) }) }));
}
const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    container: {
        flexDirection: 'row',
        height: 70,
        width: '100%',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        elevation: 10,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        height: 50,
    },
    label: {
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: 14,
    },
});
//# sourceMappingURL=BottomBar.js.map