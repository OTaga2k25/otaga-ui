import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { LoginForm } from '@otaga/web-ui-kit';

export function MobileLoginFormPage() {
  const code = `import { LoginForm } from '@otaga/rn-ui-kit';

<LoginForm
  onSubmit={(email, password) => console.log(email, password)}
  onGoogle={() => console.log('Google')}
  onFacebook={() => console.log('Facebook')}
  onTwitter={() => console.log('Twitter')}
/>`;

  const props = [
    { name: 'onSubmit', type: '(email, password) => void', default: '—', desc: 'Called on form submission.' },
    { name: 'onGoogle', type: '() => void', default: '—', desc: 'Google social login callback.' },
    { name: 'onFacebook', type: '() => void', default: '—', desc: 'Facebook social login callback.' },
    { name: 'onTwitter', type: '() => void', default: '—', desc: 'Twitter/X social login callback.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader category="Mobile UI Kit" title="LoginForm" description="Neo-brutalist login form with lightblue background, beige inputs, 4px-offset shadow, and social login buttons." pkg="@otaga/rn-ui-kit" />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#f0f0f0', minHeight: '100%', padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
              <div style={{ zoom: 0.82 }}>
                <LoginForm onSubmit={(e,p) => console.log(e,p)} />
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
