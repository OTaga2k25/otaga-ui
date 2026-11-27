import { ParticleBackgroundReact } from '@otaga/three-effects';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';

const reactCode = `import { ParticleBackgroundReact } from '@otaga/three-effects';

// Full-page background
function Layout({ children }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <ParticleBackgroundReact
        count={150}
        color={0x6366f1}
        connected={true}
        style={{ position: 'fixed', inset: 0, zIndex: 0 }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}`;

const cdnCode = `<!-- 1. Load the UMD bundle -->
<script src="https://cdn.jsdelivr.net/gh/OTaga2k25/otaga-ui@42c544d/three-effects/dist/index.umd.js"></script>

<!-- 2. Full-screen container -->
<div id="particles" style="position:fixed;inset:0;z-index:0"></div>

<!-- 3. Init -->
<script>
  new OtagaEffects.ParticleBackground(document.getElementById('particles'), {
    count: 150,
    color: 0x6366f1,
    connected: true,
    connectionDistance: 3,
  });
</script>`;

const props = [
  { name: 'count',             type: 'number',       default: '150',  desc: 'Number of particles.' },
  { name: 'color',             type: 'number',       default: '0x6366f1', desc: 'Particle and line color.' },
  { name: 'size',              type: 'number',       default: '0.04', desc: 'Particle point size.' },
  { name: 'speed',             type: 'number',       default: '0.08', desc: 'Drift speed multiplier.' },
  { name: 'spread',            type: 'number',       default: '10',   desc: 'Area size particles fill.' },
  { name: 'connected',         type: 'boolean',      default: 'true', desc: 'Draw lines between nearby particles.' },
  { name: 'connectionDistance',type: 'number',       default: '2.5',  desc: 'Max distance to draw a connection line.' },
  { name: 'connectionOpacity', type: 'number',       default: '0.15', desc: 'Opacity of connection lines.' },
  { name: 'backgroundColor',   type: 'number | null',default: 'null', desc: 'Scene background color. null = transparent.' },
];

export function ThreeParticleBackgroundPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Three Effects"
        title="ParticleBackground"
        description="Animated particles that drift across the scene with optional constellation lines connecting nearby points. Ideal as a full-page background or section decoration."
        pkg="@otaga/three-effects"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ background: '#05050f', borderRadius: 12, overflow: 'hidden', position: 'relative', height: 320 }}>
          <ParticleBackgroundReact
            count={180}
            color={0x6366f1}
            connected={true}
            connectionDistance={3.2}
            speed={0.07}
            spread={14}
            style={{ position: 'absolute', inset: 0, height: '100%' }}
          />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>180 particles · connected</p>
          </div>
        </div>
      </LivePreview>

      <SectionTitle>React</SectionTitle>
      <CodeBlock code={reactCode} lang="tsx" />

      <SectionTitle>CDN / Plain HTML</SectionTitle>
      <CodeBlock code={cdnCode} lang="html" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
