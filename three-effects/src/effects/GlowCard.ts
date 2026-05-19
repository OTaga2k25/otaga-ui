import * as THREE from 'three';

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

function makeGlowSprite(color: number): THREE.Sprite {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  const hex = '#' + color.toString(16).padStart(6, '0');
  gradient.addColorStop(0, hex + 'cc');
  gradient.addColorStop(0.4, hex + '55');
  gradient.addColorStop(1, hex + '00');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({ map: tex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  return new THREE.Sprite(mat);
}

export class GlowCard {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private mesh!: THREE.Mesh;
  private glowSprite!: THREE.Sprite;
  private frameId = 0;
  private mouse = { x: 0, y: 0 };
  private targetRot = { x: 0, y: 0 };
  private clock = new THREE.Clock();
  private container: HTMLElement;
  private opts: Required<GlowCardOptions>;
  private onMouseMoveBound: (e: MouseEvent) => void;
  private onResizeBound: () => void;

  constructor(container: HTMLElement, options: GlowCardOptions = {}) {
    this.container = container;
    this.opts = {
      width: options.width ?? 2.8,
      height: options.height ?? 4,
      color: options.color ?? 0x0f0f1a,
      glowColor: options.glowColor ?? 0x6366f1,
      glowIntensity: options.glowIntensity ?? 1.2,
      image: options.image ?? '',
      floatSpeed: options.floatSpeed ?? 1,
      tiltStrength: options.tiltStrength ?? 0.3,
      pulseSpeed: options.pulseSpeed ?? 1.5,
    };

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    this.camera.position.z = 8;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    this.buildCard();
    this.buildGlow();
    this.addLights();

    this.onMouseMoveBound = this.onMouseMove.bind(this);
    this.onResizeBound = this.onResize.bind(this);
    container.addEventListener('mousemove', this.onMouseMoveBound);
    window.addEventListener('resize', this.onResizeBound);

    this.animate();
  }

  private buildCard() {
    const { width, height, color, glowColor, image } = this.opts;
    const geo = new THREE.BoxGeometry(width, height, 0.06);
    const mat = image
      ? new THREE.MeshStandardMaterial({
          map: new THREE.TextureLoader().load(image),
          emissive: new THREE.Color(glowColor),
          emissiveIntensity: 0.15,
        })
      : new THREE.MeshStandardMaterial({
          color: new THREE.Color(color),
          emissive: new THREE.Color(glowColor),
          emissiveIntensity: 0.25,
          metalness: 0.6,
          roughness: 0.2,
        });
    this.mesh = new THREE.Mesh(geo, mat);
    this.scene.add(this.mesh);
  }

  private buildGlow() {
    this.glowSprite = makeGlowSprite(this.opts.glowColor);
    this.glowSprite.scale.set(6, 8, 1);
    this.glowSprite.position.z = -0.5;
    this.scene.add(this.glowSprite);
  }

  private addLights() {
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const glow = new THREE.PointLight(this.opts.glowColor, this.opts.glowIntensity * 2, 20);
    glow.position.set(0, 0, 3);
    this.scene.add(glow);
    const rim = new THREE.PointLight(0xffffff, 0.8, 15);
    rim.position.set(-3, 3, 5);
    this.scene.add(rim);
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
    const { floatSpeed, tiltStrength, pulseSpeed, glowIntensity } = this.opts;

    this.mesh.position.y = Math.sin(t * floatSpeed) * 0.15;
    this.glowSprite.position.y = this.mesh.position.y;

    this.targetRot.x += (this.mouse.y * tiltStrength - this.targetRot.x) * 0.06;
    this.targetRot.y += (this.mouse.x * tiltStrength - this.targetRot.y) * 0.06;
    this.mesh.rotation.x = this.targetRot.x;
    this.mesh.rotation.y = this.targetRot.y;
    this.glowSprite.rotation.z = this.targetRot.y * 0.3;

    // Pulse glow opacity
    const pulse = 0.5 + Math.sin(t * pulseSpeed) * 0.25;
    (this.glowSprite.material as THREE.SpriteMaterial).opacity = pulse * glowIntensity;

    // Emissive pulse on card
    const cardMat = this.mesh.material as THREE.MeshStandardMaterial;
    cardMat.emissiveIntensity = 0.15 + Math.sin(t * pulseSpeed) * 0.1;

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
