import { CSSProperties } from 'react';
export interface FileUploadProps {
    accept?: string;
    multiple?: boolean;
    onFileChange?: (files: FileList | null) => void;
    style?: CSSProperties;
}
export declare function FileUpload({ accept, multiple, onFileChange, style, }: FileUploadProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FileUpload.d.ts.map