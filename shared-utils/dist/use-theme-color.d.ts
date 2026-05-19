/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */
import { Colors } from './theme';
export declare function useThemeColor(props: {
    light?: string;
    dark?: string;
}, colorName: keyof typeof Colors.light & keyof typeof Colors.dark): string;
//# sourceMappingURL=use-theme-color.d.ts.map