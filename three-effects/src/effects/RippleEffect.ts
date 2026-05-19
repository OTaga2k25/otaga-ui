import * as THREE from 'three';

export interface RippleEffectOptions {
  color?: number;
  maxRipples?: number;
  duration?: number;
  maxRadius?: number;
  thickness?: number;
  backgroundColor?: number | null;
}

interface Ripple {
  mesh: THREE.Mesh;
  age: number;
  duration: number;
}

export class RippleEffect {
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;
  private renderer: THREE.WebGLRenderer;
  private ripples: Ripple[] = [];
  private frameId = 0;
  private clock = new THREE.Clock();
  private container: HTMLElement;
  private opts: Required<RippleEffectOptions>;
  private onClickBound: (e: MouseEvent) => void;
  private onResizeBound: () => void;

  constructor(container: HTMLElement, options: RippleEffectOptions = {}) {
    this.container = container;
    this.opts = {
      color: options.color ?? 0x6366f1,
      maxRipples: options.maxRipples ?? 6,
      duration: options.duration ?? 1.2,
      maxRadius: options.maxRadius ?? 2.5,
      thickness: options.thickness ?? 0.06,
      backgroundColor: options.backgroundColor ?? null,
    };

    const w = container.clientWidth;
    const h = container.clientHeight;
    const aspect = w / h;

    this.scene = new THREE.Scene();
    if (this.opts.backgroundColor !== null) {
      this.scene.background = new THREE.Color(this.opts.backgroundColor);
    }

    this.camera = new THREE.OrthographicCamera(-aspect * 5, aspect * 5, 5, -5, 0.1, 100);
    this.camera.position.z = 10;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: this.opts.backgroundColor === null });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    this.onClickBound = this.onClick.bind(this);
    this.onResizeBound = this.onResize.bind(this);
    container.addEventListener('click', this.onClickBound);
    window.addEventListener('resize', this.onResizeBound);

    this.animate();
  }

  private spawnRipple(x: number, y: number) {
    if (this.ripples.length >= this.opts.maxRipples) {
      const oldest = this.ripples.shift()!;
      this.scene.remove(oldest.mesh);
      oldest.mesh.geometry.dispose();
      (oldest.mesh.material as THREE.Material).dispose();
    }

    const geo = new THREE.RingGeometry(0.01, 0.01 + this.opts.thickness, 64);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(this.opts.color),
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, 0);
    this.scene.add(mesh);
    this.ripples.push({ mesh, age: 0, duration: this.opts.duration });
  }

  private onClick(e: MouseEvent) {
    const rect = this.container.getBoundingClientRect();
    const aspect = rect.width / rect.height;
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    const x = nx * aspect * 5;
    const y = ny * 5;
    this.spawnRipple(x, y);
  }

  private onResize() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    const aspect = w / h;
    this.camera.left = -aspect * 5;
    this.camera.right = aspect * 5;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  private animate() {
    this.frameId = requestAnimationFrame(this.animate.bind(this));
    const delta = this.clock.getDelta();
    const { maxRadius, thickness } = this.opts;

    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const r = this.ripples[i];
      r.age += delta;
      const progress = r.age / r.duration;

      if (progress >= 1) {
        this.scene.remove(r.mesh);
        r.mesh.geometry.dispose();
        (r.mesh.material as THREE.Material).dispose();
        this.ripples.splice(i, 1);
        continue;
      }

      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      const radius = eased * maxRadius;
      r.mesh.geometry.dispose();
      r.mesh.geometry = new THREE.RingGeometry(Math.max(0.01, radius - thickness), radius, 64);
      (r.mesh.material as THREE.MeshBasicMaterial).opacity = 1 - progress;
    }

    this.renderer.render(this.scene, this.camera);
  }

  // Programmatically trigger a ripple at center
  trigger() {
    this.spawnRipple(0, 0);
  }

  destroy() {
    cancelAnimationFrame(this.frameId);
    this.container.removeEventListener('click', this.onClickBound);
    window.removeEventListener('resize', this.onResizeBound);
    this.renderer.dispose();
    if (this.renderer.domElement.parentNode === this.container) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}
