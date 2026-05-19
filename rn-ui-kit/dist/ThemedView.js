'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { View } from 'react-native';
import { useThemeColor } from '@otaga/shared-utils';
export function ThemedView({ style, lightColor, darkColor, ...otherProps }) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    return _jsx(View, { style: [{ backgroundColor }, style], ...otherProps });
}
//# sourceMappingURL=ThemedView.js.map