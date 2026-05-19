export type SidebarItem = {
    id: string;
    label: string;
    icon?: string;
    onPress?: () => void;
};
export type SidebarProps = {
    visible: boolean;
    onClose: () => void;
    title?: string;
    items: SidebarItem[];
    footer?: React.ReactNode;
};
export declare function Sidebar({ visible, onClose, title, items, footer }: SidebarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Sidebar.d.ts.map