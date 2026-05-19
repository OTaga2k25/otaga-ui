import { HTMLAttributes } from 'react';
export type ThemedViewProps = HTMLAttributes<HTMLDivElement> & {
    lightColor?: string;
    darkColor?: string;
};
export declare function ThemedView({ lightColor, darkColor, style, children, ...props }: ThemedViewProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ThemedView.d.ts.map