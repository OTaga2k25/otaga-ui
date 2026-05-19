import { CSSProperties, ReactNode } from 'react';
export type FlipCardProps = {
    front: ReactNode;
    back: ReactNode;
    width?: number;
    height?: number;
    frontStyle?: CSSProperties;
    backStyle?: CSSProperties;
};
export declare function FlipCard({ front, back, width, height, frontStyle, backStyle, }: FlipCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FlipCard.d.ts.map