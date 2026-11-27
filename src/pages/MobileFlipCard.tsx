import { useState } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { ThemedText } from '@otaga/web-ui-kit';
import { FlipCard } from '@otaga/web-ui-kit';

export function MobileFlipCardPage() {
  const [flippedA, setFlippedA] = useState(false);
  const [flippedB, setFlippedB] = useState(false);

  const CARD_W = 118;
  const CARD_H = 175;

  const code = `import { FlipCard } from '@otaga/rn-ui-kit';
import { View, Text, Image } from 'react-native';

export default function Example() {
  return (
    <View style={{ flexDirection: 'row', gap: 16, padding: 20 }}>
      <FlipCard
        width={148}
        height={210}
        front={
          <View style={{ alignItems: 'center', gap: 8, paddingHorizontal: 12 }}>
            <Image
              source={{ uri: 'https://picsum.photos/80' }}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
            <Text style={{ color: 'coral', fontWeight: '700', fontSize: 14 }}>Product A</Text>
            <Text style={{ color: 'coral', fontSize: 12 }}>$29.99</Text>
          </View>
        }
        back={
          <View style={{ alignItems: 'center', gap: 8, paddingHorizontal: 12 }}>
            <Text style={{ color: '#fff', fontWeight: '700', fontSize: 13 }}>Details</Text>
            <Text style={{ color: '#fff', fontSize: 11, textAlign: 'center' }}>
              Premium quality with fast shipping.
            </Text>
          </View>
        }
      />
    </View>
  );
}`;

  const props = [
    { name: 'front', type: 'ReactNode', default: '—', desc: 'Content on the front face. Accepts View, Image, Text, TextInput — any React Native component. Required.' },
    { name: 'back', type: 'ReactNode', default: '—', desc: 'Content on the back face. Same flexibility as front. Required.' },
    { name: 'width', type: 'number', default: '190', desc: 'Width of the card in points.' },
    { name: 'height', type: 'number', default: '254', desc: 'Height of the card in points.' },
    { name: 'frontStyle', type: 'ViewStyle', default: '—', desc: 'Override styles for the front face (backgroundColor, borderColor, etc.).' },
    { name: 'backStyle', type: 'ViewStyle', default: '—', desc: 'Override styles for the back face (backgroundColor, borderColor, etc.).' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="FlipCard"
        description="3D flip card for React Native. Tap to flip using Animated.spring with an opacity crossfade for Android compatibility. Accepts any React Native content on both faces."
        pkg="@otaga/rn-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#FCF5E5', minHeight: '100%', padding: 16 }}>
              <ThemedText type="defaultSemiBold" style={{ marginBottom: 16 }}>FlipCard — tap to flip</ThemedText>

              {/* Two cards in a row */}
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 20 }}>
                {/* Card A */}
                <div
                  style={{ width: CARD_W, height: CARD_H, perspective: 800, cursor: 'pointer', flexShrink: 0 }}
                  onClick={() => setFlippedA(f => !f)}
                >
                  <div style={{
                    position: 'relative', width: '100%', height: '100%',
                    transition: 'transform 0.6s', transformStyle: 'preserve-3d',
                    transform: flippedA ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}>
                    <div style={{
                      position: 'absolute', width: '100%', height: '100%',
                      backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
                      background: '#FFE4C4', border: '1px solid coral', borderRadius: 12,
                      boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      justifyContent: 'center', gap: 6, padding: '0 10px',
                    }}>
                      <img src="https://picsum.photos/60" style={{ width: 48, height: 48, borderRadius: '50%' }} />
                      <p style={{ fontWeight: 700, fontSize: 12, color: 'coral', margin: 0 }}>Product A</p>
                      <p style={{ fontSize: 11, color: 'coral', margin: 0 }}>$29.99</p>
                      <p style={{ fontSize: 9, color: '#c87060', margin: 0 }}>Tap to flip</p>
                    </div>
                    <div style={{
                      position: 'absolute', width: '100%', height: '100%',
                      backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
                      background: 'coral', border: '1px solid coral', borderRadius: 12,
                      boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      justifyContent: 'center', gap: 6, padding: '0 10px',
                      transform: 'rotateY(180deg)',
                    }}>
                      <p style={{ fontWeight: 700, fontSize: 12, color: '#fff', margin: 0 }}>Details</p>
                      <p style={{ fontSize: 10, color: '#fff', margin: 0, textAlign: 'center', lineHeight: 1.5 }}>
                        Premium quality with fast shipping.
                      </p>
                      <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', margin: 0 }}>Tap to flip back</p>
                    </div>
                  </div>
                </div>

                {/* Card B */}
                <div
                  style={{ width: CARD_W, height: CARD_H, perspective: 800, cursor: 'pointer', flexShrink: 0 }}
                  onClick={() => setFlippedB(f => !f)}
                >
                  <div style={{
                    position: 'relative', width: '100%', height: '100%',
                    transition: 'transform 0.6s', transformStyle: 'preserve-3d',
                    transform: flippedB ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}>
                    <div style={{
                      position: 'absolute', width: '100%', height: '100%',
                      backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
                      background: '#FFE4C4', border: '1px solid coral', borderRadius: 12,
                      boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      justifyContent: 'center', gap: 6, padding: '0 10px',
                    }}>
                      <img src="https://picsum.photos/61" style={{ width: 48, height: 48, borderRadius: '50%' }} />
                      <p style={{ fontWeight: 700, fontSize: 12, color: 'coral', margin: 0 }}>Product B</p>
                      <p style={{ fontSize: 11, color: 'coral', margin: 0 }}>$49.99</p>
                      <p style={{ fontSize: 9, color: '#c87060', margin: 0 }}>Tap to flip</p>
                    </div>
                    <div style={{
                      position: 'absolute', width: '100%', height: '100%',
                      backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
                      background: 'coral', border: '1px solid coral', borderRadius: 12,
                      boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      justifyContent: 'center', gap: 6, padding: '0 10px',
                      transform: 'rotateY(180deg)',
                    }}>
                      <p style={{ fontWeight: 700, fontSize: 12, color: '#fff', margin: 0 }}>Details</p>
                      <p style={{ fontSize: 10, color: '#fff', margin: 0, textAlign: 'center', lineHeight: 1.5 }}>
                        Limited edition. Only 5 left in stock!
                      </p>
                      <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', margin: 0 }}>Tap to flip back</p>
                    </div>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: 10, color: '#888', textAlign: 'center', margin: 0 }}>
                Uses Animated.spring + opacity crossfade
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
