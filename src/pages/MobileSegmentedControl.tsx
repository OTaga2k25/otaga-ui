import React, { useState } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { SegmentedControl, ThemedText } from '@otaga/web-ui-kit';

export function MobileSegmentedControlPage() {
  const [selected1, setSelected1] = useState('Week');
  const [selected2, setSelected2] = useState('M');

  const code = `import { SegmentedControl } from '@otaga/rn-ui-kit';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

export default function Example() {
  const [selected, setSelected] = useState('Week');

  return (
    <View style={styles.container}>
      <SegmentedControl
        options={['Day', 'Week', 'Month', 'Year']}
        selectedOption={selected}
        onSelect={setSelected}
        activeColor="#2a9d6a"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FCF5E5',
    justifyContent: 'center',
  },
});`;

  const props = [
    { name: 'options', type: 'string[]', default: '—', desc: 'Array of option labels. Required.' },
    { name: 'selectedOption', type: 'string', default: '—', desc: 'Currently active option. Must match an item in options. Required.' },
    { name: 'onSelect', type: '(value: string) => void', default: '—', desc: 'Callback fired when a segment is pressed. Required.' },
    { name: 'activeColor', type: 'string', default: '"#000"', desc: 'Background color of the active pill.' },
    { name: 'style', type: 'StyleProp<ViewStyle>', default: '—', desc: 'Additional React Native ViewStyle for the container.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="SegmentedControl"
        description="React Native pill-shaped tab switcher with animated active pill highlight. Ideal for toggling between a small set of options within a screen."
        pkg="@otaga/rn-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#FCF5E5', minHeight: '100%', padding: 16 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div>
                  <ThemedText type="defaultSemiBold" style={{ marginBottom: 10 }}>
                    Time range
                  </ThemedText>
                  <SegmentedControl
                    options={['Day', 'Week', 'Month', 'Year']}
                    selectedOption={selected1}
                    onSelect={setSelected1}
                    activeColor="#2a9d6a"
                  />
                </div>
                <div>
                  <ThemedText type="defaultSemiBold" style={{ marginBottom: 10 }}>
                    Size
                  </ThemedText>
                  <SegmentedControl
                    options={['S', 'M', 'L', 'XL']}
                    selectedOption={selected2}
                    onSelect={setSelected2}
                    activeColor="#3b82f6"
                  />
                </div>
              </div>
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

