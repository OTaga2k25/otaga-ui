import React from 'react';
import { ParticleBackgroundOptions } from '../effects/ParticleBackground';
export interface ParticleBackgroundProps extends ParticleBackgroundOptions {
    className?: string;
    style?: React.CSSProperties;
}
export declare function ParticleBackground({ className, style, ...options }: ParticleBackgroundProps): React.JSX.Element;
