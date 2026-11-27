import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { PurpleLoginForm } from '@otaga/web-ui-kit';

export function MobilePurpleLoginFormPage() {
  const code = `import { PurpleLoginForm } from '@otaga/rn-ui-kit';

<PurpleLoginForm
  onSubmit={(username, password) => console.log(username, password)}
  onForgotPassword={() => console.log('Forgot')}
/>`;

  const props = [
    { name: 'onSubmit', type: '(username, password) => void', default: '—', desc: 'Called when Submit is pressed.' },
    { name: 'onForgotPassword', type: '() => void', default: '—', desc: 'Called when "Forgot your password?" is pressed.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader category="Mobile UI Kit" title="PurpleLoginForm" description="Compact white login form with a rotated rgb(209,193,255) diamond accent behind the fields, bottom-border-only inputs, and a purple submit button." pkg="@otaga/rn-ui-kit" />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#f5f5f5', minHeight: '100%', padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
              <div style={{ zoom: 1 }}>
                <PurpleLoginForm onSubmit={(u,p) => console.log(u,p)} />
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
