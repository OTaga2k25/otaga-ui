import React, { ReactNode } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { Collapsible } from '@otaga/web-ui-kit';

export function WebCollapsiblePage() {
  const code = `import { Collapsible } from '@otaga/web-ui-kit';

function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Collapsible title="What is @otaga/web-ui-kit?">
        <p>A collection of polished, production-ready UI components for React web apps.</p>
      </Collapsible>

      <Collapsible title="How does the animation work?">
        <p>The content area uses a CSS max-height transition from 0 to its natural height,
           while a chevron icon rotates 180Â° to indicate the open state.</p>
      </Collapsible>

      <Collapsible title="Can I nest Collapsibles?">
        <p>Yes — each Collapsible manages its own open/closed state independently.</p>
      </Collapsible>
    </div>
  );
}`;

  const props = [
    { name: 'title', type: 'string', default: '—', desc: 'Header text displayed in the clickable trigger row. Required.' },
    { name: 'children', type: 'ReactNode', default: '—', desc: 'Content revealed when the section is expanded. Required.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="Collapsible"
        description="Accordion section with a rotating chevron and a smooth CSS max-height transition. Each instance manages its own open/closed state independently."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ padding: 24, maxWidth: 520, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Collapsible title="What is @otaga/web-ui-kit?">
            <div style={{ padding: '8px 0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              A collection of polished, production-ready UI components for React web apps —
              including swipe buttons, segmented controls, bottom sheets, sidebars, and more.
            </div>
          </Collapsible>

          <Collapsible title="How does the animation work?">
            <div style={{ padding: '8px 0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              The content area uses a CSS <code className="mono">max-height</code> transition from{' '}
              <code className="mono">0</code> to its natural height, while a chevron icon rotates
              180Â° to indicate the open state. No JavaScript animation frames are used.
            </div>
          </Collapsible>

          <Collapsible title="Can I nest Collapsibles or control state externally?">
            <div style={{ padding: '8px 0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Yes — each Collapsible manages its own open/closed state independently, so multiple
              instances can coexist on the same page without any coordination logic.
            </div>
          </Collapsible>
        </div>
      </LivePreview>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}

