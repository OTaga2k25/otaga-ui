import { MorphTextReact } from '@otaga/three-effects';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';

const reactCode = `import { MorphTextReact } from '@otaga/three-effects';

function Example() {
  return (
    <MorphTextReact
      texts={['Hello', 'World', 'otaga']}
      color={0x6366f1}
      fontSize={80}
      particleCount={2000}
      interval={2500}
      morphDuration={0.9}
      style={{ height: 180 }}
    />
  );
}`;

const cdnCode = `<!-- 1. Load the UMD bundle -->
<script src="https://cdn.jsdelivr.net/gh/OTaga2k25/otaga-ui@42c544d/three-effects/dist/index.umd.js"></script>

<!-- 2. Container -->
<div id="morph" style="width:100%;height:180px"></div>

<!-- 3. Init -->
<script>
  const morph = new OtagaEffects.MorphText(
    document.getElementById('morph'),
    {
      texts: ['Hello', 'World', 'otaga'],
      color: 0x6366f1,
      fontSize: 80,
      particleCount: 2000,
      interval: 2500,
    }
  );

  // Manually advance to next text
  morph.next();
</script>`;

const props = [
  { name: 'texts',         type: 'string[]', default: '—',      desc: 'Array of words/phrases to cycle through. Required.' },
  { name: 'fontSize',      type: 'number',   default: '72',     desc: 'Font size used when sampling text pixels from canvas.' },
  { name: 'color',         type: 'number',   default: '0x6366f1', desc: 'Particle color.' },
  { name: 'particleSize',  type: 'number',   default: '0.045',  desc: 'Rendered size of each particle point.' },
  { name: 'particleCount', type: 'number',   default: '1800',   desc: 'Total number of particles. Higher = more detail.' },
  { name: 'interval',      type: 'number',   default: '2500',   desc: 'Milliseconds between text transitions.' },
  { name: 'morphDuration', type: 'number',   default: '1.0',    desc: 'Seconds the morph animation takes to complete.' },
];

export function ThreeMorphTextPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Three Effects"
        title="MorphText"
        description="Particles sample canvas-rendered text and smoothly morph between words. Exposes a next() method so you can control transitions manually."
        pkg="@otaga/three-effects"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ background: '#05050f', borderRadius: 12, overflow: 'hidden' }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', padding: '10px 16px 0', textAlign: 'center' }}>
            Auto-cycles every 2.2 s — 2000 particles
          </p>
          <MorphTextReact
            texts={['otaga', 'three.js', 'effects', '3D UI']}
            color={0x818cf8}
            fontSize={90}
            particleCount={2000}
            interval={2200}
            morphDuration={0.85}
            style={{ height: 220 }}
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
