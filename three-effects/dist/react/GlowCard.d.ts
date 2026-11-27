import React from 'react';
import { GlowCardOptions } from '../effects/GlowCard';
export interface GlowCardProps extends GlowCardOptions {
    className?: string;
    style?: React.CSSProperties;
}
export declare function GlowCard({ className, style, ...options }: GlowCardProps): React.JSX.Element;
