import React, { CSSProperties, ReactNode } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { ThemedView } from '@otaga/web-ui-kit';

export function WebThemedViewPage() {
  const code = `import { ThemedView } from '@otaga/web-ui-kit';

function Example() {
  return (
    <ThemedView
      lightColor="#f0fdf4"
      darkColor="#052e16"
      style={{ padding: 24, borderRadius: 12 }}
    >
      <p>This surface adapts to the OS color scheme automatically.</p>
    </ThemedView>
  );
}`;

  const props = [
    { name: 'lightColor', type: 'string', default: 'Colors.light.background', desc: 'Background color used in light mode.' },
    { name: 'darkColor', type: 'string', default: 'Colors.dark.background', desc: 'Background color used in dark mode.' },
    { name: 'style', type: 'CSSProperties', default: '—', desc: 'Additional inline styles applied to the wrapping div.' },
    { name: 'children', type: 'ReactNode', default: '—', desc: 'Content rendered inside the themed surface.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="ThemedView"
        description="A div whose background automatically switches between lightColor and darkColor based on the OS color scheme. Use it as a surface container that respects user theme preferences."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 24 }}>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 4 }}>
            Each view shows its light / dark color pair — the active one depends on your OS theme.
          </div>

          <ThemedView
            lightColor="#f0fdf4"
            darkColor="#052e16"
            style={{ padding: 20, borderRadius: 12, border: '1px solid var(--border)' }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Green Surface</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
              light: <code className="mono">#f0fdf4</code> · dark: <code className="mono">#052e16</code>
            </div>
          </ThemedView>

          <ThemedView
            lightColor="#eff6ff"
            darkColor="#1e3a5f"
            style={{ padding: 20, borderRadius: 12, border: '1px solid var(--border)' }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Blue Surface</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
              light: <code className="mono">#eff6ff</code> · dark: <code className="mono">#1e3a5f</code>
            </div>
          </ThemedView>

          <ThemedView
            lightColor="#fdf4ff"
            darkColor="#3b0764"
            style={{ padding: 20, borderRadius: 12, border: '1px solid var(--border)' }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Purple Surface</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
              light: <code className="mono">#fdf4ff</code> · dark: <code className="mono">#3b0764</code>
            </div>
          </ThemedView>
        </div>
      </LivePreview>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}

