import { CSSProperties } from 'react';
export type SegmentedControlProps = {
    options: string[];
    selectedOption: string;
    onSelect: (option: string) => void;
    activeColor?: string;
    style?: CSSProperties;
};
export declare function SegmentedControl({ options, selectedOption, onSelect, activeColor, style, }: SegmentedControlProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SegmentedControl.d.ts.map