import React, { useState } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { BuyButton, ThemedText } from '@otaga/web-ui-kit';

export function MobileBuyButtonPage() {
  const [lastAction, setLastAction] = useState<string | null>(null);

  const code = `import { BuyButton } from '@otaga/rn-ui-kit';
// Uses React Native Animated + PanResponder for 60fps gesture tracking
import { View, StyleSheet } from 'react-native';

export default function Example() {
  return (
    <View style={styles.container}>
      <BuyButton
        label="Buy Now"
        color="#2a9d6a"
        height={56}
        width="100%"
        onBuy={() => console.log('Purchase confirmed!')}
      />
    </View>
  );
}

// Note: The RN implementation uses PanResponder to track the drag
// gesture on the native thread, and Animated.timing to spring the
// circle back if the user releases before reaching the end.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FCF5E5',
  },
});`;

  const props = [
    { name: 'label', type: 'string', default: '"Buy Now"', desc: 'Text displayed inside the slider track.' },
    { name: 'color', type: 'string', default: '"#000"', desc: 'Background color of the sliding circle and track fill.' },
    { name: 'height', type: 'number', default: '62', desc: 'Height of the button in points.' },
    { name: 'width', type: 'number | string', default: '"100%"', desc: 'Width of the button. Accepts numeric points or percentage string.' },
    { name: 'onBuy', type: '() => void', default: '—', desc: 'Callback fired when the user completes the swipe gesture.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="BuyButton"
        description="React Native swipe-to-confirm purchase button. Uses Animated + PanResponder for 60fps native gesture tracking. The circle springs back if released before reaching the end."
        pkg="@otaga/rn-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#FCF5E5', minHeight: '100%', padding: '12px 14px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>
                Purchase
              </p>

              {/* Product card */}
              <div style={{ background: '#fff', borderRadius: 12, padding: 14, marginBottom: 16 }}>
                <div style={{ width: '100%', height: 80, borderRadius: 8, background: '#EAF4EF', marginBottom: 10 }} />
                <p style={{ fontSize: 13, fontWeight: 700, color: '#111', margin: '0 0 2px' }}>Canvas Tote Bag</p>
                <p style={{ fontSize: 13, color: '#2a9d6a', fontWeight: 700, margin: 0 }}>$89.00</p>
              </div>

              {/* Green */}
              <div style={{ marginBottom: 10 }}>
                <p style={{ fontSize: 10, color: '#aaa', marginBottom: 6 }}>Primary</p>
                <BuyButton
                  label="Buy Now"
                  color="#2a9d6a"
                  height={50}
                  width="100%"
                  onBuy={() => setLastAction('Purchase confirmed! ✓')}
                />
              </div>

              {/* Blue */}
              <div style={{ marginBottom: 14 }}>
                <p style={{ fontSize: 10, color: '#aaa', marginBottom: 6 }}>Alternate</p>
                <BuyButton
                  label="Checkout"
                  color="#3b82f6"
                  height={50}
                  width="100%"
                  onBuy={() => setLastAction('Order placed! ✓')}
                />
              </div>

              {lastAction && (
                <div style={{ padding: '8px 12px', background: '#E8F5E9', borderRadius: 8, fontSize: 11, color: '#2a9d6a', fontWeight: 600 }}>
                  {lastAction}
                </div>
              )}

              <p style={{ fontSize: 10, color: '#bbb', marginTop: 12, textAlign: 'center' }}>
                ← Drag the circle right to confirm
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

