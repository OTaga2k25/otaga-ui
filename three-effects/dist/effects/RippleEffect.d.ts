export interface RippleEffectOptions {
    color?: number;
    maxRipples?: number;
    duration?: number;
    maxRadius?: number;
    thickness?: number;
    backgroundColor?: number | null;
}
export declare class RippleEffect {
    private scene;
    private camera;
    private renderer;
    private ripples;
    private frameId;
    private clock;
    private container;
    private opts;
    private onClickBound;
    private onResizeBound;
    constructor(container: HTMLElement, options?: RippleEffectOptions);
    private spawnRipple;
    private onClick;
    private onResize;
    private animate;
    trigger(): void;
    destroy(): void;
}
