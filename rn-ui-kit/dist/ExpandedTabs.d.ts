import { type ReactNode } from 'react';
import { type ViewStyle } from 'react-native';
export interface RNTabItem {
    title: string;
    icon: ReactNode;
    type?: never;
}
export interface RNTabSeparator {
    type: 'separator';
    title?: never;
    icon?: never;
}
export type RNExpandedTabItem = RNTabItem | RNTabSeparator;
export interface ExpandedTabsProps {
    tabs: RNExpandedTabItem[];
    activeColor?: string;
    style?: ViewStyle;
    onChange?: (index: number | null) => void;
}
export declare function ExpandedTabs({ tabs, activeColor, style, onChange, }: ExpandedTabsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ExpandedTabs.d.ts.map