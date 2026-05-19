import * as THREE from 'three';

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

export class ParticleBackground {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private particles!: THREE.Points;
  private lines!: THREE.LineSegments;
  private frameId = 0;
  private clock = new THREE.Clock();
  private container: HTMLElement;
  private opts: Required<ParticleBackgroundOptions>;
  private velocities!: Float32Array;
  private onResizeBound: () => void;

  constructor(container: HTMLElement, options: ParticleBackgroundOptions = {}) {
    this.container = container;
    this.opts = {
      count: options.count ?? 150,
      color: options.color ?? 0x6366f1,
      size: options.size ?? 0.04,
      speed: options.speed ?? 0.08,
      spread: options.spread ?? 10,
      connected: options.connected ?? true,
      connectionDistance: options.connectionDistance ?? 2.5,
      connectionOpacity: options.connectionOpacity ?? 0.15,
      backgroundColor: options.backgroundColor ?? null,
    };

    this.scene = new THREE.Scene();
    if (this.opts.backgroundColor !== null) {
      this.scene.background = new THREE.Color(this.opts.backgroundColor);
    }

    this.camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
    this.camera.position.z = 12;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: this.opts.backgroundColor === null });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    this.buildParticles();
    if (this.opts.connected) this.buildLines();

    this.onResizeBound = this.onResize.bind(this);
    window.addEventListener('resize', this.onResizeBound);
    this.animate();
  }

  private buildParticles() {
    const { count, spread, color, size } = this.opts;
    const positions = new Float32Array(count * 3);
    this.velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.3;

      this.velocities[i * 3] = (Math.random() - 0.5) * 0.004;
      this.velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.004;
      this.velocities[i * 3 + 2] = 0;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: new THREE.Color(color),
      size,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
    });

    this.particles = new THREE.Points(geo, mat);
    this.scene.add(this.particles);
  }

  private buildLines() {
    const geo = new THREE.BufferGeometry();
    // Pre-allocate for worst-case connections
    const maxLines = this.opts.count * this.opts.count;
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(maxLines * 6), 3));
    const mat = new THREE.LineBasicMaterial({
      color: new THREE.Color(this.opts.color),
      transparent: true,
      opacity: this.opts.connectionOpacity,
    });
    this.lines = new THREE.LineSegments(geo, mat);
    this.scene.add(this.lines);
  }

  private updateLines() {
    const pos = (this.particles.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
    const linePosAttr = this.lines.geometry.attributes.position as THREE.BufferAttribute;
    const linePos = linePosAttr.array as Float32Array;
    const dist = this.opts.connectionDistance;
    const count = this.opts.count;
    let lineIdx = 0;

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        if (Math.sqrt(dx * dx + dy * dy) < dist) {
          linePos[lineIdx++] = pos[i * 3];
          linePos[lineIdx++] = pos[i * 3 + 1];
          linePos[lineIdx++] = pos[i * 3 + 2];
          linePos[lineIdx++] = pos[j * 3];
          linePos[lineIdx++] = pos[j * 3 + 1];
          linePos[lineIdx++] = pos[j * 3 + 2];
        }
      }
    }

    this.lines.geometry.setDrawRange(0, lineIdx / 3);
    linePosAttr.needsUpdate = true;
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
    const { count, spread, speed } = this.opts;
    const half = spread / 2;
    const pos = (this.particles.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;

    for (let i = 0; i < count; i++) {
      pos[i * 3] += this.velocities[i * 3] * speed * 10;
      pos[i * 3 + 1] += this.velocities[i * 3 + 1] * speed * 10;

      // Wrap around edges
      if (pos[i * 3] > half) pos[i * 3] = -half;
      if (pos[i * 3] < -half) pos[i * 3] = half;
      if (pos[i * 3 + 1] > half) pos[i * 3 + 1] = -half;
      if (pos[i * 3 + 1] < -half) pos[i * 3 + 1] = half;
    }

    (this.particles.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    if (this.opts.connected) this.updateLines();

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    cancelAnimationFrame(this.frameId);
    window.removeEventListener('resize', this.onResizeBound);
    this.renderer.dispose();
    if (this.renderer.domElement.parentNode === this.container) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}
