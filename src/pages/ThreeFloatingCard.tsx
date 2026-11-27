import { FloatingCardReact } from '@otaga/three-effects';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';

const reactCode = `import { FloatingCardReact } from '@otaga/three-effects';

function Example() {
  return (
    <FloatingCardReact
      color={0x6366f1}
      emissiveColor={0x1a0840}
      floatSpeed={1.2}
      tiltStrength={0.4}
      style={{ height: 400 }}
    />
  );
}`;

const cdnCode = `<!-- 1. Load the UMD bundle (three.js is bundled inside) -->
<script src="https://cdn.jsdelivr.net/gh/OTaga2k25/otaga-ui@42c544d/three-effects/dist/index.umd.js"></script>

<!-- 2. Container -->
<div id="card" style="width:100%;height:400px"></div>

<!-- 3. Init -->
<script>
  new OtagaEffects.FloatingCard(document.getElementById('card'), {
    color: 0x6366f1,
    emissiveColor: 0x1a0840,
    floatSpeed: 1.2,
    tiltStrength: 0.4,
  });
</script>`;

const props = [
  { name: 'color',          type: 'number',  default: '0x6366f1', desc: 'Card base color as a hex number.' },
  { name: 'emissiveColor',  type: 'number',  default: '0x1a0840', desc: 'Emissive (inner glow) color.' },
  { name: 'image',          type: 'string',  default: '—',        desc: 'Optional image URL applied as a texture to the card face.' },
  { name: 'width',          type: 'number',  default: '2.8',      desc: 'Card width in 3D units.' },
  { name: 'height',         type: 'number',  default: '4',        desc: 'Card height in 3D units.' },
  { name: 'depth',          type: 'number',  default: '0.06',     desc: 'Card thickness in 3D units.' },
  { name: 'floatSpeed',     type: 'number',  default: '1.2',      desc: 'Speed of the floating up/down animation.' },
  { name: 'floatAmplitude', type: 'number',  default: '0.18',     desc: 'Distance of the float oscillation.' },
  { name: 'tiltStrength',   type: 'number',  default: '0.35',     desc: 'How strongly the card tilts toward the cursor.' },
];

export function ThreeFloatingCardPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Three Effects"
        title="FloatingCard"
        description="A 3D card that floats with a sine-wave animation and tilts toward the mouse cursor. Works in React and plain HTML via CDN."
        pkg="@otaga/three-effects"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ background: '#05050f', borderRadius: 12, overflow: 'hidden' }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', padding: '10px 16px 0', textAlign: 'center' }}>
            Move your cursor over the canvas
          </p>
          <FloatingCardReact
            color={0x6366f1}
            emissiveColor={0x1a0840}
            floatSpeed={1.2}
            tiltStrength={0.4}
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
