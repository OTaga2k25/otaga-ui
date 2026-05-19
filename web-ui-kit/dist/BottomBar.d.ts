import { CSSProperties } from 'react';
export type BottomBarTab = {
    id: string;
    icon: string;
    label: string;
};
export type BottomBarProps = {
    tabs: BottomBarTab[];
    activeTab: string;
    onTabPress: (id: string) => void;
    backgroundColor?: string;
    activeBackgroundColor?: string;
    activeTintColor?: string;
    inactiveTintColor?: string;
    style?: CSSProperties;
};
export declare function BottomBar({ tabs, activeTab, onTabPress, backgroundColor, activeBackgroundColor, activeTintColor, inactiveTintColor, style, }: BottomBarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=BottomBar.d.ts.map