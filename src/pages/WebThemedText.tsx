import React, { CSSProperties, ReactNode } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { ThemedText } from '@otaga/web-ui-kit';

export function WebThemedTextPage() {
  const code = `import { ThemedText } from '@otaga/web-ui-kit';

function Example() {
  return (
    <div>
      <ThemedText type="title">Page Title</ThemedText>
      <ThemedText type="subtitle">Section subtitle</ThemedText>
      <ThemedText type="defaultSemiBold">Bold label text</ThemedText>
      <ThemedText type="default">Regular body copy goes here.</ThemedText>
      <ThemedText type="link">Click here to learn more</ThemedText>
    </div>
  );
}`;

  const props = [
    { name: 'type', type: '"default" | "title" | "subtitle" | "defaultSemiBold" | "link"', default: '"default"', desc: 'Typographic variant. Controls font size, weight, and color.' },
    { name: 'style', type: 'CSSProperties', default: '—', desc: 'Optional inline styles merged onto the rendered element.' },
    { name: 'children', type: 'ReactNode', default: '—', desc: 'Text content or nested elements. Required.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="ThemedText"
        description="Text element with 5 typographic variants that auto-adapts its color based on the OS color scheme. Use the type prop to quickly apply consistent text styles."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div
          style={{
            padding: 32,
            background: '#ffffff',
            borderRadius: 12,
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            maxWidth: 480,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
            <span style={{ fontSize: 11, color: '#999', width: 130, flexShrink: 0 }}>type="title"</span>
            <ThemedText type="title">Page Title</ThemedText>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
            <span style={{ fontSize: 11, color: '#999', width: 130, flexShrink: 0 }}>type="subtitle"</span>
            <ThemedText type="subtitle">Section subtitle</ThemedText>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
            <span style={{ fontSize: 11, color: '#999', width: 130, flexShrink: 0 }}>type="defaultSemiBold"</span>
            <ThemedText type="defaultSemiBold">Bold label text</ThemedText>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
            <span style={{ fontSize: 11, color: '#999', width: 130, flexShrink: 0 }}>type="default"</span>
            <ThemedText type="default">Regular body copy goes here.</ThemedText>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
            <span style={{ fontSize: 11, color: '#999', width: 130, flexShrink: 0 }}>type="link"</span>
            <ThemedText type="link">Click here to learn more</ThemedText>
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

