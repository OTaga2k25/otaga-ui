import { CSSProperties } from 'react';
export type ProfileCardProps = {
    name?: string;
    username?: string;
    avatar?: string;
    coverColor?: string;
    description?: string;
    accentColor?: string;
    stats?: {
        label: string;
        value: string | number;
    }[];
    links?: {
        twitter?: string;
        instagram?: string;
        facebook?: string;
        linkedin?: string;
    };
    onFollow?: () => void;
    onMessage?: () => void;
    style?: CSSProperties;
};
export declare function ProfileCard({ name, username, avatar, coverColor, description, accentColor, stats, links, onFollow, onMessage, style, }: ProfileCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ProfileCard.d.ts.map