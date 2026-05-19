import React from 'react';
import { FloatingCardOptions } from '../effects/FloatingCard';
export interface FloatingCardProps extends FloatingCardOptions {
    className?: string;
    style?: React.CSSProperties;
}
export declare function FloatingCard({ className, style, ...options }: FloatingCardProps): import("react/jsx-runtime").JSX.Element;
