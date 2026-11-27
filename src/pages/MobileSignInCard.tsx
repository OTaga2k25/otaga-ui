import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { SignInCard } from '@otaga/web-ui-kit';

export function MobileSignInCardPage() {
  const code = `import { SignInCard } from '@otaga/rn-ui-kit';

<SignInCard
  onSignIn={(email, password) => console.log(email, password)}
  onGoogle={() => console.log('Google')}
  onApple={() => console.log('Apple')}
  onTwitter={() => console.log('Twitter')}
/>`;

  const props = [
    { name: 'onSignIn', type: '(email, password) => void', default: '—', desc: 'Called when Sign In button is pressed.' },
    { name: 'onForgotPassword', type: '() => void', default: '—', desc: 'Called when "Forgot Password?" is pressed.' },
    { name: 'onGoogle', type: '() => void', default: '—', desc: 'Google social sign-in callback.' },
    { name: 'onApple', type: '() => void', default: '—', desc: 'Apple social sign-in callback.' },
    { name: 'onTwitter', type: '() => void', default: '—', desc: 'Twitter/X social sign-in callback.' },
    { name: 'onAgreement', type: '() => void', default: '—', desc: 'Licence agreement link callback.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader category="Mobile UI Kit" title="SignInCard" description="Light gradient sign-in card with a blue gradient submit button and Google/Apple/Twitter social buttons." pkg="@otaga/rn-ui-kit" />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#e8eef5', minHeight: '100%', padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
              <div style={{ zoom: 0.67 }}>
                <SignInCard onSignIn={(e,p) => console.log(e,p)} />
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
