/**
 * Where the model is loaded from when you do not pass `url`.
 * The same file ships inside the npm package at
 *   @otaga/three-effects/models/sherubhai.glb
 * so in a bundler you can also do:
 *   import url from '@otaga/three-effects/models/sherubhai.glb?url';
 *   <SherubhaiModelReact url={url} />
 */
export declare const SHERUBHAI_MODEL_URL = "https://cdn.jsdelivr.net/gh/OTaga2k25/otaga-ui@main/three-effects/models/sherubhai.glb";
/** The 13 animation clips baked into the GLB. */
export declare const SHERUBHAI_ANIMATIONS: readonly ["Idle", "Walk", "Run", "LookAround", "Aim", "Shoot", "GetIn", "Wave", "Jump", "Sit", "Drive", "Dance", "Clap"];
export type SherubhaiAnimation = (typeof SHERUBHAI_ANIMATIONS)[number];
export interface SherubhaiModelOptions {
    /** URL of the .glb. Default: the copy published with this package. */
    url?: string;
    /** Clip to play. Default 'Idle'. Change later with `.play(name)`. */
    animation?: SherubhaiAnimation | string;
    /** Page background colour behind the canvas. Default: transparent. */
    background?: number | null;
    /** Drag to turn him around. Default true. */
    drag?: boolean;
    /** Slow turntable spin while you are not dragging. Default false. */
    autoRotate?: boolean;
    /** Camera zoom: 1 = full body, bigger = closer. Default 1. */
    zoom?: number;
    /** Start angle in radians. Default 0 (facing the camera). */
    rotationY?: number;
    /** Called once the model is on screen. */
    onLoad?: (model: SherubhaiModel) => void;
    /** Called if the file cannot be loaded. */
    onError?: (error: unknown) => void;
}
export declare class SherubhaiModel {
    private container;
    /** Resolves when the model is loaded and visible. */
    readonly ready: Promise<SherubhaiModel>;
    /** Names of the clips found in the loaded file. */
    animations: string[];
    private scene;
    private camera;
    private renderer;
    private holder;
    private mixer;
    private actions;
    private current;
    private clock;
    private frameId;
    private visible;
    private dragging;
    private lastX;
    private destroyed;
    private io;
    private ro;
    private opts;
    private fitHeight;
    private fitCenterY;
    constructor(container: HTMLElement, options?: SherubhaiModelOptions);
    /** Switch clip, e.g. model.play('Dance'). Returns false if there is no such clip. */
    play(name: SherubhaiAnimation | string, fade?: number): boolean;
    /** Remove the canvas and free the GPU memory. */
    destroy(): void;
    private load;
    private makeShadow;
    private frame;
    private resize;
    private onPointerDown;
    private onPointerMove;
    private onPointerUp;
    private loop;
}
