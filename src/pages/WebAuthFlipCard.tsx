import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { AuthFlipCard } from '@otaga/web-ui-kit';

export function WebAuthFlipCardPage() {
  const code = `import { AuthFlipCard } from '@otaga/web-ui-kit';

<AuthFlipCard
  onLogin={(email, password) => console.log(email, password)}
  onSignUp={(name, email, password) => console.log(name, email, password)}
/>`;

  const props = [
    { name: 'onLogin', type: '(email, password) => void', default: '—', desc: 'Called when the user submits the Log in form.' },
    { name: 'onSignUp', type: '(name, email, password) => void', default: '—', desc: 'Called when the user submits the Sign up form.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader category="Web UI Kit" title="AuthFlipCard" description="Toggle-driven 3D flip card with Log in on the front and Sign up on the back. Animates with CSS perspective and rotateY." pkg="@otaga/web-ui-kit" />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', justifyContent: 'center', padding: 24 }}>
          <AuthFlipCard onLogin={(e,p) => console.log(e,p)} onSignUp={(n,e,p) => console.log(n,e,p)} />
        </div>
      </LivePreview>
      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />
      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
