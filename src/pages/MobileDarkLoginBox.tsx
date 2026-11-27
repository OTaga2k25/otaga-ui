import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { DarkLoginBox } from '@otaga/web-ui-kit';

export function MobileDarkLoginBoxPage() {
  const code = `import { DarkLoginBox } from '@otaga/rn-ui-kit';

<DarkLoginBox
  onSignIn={(email, password) => console.log(email, password)}
  onGoogleSignIn={() => console.log('Google')}
  onSignUp={() => console.log('Sign up')}
  onForgotPassword={() => console.log('Forgot')}
/>`;

  const props = [
    { name: 'onSignIn', type: '(email, password) => void', default: '—', desc: 'Called when Sign In is pressed.' },
    { name: 'onGoogleSignIn', type: '() => void', default: '—', desc: 'Called when Sign in with Google is pressed.' },
    { name: 'onSignUp', type: '() => void', default: '—', desc: 'Called when Sign up link is pressed.' },
    { name: 'onForgotPassword', type: '() => void', default: '—', desc: 'Called when Forgot password? is pressed.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader category="Mobile UI Kit" title="DarkLoginBox" description="Dark #272727 login card with a user logo mark, hover-glow buttons, and Google sign-in." pkg="@otaga/rn-ui-kit" />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup darkMode>
            <div style={{ background: '#1a1a1a', minHeight: '100%', padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
              <div style={{ zoom: 0.75 }}>
                <DarkLoginBox onSignIn={(e,p) => console.log(e,p)} />
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
