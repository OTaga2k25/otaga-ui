import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { WelcomeBackForm } from '@otaga/web-ui-kit';

export function MobileWelcomeBackFormPage() {
  const code = `import { WelcomeBackForm } from '@otaga/rn-ui-kit';

<WelcomeBackForm
  onLogin={(email, password) => console.log(email, password)}
  onSignUp={() => console.log('Sign up')}
  onApple={() => console.log('Apple')}
  onGoogle={() => console.log('Google')}
/>`;

  const props = [
    { name: 'onLogin', type: '(email, password) => void', default: '—', desc: 'Called when Log in is pressed.' },
    { name: 'onSignUp', type: '() => void', default: '—', desc: 'Called when the Sign up link is pressed.' },
    { name: 'onForgotPassword', type: '() => void', default: '—', desc: 'Called when Forgot Password? is pressed.' },
    { name: 'onApple', type: '() => void', default: '—', desc: 'Apple login callback.' },
    { name: 'onGoogle', type: '() => void', default: '—', desc: 'Google login callback.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader category="Mobile UI Kit" title="WelcomeBackForm" description="Clean white login form with teal submit button and Apple/Google social login buttons." pkg="@otaga/rn-ui-kit" />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#f5f5f5', minHeight: '100%', padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
              <div style={{ zoom: 0.67 }}>
                <WelcomeBackForm onLogin={(e,p) => console.log(e,p)} />
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
