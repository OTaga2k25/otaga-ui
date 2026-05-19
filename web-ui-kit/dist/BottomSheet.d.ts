import { ReactNode } from 'react';
export type BottomSheetProps = {
    visible?: boolean;
    onClose?: () => void;
    children: ReactNode;
    snapPoints?: number[];
    backgroundColor?: string;
    persistent?: boolean;
};
export declare function BottomSheet({ visible, onClose, children, snapPoints, backgroundColor, persistent, }: BottomSheetProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=BottomSheet.d.ts.map