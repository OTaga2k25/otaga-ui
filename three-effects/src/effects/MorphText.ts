import * as THREE from 'three';

export interface MorphTextOptions {
  texts: string[];
  fontSize?: number;
  color?: number;
  particleSize?: number;
  particleCount?: number;
  interval?: number;
  morphDuration?: number;
}

function sampleText(text: string, fontSize: number, particleCount: number): Float32Array {
  const cw = 512, ch = 160;
  const canvas = document.createElement('canvas');
  canvas.width = cw;
  canvas.height = ch;
  const ctx = canvas.getContext('2d')!;
  ctx.clearRect(0, 0, cw, ch);
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${fontSize}px Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, cw / 2, ch / 2);

  const imageData = ctx.getImageData(0, 0, cw, ch);
  const candidates: [number, number][] = [];
  const step = 3;

  for (let y = 0; y < ch; y += step) {
    for (let x = 0; x < cw; x += step) {
      if (imageData.data[(y * cw + x) * 4 + 3] > 128) {
        candidates.push([x, y]);
      }
    }
  }

  const result = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const [cx, cy] = candidates[i % candidates.length];
    // Map canvas coords to world space
    result[i * 3] = (cx / cw - 0.5) * 9;
    result[i * 3 + 1] = -(cy / ch - 0.5) * 2.8;
    result[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
  }
  return result;
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export class MorphText {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private points!: THREE.Points;
  private frameId = 0;
  private clock = new THREE.Clock();
  private container: HTMLElement;
  private opts: Required<MorphTextOptions>;

  private textPositions: Float32Array[] = [];
  private fromPositions!: Float32Array;
  private toPositions!: Float32Array;
  private currentIndex = 0;
  private morphProgress = 1;
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private onResizeBound: () => void;

  constructor(container: HTMLElement, options: MorphTextOptions) {
    this.container = container;
    this.opts = {
      texts: options.texts,
      fontSize: options.fontSize ?? 72,
      color: options.color ?? 0x6366f1,
      particleSize: options.particleSize ?? 0.045,
      particleCount: options.particleCount ?? 1800,
      interval: options.interval ?? 2500,
      morphDuration: options.morphDuration ?? 1.0,
    };

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    this.camera.position.z = 10;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    // Sample all texts
    this.textPositions = this.opts.texts.map(t => sampleText(t, this.opts.fontSize, this.opts.particleCount));
    this.fromPositions = this.textPositions[0].slice();
    this.toPositions = this.textPositions[0].slice();

    this.buildPoints();
    this.addLights();
    this.startCycle();

    this.onResizeBound = this.onResize.bind(this);
    window.addEventListener('resize', this.onResizeBound);
    this.animate();
  }

  private buildPoints() {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.fromPositions.slice(), 3));

    const mat = new THREE.PointsMaterial({
      color: new THREE.Color(this.opts.color),
      size: this.opts.particleSize,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
    });

    this.points = new THREE.Points(geo, mat);
    this.scene.add(this.points);
  }

  private addLights() {
    this.scene.add(new THREE.AmbientLight(0xffffff, 1));
  }

  private startCycle() {
    this.intervalId = setInterval(() => {
      const next = (this.currentIndex + 1) % this.opts.texts.length;
      this.fromPositions = this.textPositions[this.currentIndex].slice();
      this.toPositions = this.textPositions[next];
      this.currentIndex = next;
      this.morphProgress = 0;
    }, this.opts.interval);
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
    const delta = this.clock.getDelta();

    if (this.morphProgress < 1) {
      this.morphProgress = Math.min(1, this.morphProgress + delta / this.opts.morphDuration);
      const t = easeInOut(this.morphProgress);
      const pos = (this.points.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
      const count = this.opts.particleCount;

      for (let i = 0; i < count * 3; i++) {
        pos[i] = this.fromPositions[i] + (this.toPositions[i] - this.fromPositions[i]) * t;
      }
      (this.points.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    }

    this.renderer.render(this.scene, this.camera);
  }

  // Manually go to next text
  next() {
    const next = (this.currentIndex + 1) % this.opts.texts.length;
    this.fromPositions = this.textPositions[this.currentIndex].slice();
    this.toPositions = this.textPositions[next];
    this.currentIndex = next;
    this.morphProgress = 0;
  }

  destroy() {
    cancelAnimationFrame(this.frameId);
    if (this.intervalId) clearInterval(this.intervalId);
    window.removeEventListener('resize', this.onResizeBound);
    this.renderer.dispose();
    if (this.renderer.domElement.parentNode === this.container) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}
