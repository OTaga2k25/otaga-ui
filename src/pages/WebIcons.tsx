import React, { CSSProperties } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { IconGallery } from '../components/IconGallery';

export function WebIconsPage() {
  const code = `import { Icon } from '@otaga/web-ui-kit';
import type { IconName } from '@otaga/web-ui-kit';

function Example() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Icon name="house"          size={24} color="#2a9d6a" />
      <Icon name="heart"          size={24} color="#ef4444" />
      <Icon name="magnifyingglass" size={24} color="#3b82f6" />
      <Icon name="person"         size={24} color="#8b5cf6" />
      <Icon name="gearshape"      size={24} color="#f97316" />
    </div>
  );
}`;

  const props = [
    { name: 'name', type: 'IconName', default: '—', desc: 'SF Symbol-style icon name. Browse all 80+ names in the gallery above. Required.' },
    { name: 'size', type: 'number', default: '24', desc: 'Width and height of the rendered SVG in pixels.' },
    { name: 'color', type: 'string', default: '"currentColor"', desc: 'Fill/stroke color of the icon. Inherits CSS color by default.' },
    { name: 'style', type: 'CSSProperties', default: '—', desc: 'Optional inline styles applied to the SVG element.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="Icon"
        description="80+ SVG icons using SF Symbol-style names. Click any icon in the gallery to copy its name to the clipboard."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ padding: 16 }}>
          <IconGallery />
        </div>
      </LivePreview>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}

