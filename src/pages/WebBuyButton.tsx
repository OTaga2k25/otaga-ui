import React, { useState } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { BuyButton } from '@otaga/web-ui-kit';

export function WebBuyButtonPage() {
  const [lastBought, setLastBought] = useState<string | null>(null);

  const code = `import { BuyButton } from '@otaga/web-ui-kit';

function Example() {
  return (
    <BuyButton
      label="Buy Now"
      color="#2a9d6a"
      height={56}
      width="100%"
      onBuy={() => console.log('Purchase confirmed!')}
    />
  );
}`;

  const props = [
    { name: 'label', type: 'string', default: '"Buy Now"', desc: 'Text displayed inside the slider track.' },
    { name: 'color', type: 'string', default: '"#000"', desc: 'Background color of the sliding circle and track fill.' },
    { name: 'height', type: 'number', default: '62', desc: 'Height of the button in pixels.' },
    { name: 'width', type: 'number | string', default: '"100%"', desc: 'Width of the button. Accepts px numbers or CSS strings.' },
    { name: 'onBuy', type: '() => void', default: '—', desc: 'Callback fired when the user completes the swipe gesture.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="BuyButton"
        description="Swipe-to-confirm purchase button. The circle slides right to trigger the onBuy callback, providing a deliberate gesture that prevents accidental purchases."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 24, maxWidth: 400 }}>
          {lastBought && (
            <div style={{ padding: '8px 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13, color: 'var(--text-muted)' }}>
              Purchased with: <strong>{lastBought}</strong>
            </div>
          )}
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>Green — #2a9d6a</div>
            <BuyButton
              label="Buy Now"
              color="#2a9d6a"
              height={56}
              width="100%"
              onBuy={() => setLastBought('#2a9d6a (Green)')}
            />
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>Blue — #3b82f6</div>
            <BuyButton
              label="Confirm Purchase"
              color="#3b82f6"
              height={56}
              width="100%"
              onBuy={() => setLastBought('#3b82f6 (Blue)')}
            />
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>Purple — #8b5cf6</div>
            <BuyButton
              label="Swipe to Buy"
              color="#8b5cf6"
              height={56}
              width="100%"
              onBuy={() => setLastBought('#8b5cf6 (Purple)')}
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

