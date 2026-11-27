import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { LoginForm } from '@otaga/web-ui-kit';

export function WebLoginFormPage() {
  const code = `import { LoginForm } from '@otaga/web-ui-kit';

<LoginForm
  onSubmit={(email, password) => console.log(email, password)}
  onGoogle={() => console.log('Google')}
  onFacebook={() => console.log('Facebook')}
  onTwitter={() => console.log('Twitter')}
/>`;

  const props = [
    { name: 'onSubmit', type: '(email, password) => void', default: '—', desc: 'Called on form submission.' },
    { name: 'onGoogle', type: '() => void', default: '—', desc: 'Called when the Google social button is clicked.' },
    { name: 'onFacebook', type: '() => void', default: '—', desc: 'Called when the Facebook social button is clicked.' },
    { name: 'onTwitter', type: '() => void', default: '—', desc: 'Called when the Twitter/X social button is clicked.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader category="Web UI Kit" title="LoginForm" description="Neo-brutalist login form with email, password, and social login buttons (Twitter/X, Google, Facebook). Light-blue background with beige inputs." pkg="@otaga/web-ui-kit" />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', justifyContent: 'center', padding: 24 }}>
          <LoginForm onSubmit={(e,p) => console.log(e,p)} />
        </div>
      </LivePreview>
      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />
      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
