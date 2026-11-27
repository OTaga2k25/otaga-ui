import React, { useState } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { CartButton } from '@otaga/web-ui-kit';

export function WebCartButtonPage() {
  const [cartCount, setCartCount] = useState(0);

  const code = `import { CartButton } from '@otaga/web-ui-kit';

function Example() {
  return (
    <CartButton
      label="Add to cart"
      color="#2a9d6a"
      iconColor="#fff"
      height={66}
      width="100%"
      onAddToCart={() => console.log('Added to cart!')}
      onBagPress={() => console.log('Bag icon pressed')}
    />
  );
}`;

  const props = [
    { name: 'label', type: 'string', default: '"Add to cart"', desc: 'Text shown inside the slider track.' },
    { name: 'color', type: 'string', default: '"#000"', desc: 'Accent color used for the morphing slider fill.' },
    { name: 'iconColor', type: 'string', default: '"#fff"', desc: 'Color of the static bag icon on the right side.' },
    { name: 'height', type: 'number', default: '66', desc: 'Height of the button in pixels.' },
    { name: 'width', type: 'number | string', default: '"100%"', desc: 'Width of the button. Accepts px numbers or CSS strings.' },
    { name: 'onAddToCart', type: '() => void', default: '—', desc: 'Callback fired when the swipe gesture is completed.' },
    { name: 'onBagPress', type: '() => void', default: '—', desc: 'Callback fired when the static bag icon on the right is clicked.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="CartButton"
        description="Swipe-to-add button with a morphing slider and a static bag icon on the right. The sliding gesture prevents accidental cart additions while keeping the interaction delightful."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 24, maxWidth: 420 }}>
          {cartCount > 0 && (
            <div style={{ padding: '8px 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13, color: 'var(--text-muted)' }}>
              Items in cart: <strong>{cartCount}</strong>
            </div>
          )}
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>Green variant</div>
            <CartButton
              label="Add to cart"
              color="#2a9d6a"
              iconColor="#fff"
              height={66}
              width="100%"
              onAddToCart={() => setCartCount(c => c + 1)}
              onBagPress={() => alert('Bag pressed — navigate to cart')}
            />
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>Orange variant</div>
            <CartButton
              label="Add to cart"
              color="#f97316"
              iconColor="#fff"
              height={66}
              width="100%"
              onAddToCart={() => setCartCount(c => c + 1)}
              onBagPress={() => alert('Bag pressed — navigate to cart')}
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

