import React from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { ThemedText } from '@otaga/web-ui-kit';

export function MobileThemedTextPage() {
  const code = `import { ThemedText } from '@otaga/rn-ui-kit';
import { View, StyleSheet } from 'react-native';

export default function Example() {
  return (
    <View style={styles.container}>
      <ThemedText type="title">Page Title</ThemedText>
      <ThemedText type="subtitle">Section subtitle</ThemedText>
      <ThemedText type="defaultSemiBold">Bold label text</ThemedText>
      <ThemedText type="default">Regular body copy goes here.</ThemedText>
      <ThemedText type="link">Click here to learn more</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
    backgroundColor: '#FCF5E5',
  },
});`;

  const props = [
    { name: 'type', type: '"default" | "title" | "subtitle" | "defaultSemiBold" | "link"', default: '"default"', desc: 'Typographic variant controlling font size, weight, and color.' },
    { name: 'style', type: 'StyleProp<TextStyle>', default: '—', desc: 'Additional React Native TextStyle merged onto the Text element.' },
    { name: 'children', type: 'ReactNode', default: '—', desc: 'Text content to display. Required.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="ThemedText"
        description="React Native Text component with 5 typographic variants. Automatically adapts color for light and dark mode using the OS color scheme."
        pkg="@otaga/rn-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#FCF5E5', minHeight: '100%', padding: 16 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <ThemedText type="title">Page Title</ThemedText>
                <ThemedText type="subtitle">Section subtitle</ThemedText>
                <ThemedText type="defaultSemiBold">Bold label text</ThemedText>
                <ThemedText type="default">Regular body copy goes here.</ThemedText>
                <ThemedText type="link">Click here to learn more</ThemedText>
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

