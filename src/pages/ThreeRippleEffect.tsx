import { RippleEffectReact } from '@otaga/three-effects';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';

const reactCode = `import { RippleEffectReact } from '@otaga/three-effects';

function Example() {
  return (
    <RippleEffectReact
      color={0x6366f1}
      maxRadius={3}
      duration={1.4}
      maxRipples={6}
      style={{ height: 300, cursor: 'pointer' }}
    />
  );
}`;

const cdnCode = `<!-- 1. Load the UMD bundle -->
<script src="https://cdn.jsdelivr.net/gh/OTaga2k25/otaga-ui@42c544d/three-effects/dist/index.umd.js"></script>

<!-- 2. Container -->
<div id="ripple" style="width:100%;height:300px;cursor:pointer"></div>

<!-- 3. Init -->
<script>
  const ripple = new OtagaEffects.RippleEffect(
    document.getElementById('ripple'),
    { color: 0x6366f1, maxRadius: 3, duration: 1.4 }
  );

  // Trigger programmatically
  ripple.trigger();
</script>`;

const props = [
  { name: 'color',       type: 'number',       default: '0x6366f1', desc: 'Ring color.' },
  { name: 'maxRipples', type: 'number',        default: '6',        desc: 'Max simultaneous ripple rings on screen.' },
  { name: 'duration',   type: 'number',        default: '1.2',      desc: 'How long (seconds) each ring takes to fade out.' },
  { name: 'maxRadius',  type: 'number',        default: '2.5',      desc: 'Final radius of a fully expanded ring.' },
  { name: 'thickness',  type: 'number',        default: '0.06',     desc: 'Ring stroke thickness.' },
  { name: 'backgroundColor', type: 'number | null', default: 'null', desc: 'Scene background. null = transparent.' },
];

export function ThreeRippleEffectPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Three Effects"
        title="RippleEffect"
        description="Click anywhere in the canvas to spawn expanding ring ripples that fade out. Multiple ripples can coexist. Also exposes a trigger() method for programmatic use."
        pkg="@otaga/three-effects"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ background: '#05050f', borderRadius: 12, overflow: 'hidden' }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', padding: '10px 16px 0', textAlign: 'center' }}>
            Click anywhere in the canvas
          </p>
          <RippleEffectReact
            color={0x818cf8}
            maxRadius={3.2}
            duration={1.4}
            maxRipples={8}
            style={{ height: 300, cursor: 'pointer' }}
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
