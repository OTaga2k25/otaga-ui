export interface ParticleBackgroundOptions {
    count?: number;
    color?: number;
    size?: number;
    speed?: number;
    spread?: number;
    connected?: boolean;
    connectionDistance?: number;
    connectionOpacity?: number;
    backgroundColor?: number | null;
}
export declare class ParticleBackground {
    private scene;
    private camera;
    private renderer;
    private particles;
    private lines;
    private frameId;
    private clock;
    private container;
    private opts;
    private velocities;
    private onResizeBound;
    constructor(container: HTMLElement, options?: ParticleBackgroundOptions);
    private buildParticles;
    private buildLines;
    private updateLines;
    private onResize;
    private animate;
    destroy(): void;
}
