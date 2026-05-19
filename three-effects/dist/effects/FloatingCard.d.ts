export interface FloatingCardOptions {
    width?: number;
    height?: number;
    depth?: number;
    color?: number;
    emissiveColor?: number;
    image?: string;
    floatSpeed?: number;
    floatAmplitude?: number;
    tiltStrength?: number;
}
export declare class FloatingCard {
    private scene;
    private camera;
    private renderer;
    private mesh;
    private frameId;
    private mouse;
    private targetRot;
    private clock;
    private container;
    private opts;
    private onMouseMoveBound;
    private onResizeBound;
    constructor(container: HTMLElement, options?: FloatingCardOptions);
    private buildCard;
    private addLights;
    private onMouseMove;
    private onResize;
    private animate;
    destroy(): void;
}
