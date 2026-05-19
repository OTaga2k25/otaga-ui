import { HTMLAttributes } from 'react';
export type TextType = 'default' | 'title' | 'subtitle' | 'defaultSemiBold' | 'link';
export type ThemedTextProps = HTMLAttributes<HTMLSpanElement> & {
    type?: TextType;
};
export declare function ThemedText({ type, style, children, ...props }: ThemedTextProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ThemedText.d.ts.map