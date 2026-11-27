import { useState } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { ThemedText } from '@otaga/web-ui-kit';

const SHEET_H = 240;

export function MobileBottomSheetPage() {
  const [visible, setVisible] = useState(true);

  const code = `import { BottomSheet } from '@otaga/rn-ui-kit';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Example() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(true)} style={styles.btn}>
        <Text style={styles.btnText}>Open Sheet</Text>
      </TouchableOpacity>

      <BottomSheet
        visible={visible}
        onClose={() => setVisible(false)}
        snapPoints={[280, 520]}
        backgroundColor="#ffffff"
        persistent={false}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Sheet Content</Text>
          <Text style={styles.body}>
            Drag the notch up to snap to 520pt. Drag down to snap to 280pt or dismiss.
          </Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FCF5E5' },
  btn:       { backgroundColor: '#2a9d6a', padding: 14, borderRadius: 10, alignItems: 'center' },
  btnText:   { color: '#fff', fontWeight: '600' },
  content:   { padding: 4 },
  title:     { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  body:      { fontSize: 14, color: '#555', lineHeight: 22 },
});`;

  const props = [
    { name: 'visible', type: 'boolean', default: 'true', desc: 'Controls whether the sheet is rendered and visible.' },
    { name: 'onClose', type: '() => void', default: '—', desc: 'Callback fired when the sheet is dismissed by dragging the notch past the threshold.' },
    { name: 'children', type: 'ReactNode', default: '—', desc: 'Content rendered inside the sheet surface. Required.' },
    { name: 'snapPoints', type: 'number[]', default: '[300, 520]', desc: 'Snap-point heights in points. The sheet snaps to the nearest point on drag release.' },
    { name: 'backgroundColor', type: 'string', default: '—', desc: 'Background color of the sheet surface and notch pill.' },
    { name: 'persistent', type: 'boolean', default: 'false', desc: 'When true, prevents the sheet from being dismissed by dragging down.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="BottomSheet"
        description="React Native draggable bottom sheet with snap points. Features a floating notch pill handle above the sheet surface. Uses PanResponder to track drag velocity and Animated.spring for a natural snap feel."
        pkg="@otaga/rn-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup
            overlay={
              visible ? (
                <div style={{ position: 'absolute', inset: 0, zIndex: 20, overflow: 'hidden', borderRadius: 42 }}>
                  {/* backdrop — rn-ui-kit: rgba(0,0,0,0.5) absoluteFill */}
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />

                  {/* Sheet — mirrors rn-ui-kit Animated.View:
                      borderTopRadius:32, paddingHorizontal:20,
                      elevation:25 → boxShadow, overflow:visible so notch can extend above */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    height: SHEET_H,
                    backgroundColor: '#ffffff',
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 32,
                    boxShadow: '0 -10px 20px rgba(0,0,0,0.15)',
                    paddingLeft: 20,
                    paddingRight: 20,
                    overflow: 'visible',
                    zIndex: 1,
                  }}>
                    {/* notchContainer — rn-ui-kit: width:'100%', alignItems:'center', marginTop:-1, paddingBottom:20 */}
                    <div style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: -1,
                      paddingBottom: 20,
                    }}>
                      {/* notch — rn-ui-kit: width:100, height:30, borderBottomRadius:20, elevation:2 */}
                      <div style={{
                        width: 100,
                        height: 30,
                        backgroundColor: '#ffffff',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                        {/* handle — rn-ui-kit: width:40, height:4, borderRadius:2 */}
                        <div style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: 'rgba(0,0,0,0.15)' }} />
                      </div>
                    </div>

                    {/* content — rn-ui-kit: flex:1, paddingHorizontal inherited from sheet */}
                    <div>
                      <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 12, marginTop: 0 }}>Sheet Content</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {['Option A', 'Option B', 'Option C'].map(opt => (
                          <div key={opt} style={{
                            padding: '9px 12px',
                            background: 'rgba(0,0,0,0.04)',
                            borderRadius: 10,
                            fontSize: 12,
                          }}>{opt}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            }
          >
            <div style={{ background: '#FCF5E5', minHeight: '100%', padding: 16 }}>
              <ThemedText type="defaultSemiBold" style={{ marginBottom: 8 }}>Product Details</ThemedText>
              <p style={{ fontSize: 11, color: '#888', marginBottom: 16 }}>Page content sits behind the sheet.</p>
              <button onClick={() => setVisible(v => !v)} style={{
                padding: '8px 16px', background: '#2a9d6a',
                color: '#fff', border: 'none', borderRadius: 8,
                fontSize: 12, fontWeight: 600, cursor: 'pointer',
              }}>
                {visible ? 'Close Sheet' : 'Open Sheet'}
              </button>
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
