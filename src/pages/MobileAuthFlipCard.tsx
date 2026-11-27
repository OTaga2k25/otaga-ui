import { useState } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { AuthFlipCard } from '@otaga/web-ui-kit';

export function MobileAuthFlipCardPage() {
  const [open, setOpen] = useState(false);

  const code = `import { AuthFlipCard } from '@otaga/rn-ui-kit';

<AuthFlipCard
  onLogin={(email, password) => console.log(email, password)}
  onSignUp={(name, email, password) => console.log(name, email, password)}
/>`;

  const props = [
    { name: 'onLogin', type: '(email, password) => void', default: '—', desc: 'Called when the Log in form is submitted.' },
    { name: 'onSignUp', type: '(name, email, password) => void', default: '—', desc: 'Called when the Sign up form is submitted.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader category="Mobile UI Kit" title="AuthFlipCard" description="Toggle-driven 3D flip card. Uses Animated.spring for rotation with an opacity crossfade for Android backface-visibility compatibility." pkg="@otaga/rn-ui-kit" />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#f5f5f5', minHeight: '100%', padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
              <p style={{ fontSize: 11, color: '#888', margin: '0 0 8px' }}>Toggle to flip the card</p>
              <div style={{ zoom: 0.72 }}>
                <AuthFlipCard onLogin={(e,p) => console.log(e,p)} onSignUp={(n,e,p) => console.log(n,e,p)} />
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
