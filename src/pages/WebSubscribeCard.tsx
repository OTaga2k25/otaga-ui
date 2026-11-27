import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { SubscribeCard } from '@otaga/web-ui-kit';

export function WebSubscribeCardPage() {
  const code = `import { SubscribeCard } from '@otaga/web-ui-kit';

<SubscribeCard onSubmit={(email) => console.log(email)} />`;

  const props = [
    { name: 'onSubmit', type: '(email: string) => void', default: '—', desc: 'Called when the floating SUBMIT button is clicked.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader category="Web UI Kit" title="SubscribeCard" description="Compact email subscribe card with a floating deep-blue submit button that overflows below and right of the card. Triangle accent mirrors the CSS ::after pseudo-element." pkg="@otaga/web-ui-kit" />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 24px 56px' }}>
          <SubscribeCard onSubmit={e => console.log(e)} />
        </div>
      </LivePreview>
      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />
      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
