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
};
export declare function BottomBar({ tabs, activeTab, onTabPress, backgroundColor, activeBackgroundColor, activeTintColor, inactiveTintColor, }: BottomBarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=BottomBar.d.ts.map