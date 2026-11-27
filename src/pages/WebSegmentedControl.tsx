import React, { useState, CSSProperties } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { SegmentedControl } from '@otaga/web-ui-kit';

export function WebSegmentedControlPage() {
  const [selected1, setSelected1] = useState('Day');
  const [selected2, setSelected2] = useState('Small');

  const code = `import { SegmentedControl } from '@otaga/web-ui-kit';
import { useState } from 'react';

function Example() {
  const [selected, setSelected] = useState('Day');

  return (
    <SegmentedControl
      options={['Day', 'Week', 'Month', 'Year']}
      selectedOption={selected}
      onSelect={setSelected}
      activeColor="#2a9d6a"
    />
  );
}`;

  const props = [
    { name: 'options', type: 'string[]', default: '—', desc: 'Array of option labels to display as segments. Required.' },
    { name: 'selectedOption', type: 'string', default: '—', desc: 'Currently active option value. Must match one of the options array items. Required.' },
    { name: 'onSelect', type: '(value: string) => void', default: '—', desc: 'Callback fired when the user taps a segment. Required.' },
    { name: 'activeColor', type: 'string', default: '"#000"', desc: 'Background color of the active pill highlight.' },
    { name: 'style', type: 'CSSProperties', default: '—', desc: 'Optional inline styles applied to the root container.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="SegmentedControl"
        description="Pill-shaped tab switcher with an animated active pill highlight. Provides a compact alternative to tabs for switching between a small set of options."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, padding: 24 }}>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 10 }}>
              Time range — active: <strong>{selected1}</strong>
            </div>
            <SegmentedControl
              options={['Day', 'Week', 'Month', 'Year']}
              selectedOption={selected1}
              onSelect={setSelected1}
              activeColor="#2a9d6a"
            />
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 10 }}>
              Size picker — active: <strong>{selected2}</strong>
            </div>
            <SegmentedControl
              options={['Small', 'Medium', 'Large', 'XL']}
              selectedOption={selected2}
              onSelect={setSelected2}
              activeColor="#8b5cf6"
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

