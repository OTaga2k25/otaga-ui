import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

/**
 * Where the model is loaded from when you do not pass `url`.
 * The same file ships inside the npm package at
 *   @otaga/three-effects/models/sherubhai.glb
 * so in a bundler you can also do:
 *   import url from '@otaga/three-effects/models/sherubhai.glb?url';
 *   <SherubhaiModelReact url={url} />
 */
export const SHERUBHAI_MODEL_URL =
  'https://cdn.jsdelivr.net/gh/OTaga2k25/otaga-ui@main/three-effects/models/sherubhai.glb';

/** The 13 animation clips baked into the GLB. */
export const SHERUBHAI_ANIMATIONS = [
  'Idle', 'Walk', 'Run', 'LookAround', 'Aim', 'Shoot', 'GetIn',
  'Wave', 'Jump', 'Sit', 'Drive', 'Dance', 'Clap',
] as const;
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

export class SherubhaiModel {
  /** Resolves when the model is loaded and visible. */
  readonly ready: Promise<SherubhaiModel>;
  /** Names of the clips found in the loaded file. */
  animations: string[] = [];

  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  private renderer: THREE.WebGLRenderer;
  private holder = new THREE.Group();
  private mixer: THREE.AnimationMixer | null = null;
  private actions = new Map<string, THREE.AnimationAction>();
  private current: THREE.AnimationAction | null = null;
  private clock = new THREE.Clock();
  private frameId = 0;
  private visible = true;
  private dragging = false;
  private lastX = 0;
  private destroyed = false;
  private io: IntersectionObserver | null = null;
  private ro: ResizeObserver | null = null;
  private opts: Required<Omit<SherubhaiModelOptions, 'onLoad' | 'onError'>> &
    Pick<SherubhaiModelOptions, 'onLoad' | 'onError'>;
  private fitHeight = 1.8;
  private fitCenterY = 0.9;

  constructor(private container: HTMLElement, options: SherubhaiModelOptions = {}) {
    this.opts = {
      url: options.url ?? SHERUBHAI_MODEL_URL,
      animation: options.animation ?? 'Idle',
      background: options.background ?? null,
      drag: options.drag ?? true,
      autoRotate: options.autoRotate ?? false,
      zoom: options.zoom ?? 1,
      rotationY: options.rotationY ?? 0,
      onLoad: options.onLoad,
      onError: options.onError,
    };

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    if (this.opts.background !== null) this.renderer.setClearColor(this.opts.background, 1);
    else this.renderer.setClearColor(0x000000, 0);
    const el = this.renderer.domElement;
    el.style.display = 'block';
    el.style.width = '100%';
    el.style.height = '100%';
    el.style.touchAction = this.opts.drag ? 'pan-y' : 'auto';
    if (this.opts.drag) el.style.cursor = 'grab';
    container.appendChild(el);

    // light: soft sky + warm key + cool rim so the white suit keeps its shape
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8f9c, 1.1));
    const key = new THREE.DirectionalLight(0xfff1dd, 2.1);
    key.position.set(2.5, 4, 3.5);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x9db4ff, 1.2);
    rim.position.set(-3, 2.5, -3);
    this.scene.add(rim);

    this.scene.add(this.holder);
    this.holder.rotation.y = this.opts.rotationY;
    this.holder.add(this.makeShadow());

    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
    if (this.opts.drag) {
      el.addEventListener('pointerdown', this.onPointerDown);
      window.addEventListener('pointermove', this.onPointerMove);
      window.addEventListener('pointerup', this.onPointerUp);
    }

    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(container);
    this.io = new IntersectionObserver((e) => { this.visible = e[0]?.isIntersecting ?? true; });
    this.io.observe(container);
    this.resize();

    this.ready = this.load();
    this.loop = this.loop.bind(this);
    this.frameId = requestAnimationFrame(this.loop);
  }

  /** Switch clip, e.g. model.play('Dance'). Returns false if there is no such clip. */
  play(name: SherubhaiAnimation | string, fade = 0.25): boolean {
    const next = this.actions.get(name);
    if (!next) return false;
    if (this.current === next) return true;
    next.reset().fadeIn(fade).play();
    this.current?.fadeOut(fade);
    this.current = next;
    return true;
  }

  /** Remove the canvas and free the GPU memory. */
  destroy() {
    this.destroyed = true;
    cancelAnimationFrame(this.frameId);
    this.ro?.disconnect();
    this.io?.disconnect();
    const el = this.renderer.domElement;
    el.removeEventListener('pointerdown', this.onPointerDown);
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
    this.scene.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      const mat = m.material as THREE.Material | THREE.Material[] | undefined;
      (Array.isArray(mat) ? mat : mat ? [mat] : []).forEach((x) => {
        (x as THREE.MeshStandardMaterial).map?.dispose();
        x.dispose();
      });
    });
    this.renderer.dispose();
    el.remove();
  }

  // ── internals ────────────────────────────────────────────────────────────
  private async load(): Promise<SherubhaiModel> {
    try {
      const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
      const gltf = await loader.loadAsync(this.opts.url);
      if (this.destroyed) return this;
      const model = gltf.scene;
      model.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.isMesh) {
          m.frustumCulled = false;
          const mat = m.material as THREE.MeshStandardMaterial;
          mat.metalness = 0;
          mat.roughness = 0.8;
        }
      });

      // stand him on the floor, centred, and frame the full body
      const box = new THREE.Box3().setFromObject(model);
      model.position.x -= (box.min.x + box.max.x) / 2;
      model.position.z -= (box.min.z + box.max.z) / 2;
      model.position.y -= box.min.y;
      this.fitHeight = box.max.y - box.min.y || 1.8;
      this.fitCenterY = this.fitHeight / 2;
      this.holder.add(model);
      this.frame();

      this.mixer = new THREE.AnimationMixer(model);
      for (const clip of gltf.animations) this.actions.set(clip.name, this.mixer.clipAction(clip));
      this.animations = gltf.animations.map((c) => c.name);
      if (!this.play(this.opts.animation, 0)) this.play('Idle', 0);

      this.opts.onLoad?.(this);
    } catch (err) {
      if (this.opts.onError) this.opts.onError(err);
      else console.error('[SherubhaiModel] could not load', this.opts.url, err);
    }
    return this;
  }

  private makeShadow(): THREE.Mesh {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d')!;
    const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(0,0,0,0.55)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 128, 128);
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1.4, 1.4),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false })
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = 0.004;
    return mesh;
  }

  private frame() {
    const fov = THREE.MathUtils.degToRad(this.camera.fov);
    const aspect = this.camera.aspect || 1;
    const fitH = (this.fitHeight * 1.18) / (2 * Math.tan(fov / 2));
    const fitW = (1.6 * 1.1) / (2 * Math.tan(fov / 2) * aspect);
    const d = Math.max(fitH, fitW) / this.opts.zoom;
    this.camera.position.set(0, this.fitCenterY * 0.9 + 0.1, d);
    this.camera.lookAt(0, this.fitCenterY, 0);
  }

  private resize() {
    const w = this.container.clientWidth || 300;
    const h = this.container.clientHeight || 400;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.frame();
  }

  private onPointerDown(e: PointerEvent) {
    this.dragging = true;
    this.lastX = e.clientX;
    this.renderer.domElement.style.cursor = 'grabbing';
  }
  private onPointerMove(e: PointerEvent) {
    if (!this.dragging) return;
    this.holder.rotation.y += (e.clientX - this.lastX) * 0.012;
    this.lastX = e.clientX;
  }
  private onPointerUp() {
    this.dragging = false;
    this.renderer.domElement.style.cursor = this.opts.drag ? 'grab' : 'auto';
  }

  private loop() {
    this.frameId = requestAnimationFrame(this.loop);
    const dt = Math.min(this.clock.getDelta(), 0.05);
    if (!this.visible) return;
    this.mixer?.update(dt);
    if (this.opts.autoRotate && !this.dragging) this.holder.rotation.y += dt * 0.6;
    this.renderer.render(this.scene, this.camera);
  }
}
