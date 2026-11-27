import { GlowCardReact } from '@otaga/three-effects';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';

const reactCode = `import { GlowCardReact } from '@otaga/three-effects';

function Example() {
  return (
    <GlowCardReact
      glowColor={0x818cf8}
      glowIntensity={1.4}
      pulseSpeed={1.6}
      style={{ height: 400 }}
    />
  );
}`;

const cdnCode = `<!-- 1. Load the UMD bundle -->
<script src="https://cdn.jsdelivr.net/gh/OTaga2k25/otaga-ui@42c544d/three-effects/dist/index.umd.js"></script>

<!-- 2. Container -->
<div id="card" style="width:100%;height:400px"></div>

<!-- 3. Init -->
<script>
  new OtagaEffects.GlowCard(document.getElementById('card'), {
    glowColor: 0x818cf8,
    glowIntensity: 1.4,
    pulseSpeed: 1.6,
  });
</script>`;

const props = [
  { name: 'color',         type: 'number', default: '0x0f0f1a', desc: 'Card base color.' },
  { name: 'glowColor',     type: 'number', default: '0x6366f1', desc: 'Color of the glow sprite and emissive material.' },
  { name: 'glowIntensity', type: 'number', default: '1.2',      desc: 'Brightness of the glow at its peak.' },
  { name: 'pulseSpeed',    type: 'number', default: '1.5',      desc: 'Speed of the glow pulse animation.' },
  { name: 'image',         type: 'string', default: '—',        desc: 'Optional image URL applied as texture.' },
  { name: 'width',         type: 'number', default: '2.8',      desc: 'Card width in 3D units.' },
  { name: 'height',        type: 'number', default: '4',        desc: 'Card height in 3D units.' },
  { name: 'floatSpeed',    type: 'number', default: '1',        desc: 'Speed of the floating animation.' },
  { name: 'tiltStrength',  type: 'number', default: '0.3',      desc: 'Mouse tilt intensity.' },
];

export function ThreeGlowCardPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Three Effects"
        title="GlowCard"
        description="A 3D card with a pulsing glow sprite behind it, emissive bloom on the card surface, and rim lighting. Tilts on mouse hover."
        pkg="@otaga/three-effects"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ background: '#05050f', borderRadius: 12, overflow: 'hidden' }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', padding: '10px 16px 0', textAlign: 'center' }}>
            Move your cursor — glow pulses continuously
          </p>
          <GlowCardReact
            glowColor={0x818cf8}
            glowIntensity={1.4}
            pulseSpeed={1.6}
            style={{ height: 380 }}
          />
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
