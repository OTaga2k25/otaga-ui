import { CSSProperties } from 'react';
export interface TaskItem {
    id: string;
    label: string;
    defaultChecked?: boolean;
}
export interface BrutalistTaskCardProps {
    title?: string;
    tasks?: TaskItem[];
    accent?: string;
    style?: CSSProperties;
}
export declare function BrutalistTaskCard({ title, tasks, accent, style, }: BrutalistTaskCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=BrutalistTaskCard.d.ts.map