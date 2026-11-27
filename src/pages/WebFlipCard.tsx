import { useState } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { FlipCard } from '@otaga/web-ui-kit';

export function WebFlipCardPage() {
  const [flipped, setFlipped] = useState(false);

  const code = `import { FlipCard } from '@otaga/web-ui-kit';

function Example() {
  return (
    <FlipCard
      width={190}
      height={254}
      front={
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://picsum.photos/80"
            style={{ width: 72, height: 72, borderRadius: '50%', marginBottom: 12 }}
          />
          <p style={{ fontWeight: 700, fontSize: 16, color: 'coral', margin: 0 }}>Product Name</p>
          <p style={{ fontSize: 13, color: 'coral', margin: '4px 0 0' }}>$29.99</p>
        </div>
      }
      back={
        <div style={{ textAlign: 'center', padding: '0 16px' }}>
          <p style={{ fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>Details</p>
          <p style={{ fontSize: 12, color: '#fff', margin: 0, lineHeight: 1.6 }}>
            Any content here — text, images, inputs, or custom components.
          </p>
        </div>
      }
    />
  );
}`;

  const props = [
    { name: 'front', type: 'ReactNode', default: '—', desc: 'Content rendered on the front face. Accepts any React elements — images, text, inputs, custom components. Required.' },
    { name: 'back', type: 'ReactNode', default: '—', desc: 'Content rendered on the back face. Same flexibility as front. Required.' },
    { name: 'width', type: 'number', default: '190', desc: 'Width of the card in pixels.' },
    { name: 'height', type: 'number', default: '254', desc: 'Height of the card in pixels.' },
    { name: 'frontStyle', type: 'CSSProperties', default: '—', desc: 'Override styles for the front face (background, border, color, etc.).' },
    { name: 'backStyle', type: 'CSSProperties', default: '—', desc: 'Override styles for the back face (background, border, color, etc.).' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="FlipCard"
        description="3D flip card with CSS perspective. Flips on hover to reveal the back face. Accepts any React content — images, text, or interactive elements."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', padding: 24 }}>
          {/* Card 1 — image + text */}
          <div>
            <div style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 12, textAlign: 'center' }}>Image + text</div>
            <FlipCard
              width={190}
              height={240}
              front={
                <div style={{ textAlign: 'center', padding: '0 16px' }}>
                  <img
                    src="https://picsum.photos/80"
                    style={{ width: 72, height: 72, borderRadius: '50%', marginBottom: 10 }}
                  />
                  <p style={{ fontWeight: 700, fontSize: 15, color: 'coral', margin: 0 }}>Product A</p>
                  <p style={{ fontSize: 12, color: 'coral', margin: '4px 0 0' }}>$29.99</p>
                  <p style={{ fontSize: 10, color: '#c87060', margin: '6px 0 0' }}>Hover to see details</p>
                </div>
              }
              back={
                <div style={{ textAlign: 'center', padding: '0 16px' }}>
                  <p style={{ fontWeight: 700, color: '#fff', margin: '0 0 8px', fontSize: 14 }}>About</p>
                  <p style={{ fontSize: 11, color: '#fff', margin: 0, lineHeight: 1.6 }}>
                    Premium quality product with fast shipping and easy returns.
                  </p>
                </div>
              }
            />
          </div>

          {/* Card 2 — custom style */}
          <div>
            <div style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 12, textAlign: 'center' }}>Custom style</div>
            <FlipCard
              width={190}
              height={240}
              frontStyle={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', borderColor: '#764ba2', color: '#fff' }}
              backStyle={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)', borderColor: '#f5576c', color: '#fff' }}
              front={
                <div style={{ textAlign: 'center', padding: '0 16px' }}>
                  <p style={{ fontWeight: 800, fontSize: 22, margin: '0 0 8px', color: '#fff' }}>✦</p>
                  <p style={{ fontWeight: 700, fontSize: 15, color: '#fff', margin: 0 }}>Premium</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', margin: '6px 0 0' }}>Hover to reveal</p>
                </div>
              }
              back={
                <div style={{ textAlign: 'center', padding: '0 16px' }}>
                  <p style={{ fontWeight: 700, color: '#fff', margin: '0 0 8px', fontSize: 14 }}>Unlocked!</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6 }}>
                    Use frontStyle & backStyle to fully customize colors and gradients.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </LivePreview>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
