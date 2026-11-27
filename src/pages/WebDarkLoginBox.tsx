import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { DarkLoginBox } from '@otaga/web-ui-kit';

export function WebDarkLoginBoxPage() {
  const code = `import { DarkLoginBox } from '@otaga/web-ui-kit';

<DarkLoginBox
  onSignIn={(email, password) => console.log(email, password)}
  onGoogleSignIn={() => console.log('Google')}
  onSignUp={() => console.log('Sign up')}
  onForgotPassword={() => console.log('Forgot')}
/>`;

  const props = [
    { name: 'onSignIn', type: '(email, password) => void', default: '—', desc: 'Called when the Sign In button is clicked.' },
    { name: 'onGoogleSignIn', type: '() => void', default: '—', desc: 'Called when "Sign in with Google" is clicked.' },
    { name: 'onSignUp', type: '() => void', default: '—', desc: 'Called when "Sign up, it\'s free!" is clicked.' },
    { name: 'onForgotPassword', type: '() => void', default: '—', desc: 'Called when "Forgot password?" is clicked.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader category="Web UI Kit" title="DarkLoginBox" description="Dark #272727 login card with a CSS conic-gradient spinning border animation, user logo mark built from CSS shapes, and hover-glow buttons." pkg="@otaga/web-ui-kit" />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', justifyContent: 'center', padding: 24 }}>
          <DarkLoginBox onSignIn={(e,p) => console.log(e,p)} />
        </div>
      </LivePreview>
      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />
      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
