export interface MorphTextOptions {
    texts: string[];
    fontSize?: number;
    color?: number;
    particleSize?: number;
    particleCount?: number;
    interval?: number;
    morphDuration?: number;
}
export declare class MorphText {
    private scene;
    private camera;
    private renderer;
    private points;
    private frameId;
    private clock;
    private container;
    private opts;
    private textPositions;
    private fromPositions;
    private toPositions;
    private currentIndex;
    private morphProgress;
    private intervalId;
    private onResizeBound;
    constructor(container: HTMLElement, options: MorphTextOptions);
    private buildPoints;
    private addLights;
    private startCycle;
    private onResize;
    private animate;
    next(): void;
    destroy(): void;
}
