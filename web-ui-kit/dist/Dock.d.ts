import { CSSProperties, ReactNode } from 'react';
export interface DockItem {
    name: string;
    href?: string;
    icon: (props: {
        style?: CSSProperties;
    }) => ReactNode;
    onClick?: () => void;
}
export interface DockProps {
    items: DockItem[];
    iconSize?: number;
    iconMagnification?: number;
    iconDistance?: number;
    style?: CSSProperties;
}
export declare function Dock({ items, iconSize, iconMagnification, iconDistance, style, }: DockProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Dock.d.ts.map