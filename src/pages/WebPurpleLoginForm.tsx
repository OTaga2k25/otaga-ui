import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PurpleLoginForm } from '@otaga/web-ui-kit';

export function WebPurpleLoginFormPage() {
  const code = `import { PurpleLoginForm } from '@otaga/web-ui-kit';

<PurpleLoginForm
  onSubmit={(username, password) => console.log(username, password)}
  onForgotPassword={() => console.log('Forgot')}
/>`;

  const props = [
    { name: 'onSubmit', type: '(username, password) => void', default: '—', desc: 'Called when the Submit button is clicked.' },
    { name: 'onForgotPassword', type: '() => void', default: '—', desc: 'Called when "Forgot your password?" is clicked.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader category="Web UI Kit" title="PurpleLoginForm" description="Compact white login form with a rotated purple diamond accent behind the inputs, SVG username/lock icons, purple submit button, and a forgot-password link." pkg="@otaga/web-ui-kit" />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', justifyContent: 'center', padding: 24 }}>
          <PurpleLoginForm onSubmit={(u,p) => console.log(u,p)} />
        </div>
      </LivePreview>
      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />
      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
