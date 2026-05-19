import { CSSProperties, ReactNode } from 'react';
export interface TabItem {
    title: string;
    icon: (props: {
        style?: CSSProperties;
    }) => ReactNode;
    type?: never;
}
export interface TabSeparator {
    type: 'separator';
    title?: never;
    icon?: never;
}
export type ExpandedTabItem = TabItem | TabSeparator;
export interface ExpandedTabsProps {
    tabs: ExpandedTabItem[];
    style?: CSSProperties;
    activeColor?: string;
    onChange?: (index: number | null) => void;
}
export declare function ExpandedTabs({ tabs, style, activeColor, onChange, }: ExpandedTabsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ExpandedTabs.d.ts.map