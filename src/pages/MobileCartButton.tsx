import React, { useState } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { CartButton, ThemedText } from '@otaga/web-ui-kit';

export function MobileCartButtonPage() {
  const [cartCount, setCartCount] = useState(0);

  const code = `import { CartButton } from '@otaga/rn-ui-kit';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Example() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <CartButton
        label="Add to cart"
        color="#2a9d6a"
        iconColor="#fff"
        height={66}
        width="100%"
        onAddToCart={() => console.log('Added!')}
        onBagPress={() => router.push('/cart')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FCF5E5',
  },
});`;

  const props = [
    { name: 'label', type: 'string', default: '"Add to cart"', desc: 'Text shown inside the slider track.' },
    { name: 'color', type: 'string', default: '"#000"', desc: 'Accent color used for the morphing slider fill.' },
    { name: 'iconColor', type: 'string', default: '"#fff"', desc: 'Color of the static bag icon on the right.' },
    { name: 'height', type: 'number', default: '66', desc: 'Height of the button in points.' },
    { name: 'width', type: 'number | string', default: '"100%"', desc: 'Width of the button. Accepts numeric points or percentage string.' },
    { name: 'onAddToCart', type: '() => void', default: '—', desc: 'Callback fired when the swipe gesture is completed.' },
    { name: 'onBagPress', type: '() => void', default: '—', desc: 'Callback fired when the static bag icon is tapped.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="CartButton"
        description="React Native swipe-to-add button with a morphing slider and a static bag icon. Tap the bag icon to navigate to the cart screen."
        pkg="@otaga/rn-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#FCF5E5', minHeight: '100%', padding: '12px 14px' }}>
              {/* Section label */}
              <p style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>
                Cart Actions
              </p>

              {/* Product row */}
              <div style={{ background: '#fff', borderRadius: 12, padding: 12, marginBottom: 14, display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{ width: 42, height: 42, borderRadius: 8, background: '#EAF4EF', flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#111', margin: 0 }}>Canvas Tote</p>
                  <p style={{ fontSize: 11, color: '#888', margin: '2px 0 0' }}>$89.00</p>
                </div>
              </div>

              {/* Green variant */}
              <div style={{ marginBottom: 10 }}>
                <p style={{ fontSize: 10, color: '#aaa', marginBottom: 6 }}>Default</p>
                <CartButton
                  label="Add to cart"
                  color="#2a9d6a"
                  iconColor="#fff"
                  height={52}
                  width="100%"
                  onAddToCart={() => setCartCount(c => c + 1)}
                  onBagPress={() => {}}
                />
              </div>

              {/* Orange variant */}
              <div style={{ marginBottom: 14 }}>
                <p style={{ fontSize: 10, color: '#aaa', marginBottom: 6 }}>Alternate color</p>
                <CartButton
                  label="Add to cart"
                  color="#f97316"
                  iconColor="#fff"
                  height={52}
                  width="100%"
                  onAddToCart={() => setCartCount(c => c + 1)}
                  onBagPress={() => {}}
                />
              </div>

              {cartCount > 0 && (
                <div style={{ padding: '8px 12px', background: '#E8F5E9', borderRadius: 8, fontSize: 11, color: '#2a9d6a', fontWeight: 600 }}>
                  ✓ {cartCount} item{cartCount > 1 ? 's' : ''} added
                </div>
              )}

              <p style={{ fontSize: 10, color: '#bbb', marginTop: 12, textAlign: 'center' }}>
                ← Drag slider right to add · tap bag →
              </p>
            </div>
          </PhoneMockup>
        </div>
      </LivePreview>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}

