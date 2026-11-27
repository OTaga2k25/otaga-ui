import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { WelcomeBackForm } from '@otaga/web-ui-kit';

export function WebWelcomeBackFormPage() {
  const code = `import { WelcomeBackForm } from '@otaga/web-ui-kit';

<WelcomeBackForm
  onLogin={(email, password) => console.log(email, password)}
  onSignUp={() => console.log('Sign up')}
  onApple={() => console.log('Apple')}
  onGoogle={() => console.log('Google')}
  onForgotPassword={() => console.log('Forgot')}
/>`;

  const props = [
    { name: 'onLogin', type: '(email, password) => void', default: '—', desc: 'Called when the Log in button is clicked.' },
    { name: 'onSignUp', type: '() => void', default: '—', desc: 'Called when "Sign up" link is clicked.' },
    { name: 'onForgotPassword', type: '() => void', default: '—', desc: 'Called when "Forgot Password?" is clicked.' },
    { name: 'onApple', type: '() => void', default: '—', desc: 'Apple login callback.' },
    { name: 'onGoogle', type: '() => void', default: '—', desc: 'Google login callback.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader category="Web UI Kit" title="WelcomeBackForm" description="Clean white login form with teal submit button, Apple (black) and Google (multicolour) social sign-in buttons, and a sign-up link." pkg="@otaga/web-ui-kit" />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', justifyContent: 'center', padding: 24 }}>
          <WelcomeBackForm onLogin={(e,p) => console.log(e,p)} />
        </div>
      </LivePreview>
      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />
      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
