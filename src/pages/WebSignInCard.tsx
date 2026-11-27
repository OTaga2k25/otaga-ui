import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { SignInCard } from '@otaga/web-ui-kit';

export function WebSignInCardPage() {
  const code = `import { SignInCard } from '@otaga/web-ui-kit';

<SignInCard
  onSignIn={(email, password) => console.log(email, password)}
  onGoogle={() => console.log('Google')}
  onApple={() => console.log('Apple')}
  onTwitter={() => console.log('Twitter')}
  onForgotPassword={() => console.log('Forgot')}
  onAgreement={() => console.log('Agreement')}
/>`;

  const props = [
    { name: 'onSignIn', type: '(email, password) => void', default: '—', desc: 'Called when the Sign In button is clicked.' },
    { name: 'onForgotPassword', type: '() => void', default: '—', desc: 'Called when "Forgot Password?" is clicked.' },
    { name: 'onGoogle', type: '() => void', default: '—', desc: 'Google social sign-in callback.' },
    { name: 'onApple', type: '() => void', default: '—', desc: 'Apple social sign-in callback.' },
    { name: 'onTwitter', type: '() => void', default: '—', desc: 'Twitter/X social sign-in callback.' },
    { name: 'onAgreement', type: '() => void', default: '—', desc: 'Called when "Learn user licence agreement" is clicked.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader category="Web UI Kit" title="SignInCard" description="Clean sign-in card with a light gradient background, blue gradient submit button, Google/Apple/Twitter social buttons with hover scale effect, and licence agreement link." pkg="@otaga/web-ui-kit" />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', justifyContent: 'center', padding: 24 }}>
          <SignInCard onSignIn={(e,p) => console.log(e,p)} />
        </div>
      </LivePreview>
      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />
      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
