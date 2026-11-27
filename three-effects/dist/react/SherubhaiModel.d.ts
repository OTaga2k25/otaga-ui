import React from 'react';
import { SherubhaiModelOptions } from '../effects/SherubhaiModel';
export interface SherubhaiModelProps extends SherubhaiModelOptions {
    className?: string;
    style?: React.CSSProperties;
}
export declare function SherubhaiModel({ className, style, animation, ...options }: SherubhaiModelProps): React.JSX.Element;
