export interface GlowCardOptions {
    width?: number;
    height?: number;
    color?: number;
    glowColor?: number;
    glowIntensity?: number;
    image?: string;
    floatSpeed?: number;
    tiltStrength?: number;
    pulseSpeed?: number;
}
export declare class GlowCard {
    private scene;
    private camera;
    private renderer;
    private mesh;
    private glowSprite;
    private frameId;
    private mouse;
    private targetRot;
    private clock;
    private container;
    private opts;
    private onMouseMoveBound;
    private onResizeBound;
    constructor(container: HTMLElement, options?: GlowCardOptions);
    private buildCard;
    private buildGlow;
    private addLights;
    private onMouseMove;
    private onResize;
    private animate;
    destroy(): void;
}
