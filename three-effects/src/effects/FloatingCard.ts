import * as THREE from 'three';

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

export class FloatingCard {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private mesh!: THREE.Mesh;
  private frameId = 0;
  private mouse = { x: 0, y: 0 };
  private targetRot = { x: 0, y: 0 };
  private clock = new THREE.Clock();
  private container: HTMLElement;
  private opts: Required<FloatingCardOptions>;
  private onMouseMoveBound: (e: MouseEvent) => void;
  private onResizeBound: () => void;

  constructor(container: HTMLElement, options: FloatingCardOptions = {}) {
    this.container = container;
    this.opts = {
      width: options.width ?? 2.8,
      height: options.height ?? 4,
      depth: options.depth ?? 0.06,
      color: options.color ?? 0x6366f1,
      emissiveColor: options.emissiveColor ?? 0x1a1040,
      image: options.image ?? '',
      floatSpeed: options.floatSpeed ?? 1.2,
      floatAmplitude: options.floatAmplitude ?? 0.18,
      tiltStrength: options.tiltStrength ?? 0.35,
    };

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    this.camera.position.z = 8;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    this.buildCard();
    this.addLights();

    this.onMouseMoveBound = this.onMouseMove.bind(this);
    this.onResizeBound = this.onResize.bind(this);
    container.addEventListener('mousemove', this.onMouseMoveBound);
    window.addEventListener('resize', this.onResizeBound);

    this.animate();
  }

  private buildCard() {
    const { width, height, depth, color, emissiveColor, image } = this.opts;
    const geo = new THREE.BoxGeometry(width, height, depth);
    const mat = image
      ? new THREE.MeshStandardMaterial({
          map: new THREE.TextureLoader().load(image),
          emissive: new THREE.Color(emissiveColor),
          emissiveIntensity: 0.1,
          metalness: 0.2,
          roughness: 0.5,
        })
      : new THREE.MeshStandardMaterial({
          color: new THREE.Color(color),
          emissive: new THREE.Color(emissiveColor),
          emissiveIntensity: 0.4,
          metalness: 0.3,
          roughness: 0.35,
        });

    this.mesh = new THREE.Mesh(geo, mat);
    this.scene.add(this.mesh);
  }

  private addLights() {
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const key = new THREE.PointLight(0xffffff, 2, 30);
    key.position.set(4, 4, 6);
    this.scene.add(key);
    const fill = new THREE.PointLight(0x818cf8, 1, 20);
    fill.position.set(-4, -3, 4);
    this.scene.add(fill);
  }

  private onMouseMove(e: MouseEvent) {
    const rect = this.container.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }

  private onResize() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  private animate() {
    this.frameId = requestAnimationFrame(this.animate.bind(this));
    const t = this.clock.getElapsedTime();
    const { floatSpeed, floatAmplitude, tiltStrength } = this.opts;

    this.mesh.position.y = Math.sin(t * floatSpeed) * floatAmplitude;

    this.targetRot.x += (this.mouse.y * tiltStrength - this.targetRot.x) * 0.06;
    this.targetRot.y += (this.mouse.x * tiltStrength - this.targetRot.y) * 0.06;
    this.mesh.rotation.x = this.targetRot.x;
    this.mesh.rotation.y = this.targetRot.y;

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    cancelAnimationFrame(this.frameId);
    this.container.removeEventListener('mousemove', this.onMouseMoveBound);
    window.removeEventListener('resize', this.onResizeBound);
    this.renderer.dispose();
    if (this.renderer.domElement.parentNode === this.container) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}
