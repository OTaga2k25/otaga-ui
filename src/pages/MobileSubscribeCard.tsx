import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { SubscribeCard } from '@otaga/web-ui-kit';

export function MobileSubscribeCardPage() {
  const code = `import { SubscribeCard } from '@otaga/rn-ui-kit';

<SubscribeCard onSubmit={(email) => console.log(email)} />`;

  const props = [
    { name: 'onSubmit', type: '(email: string) => void', default: '—', desc: 'Called when the SUBMIT button is pressed.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader category="Mobile UI Kit" title="SubscribeCard" description="Compact email subscribe card with a floating submit button. Uses position:absolute for the button overflow and a triangle accent element." pkg="@otaga/rn-ui-kit" />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#f0f0f0', minHeight: '100%', padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
              <div style={{ zoom: 0.92 }}>
                <SubscribeCard onSubmit={e => console.log(e)} />
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
