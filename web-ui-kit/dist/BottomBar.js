'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from './Icon';
import { Colors } from './theme';
import { useColorScheme } from './use-color-scheme';
export function BottomBar({ tabs, activeTab, onTabPress, backgroundColor, activeBackgroundColor = '#000', activeTintColor = '#fff', inactiveTintColor, style, }) {
    const scheme = useColorScheme();
    const theme = Colors[scheme];
    const bg = backgroundColor ?? theme.background;
    const inactiveColor = inactiveTintColor ?? theme.icon;
    return (_jsx("div", { style: {
            position: 'fixed',
            bottom: 30,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            paddingInline: 20,
            pointerEvents: 'none',
            zIndex: 100,
            ...style,
        }, children: _jsx("div", { style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: bg,
                borderRadius: 40,
                height: 70,
                width: '100%',
                maxWidth: 500,
                padding: '0 10px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.12)',
                pointerEvents: 'all',
            }, children: tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (_jsxs("button", { onClick: () => onTabPress(tab.id), style: {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                        padding: '12px 20px',
                        height: 50,
                        border: 'none',
                        borderRadius: 100,
                        backgroundColor: isActive ? activeBackgroundColor : 'transparent',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                    }, children: [_jsx(Icon, { name: tab.icon, size: 24, color: isActive ? activeTintColor : inactiveColor }), isActive && (_jsx("span", { style: { color: activeTintColor, fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap' }, children: tab.label }))] }, tab.id));
            }) }) }));
}
//# sourceMappingURL=BottomBar.js.map