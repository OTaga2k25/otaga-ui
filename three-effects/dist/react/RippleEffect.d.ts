import React from 'react';
import { RippleEffectOptions } from '../effects/RippleEffect';
export interface RippleEffectProps extends RippleEffectOptions {
    className?: string;
    style?: React.CSSProperties;
}
export interface RippleEffectHandle {
    trigger: () => void;
}
export declare const RippleEffect: React.ForwardRefExoticComponent<RippleEffectProps & React.RefAttributes<RippleEffectHandle>>;
