import type { SymbolWeight } from 'expo-symbols';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';
type IconSymbolName = keyof typeof MAPPING;
/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
declare const MAPPING: {
    readonly 'house.fill': "home";
    readonly 'home.fill': "home";
    readonly 'paperplane.fill': "send";
    readonly 'chevron.left.forwardslash.chevron.right': "code";
    readonly 'chevron.right': "chevron-right";
    readonly 'chevron.left': "chevron-left";
    readonly heart: "favorite-outline";
    readonly bag: "shopping-bag";
    readonly 'bag.fill': "shopping-bag";
    readonly person: "person-outline";
    readonly 'person.fill': "person";
    readonly magnifyingglass: "search";
    readonly checkmark: "check";
    readonly settings: "settings";
    readonly gearshape: "settings";
    readonly gear: "settings";
};
/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export declare function IconSymbol({ name, size, color, style, }: {
    name: IconSymbolName;
    size?: number;
    color: string | OpaqueColorValue;
    style?: StyleProp<TextStyle>;
    weight?: SymbolWeight;
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=IconSymbol.d.ts.map