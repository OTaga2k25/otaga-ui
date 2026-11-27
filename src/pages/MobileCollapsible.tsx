import React from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { Collapsible, ThemedText } from '@otaga/web-ui-kit';

export function MobileCollapsiblePage() {
  const code = `import { Collapsible } from '@otaga/rn-ui-kit';
// Uses React Native Animated for smooth chevron rotation
import { View, Text, StyleSheet } from 'react-native';

export default function Example() {
  return (
    <View style={styles.container}>
      <Collapsible title="Getting started">
        <Text style={styles.body}>
          Install the package and wrap your app in the ThemeProvider.
        </Text>
      </Collapsible>

      <Collapsible title="How does animation work?">
        <Text style={styles.body}>
          The chevron rotation uses Animated.timing with an easing curve,
          and the content uses LayoutAnimation for a native height transition.
        </Text>
      </Collapsible>

      <Collapsible title="Can I control state externally?">
        <Text style={styles.body}>
          Each Collapsible manages its own open/closed state independently.
        </Text>
      </Collapsible>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 8, backgroundColor: '#FCF5E5' },
  body:      { fontSize: 14, color: '#555', lineHeight: 20 },
});`;

  const props = [
    { name: 'title', type: 'string', default: '—', desc: 'Header text displayed in the touchable trigger row. Required.' },
    { name: 'children', type: 'ReactNode', default: '—', desc: 'Content revealed when the section is expanded. Required.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="Collapsible"
        description="React Native accordion section. Uses Animated for a smooth chevron rotation and LayoutAnimation for native height transitions without JS-thread overhead."
        pkg="@otaga/rn-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#FCF5E5', minHeight: '100%', padding: 16 }}>
              <ThemedText type="defaultSemiBold" style={{ marginBottom: 12 }}>FAQ</ThemedText>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Collapsible title="Getting started">
                  <div style={{ padding: '8px 0', fontSize: 13, color: '#555', lineHeight: 1.5 }}>
                    Install the package and wrap your app in the ThemeProvider.
                  </div>
                </Collapsible>

                <Collapsible title="How does animation work?">
                  <div style={{ padding: '8px 0', fontSize: 13, color: '#555', lineHeight: 1.5 }}>
                    The chevron rotation uses Animated.timing and the content uses LayoutAnimation for native height transitions.
                  </div>
                </Collapsible>

                <Collapsible title="Can I control state externally?">
                  <div style={{ padding: '8px 0', fontSize: 13, color: '#555', lineHeight: 1.5 }}>
                    Each Collapsible manages its own open/closed state independently.
                  </div>
                </Collapsible>
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

