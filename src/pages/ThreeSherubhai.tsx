import { useState } from 'react';
import { SherubhaiModelReact, SHERUBHAI_ANIMATIONS } from '@otaga/three-effects';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';

const reactCode = `import { SherubhaiModelReact } from '@otaga/three-effects';

function Example() {
  return (
    <SherubhaiModelReact
      animation="Dance"      // Idle · Walk · Run · Wave · Dance · Clap …
      autoRotate={false}
      style={{ height: 460 }}
    />
  );
}`;

const bundlerCode = `// The .glb ships inside the npm package, so you can host it yourself:
import glbUrl from '@otaga/three-effects/models/sherubhai.glb?url'; // Vite
// webpack 5:  new URL('@otaga/three-effects/models/sherubhai.glb', import.meta.url)

<SherubhaiModelReact url={glbUrl} animation="Wave" />`;

const nextCode = `// Next.js: copy the file once, then point url at it
//   cp node_modules/@otaga/three-effects/models/sherubhai.glb public/models/
'use client';
import { SherubhaiModelReact } from '@otaga/three-effects';

export default function Hero() {
  return <SherubhaiModelReact url="/models/sherubhai.glb" animation="Idle" />;
}`;

const vanillaCode = `import { SherubhaiModel } from '@otaga/three-effects';

const sheru = new SherubhaiModel(document.getElementById('stage'), {
  animation: 'Idle',
  onLoad: (m) => console.log('clips:', m.animations),
});

sheru.play('Dance');   // cross-fades to another clip
sheru.destroy();       // remove canvas + free GPU memory`;

const cdnCode = `<!-- 1. Load the UMD bundle -->
<script src="https://cdn.jsdelivr.net/gh/OTaga2k25/otaga-ui@main/three-effects/dist/index.umd.js"></script>

<!-- 2. Container -->
<div id="stage" style="width:100%;height:460px"></div>

<!-- 3. Init (the model loads from the CDN by default) -->
<script>
  const sheru = new OtagaEffects.SherubhaiModel(
    document.getElementById('stage'),
    { animation: 'Wave' }
  );
  // sheru.play('Dance');
</script>`;

const props = [
  { name: 'url',        type: 'string',  default: 'package copy (CDN)', desc: 'Address of the .glb. Use your own copy for offline or private hosting.' },
  { name: 'animation',  type: 'string',  default: "'Idle'",   desc: 'Clip to play. Changing the prop cross-fades to the new clip.' },
  { name: 'autoRotate', type: 'boolean', default: 'false',    desc: 'Slow turntable spin while you are not dragging.' },
  { name: 'drag',       type: 'boolean', default: 'true',     desc: 'Drag left or right to turn him around.' },
  { name: 'zoom',       type: 'number',  default: '1',        desc: '1 shows the full body. Use 1.8 or more for a head-and-shoulders crop.' },
  { name: 'rotationY',  type: 'number',  default: '0',        desc: 'Start angle in radians. 0 faces the camera.' },
  { name: 'background', type: 'number',  default: 'null',     desc: 'Solid colour behind him, e.g. 0x0a0a14. Default is transparent.' },
  { name: 'onLoad',     type: '(model) => void', default: '—', desc: 'Called when the model is on screen.' },
  { name: 'onError',    type: '(error) => void', default: '—', desc: 'Called if the file cannot be loaded.' },
];

export function ThreeSherubhaiPage() {
  const [anim, setAnim] = useState<string>('Dance');

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Three Effects"
        title="SherubhaiModel"
        description="Sherubhai, the white-suit lion, as a ready-to-use 3D character. Rigged, textured and animated with 13 clips. Install the package, drop in one component."
        pkg="@otaga/three-effects"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ background: 'radial-gradient(circle at 50% 35%, #232338, #07070f 70%)', borderRadius: 12, overflow: 'hidden' }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', padding: '10px 16px 0', textAlign: 'center' }}>
            Pick an animation — drag to turn him around
          </p>
          <SherubhaiModelReact url="/models/sherubhai.glb" animation={anim} style={{ height: 440 }} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center', padding: '4px 16px 16px' }}>
            {SHERUBHAI_ANIMATIONS.map((a) => (
              <button
                key={a}
                onClick={() => setAnim(a)}
                style={{
                  padding: '6px 12px', borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  border: '1px solid ' + (anim === a ? 'var(--primary)' : 'rgba(255,255,255,0.14)'),
                  background: anim === a ? 'var(--primary)' : 'transparent',
                  color: anim === a ? '#05050f' : 'rgba(255,255,255,0.75)',
                }}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      </LivePreview>

      <SectionTitle>Install</SectionTitle>
      <CodeBlock code="npm install @otaga/three-effects" lang="bash" />

      <SectionTitle>React</SectionTitle>
      <CodeBlock code={reactCode} lang="tsx" />

      <SectionTitle>Vite / webpack — bundle the file yourself</SectionTitle>
      <CodeBlock code={bundlerCode} lang="tsx" />

      <SectionTitle>Next.js</SectionTitle>
      <CodeBlock code={nextCode} lang="tsx" />

      <SectionTitle>Vanilla JS</SectionTitle>
      <CodeBlock code={vanillaCode} lang="ts" />

      <SectionTitle>CDN / Plain HTML</SectionTitle>
      <CodeBlock code={cdnCode} lang="html" />

      <SectionTitle>Animations</SectionTitle>
      <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 640 }}>
        {SHERUBHAI_ANIMATIONS.join(' · ')}. Loop clips (Idle, Walk, Run, Dance, Drive…) repeat; the file also works in any other
        three.js, Babylon.js or Blender project, since it is a standard <code className="mono">.glb</code> with a skeleton.
      </p>

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
