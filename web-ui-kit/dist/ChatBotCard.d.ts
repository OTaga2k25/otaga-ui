import { CSSProperties } from 'react';
export interface ChatBotCardProps {
    placeholder?: string;
    tags?: string[];
    onSubmit?: (value: string) => void;
    onAttach?: () => void;
    onGrid?: () => void;
    onGlobe?: () => void;
    style?: CSSProperties;
}
export declare function ChatBotCard({ placeholder, tags, onSubmit, onAttach, onGrid, onGlobe, style, }: ChatBotCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ChatBotCard.d.ts.map