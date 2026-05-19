import React from 'react';
import { MorphTextOptions } from '../effects/MorphText';
export interface MorphTextProps extends MorphTextOptions {
    className?: string;
    style?: React.CSSProperties;
}
export interface MorphTextHandle {
    next: () => void;
}
export declare const MorphText: React.ForwardRefExoticComponent<MorphTextProps & React.RefAttributes<MorphTextHandle>>;
