import { CSSProperties } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { Dock, type DockItem } from '@otaga/web-ui-kit'; // Web fallback for preview

const HomeIcon   = ({ style }: { style?: CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const EditIcon   = ({ style }: { style?: CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>;
const GithubIcon = ({ style }: { style?: CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const MailIcon   = ({ style }: { style?: CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;

const DEMO_ITEMS: DockItem[] = [
  { name: 'Home',     icon: HomeIcon    },
  { name: 'Edit',     icon: EditIcon    },
  { name: 'GitHub',   icon: GithubIcon  },
  { name: 'Mail',     icon: MailIcon    },
];

const code = `import { Dock } from '@otaga/rn-ui-kit';
import { Home, Github, Mail } from 'lucide-react-native';

const items = [
  { name: 'Home',   icon: <Home color="#52525b" size={24} /> },
  { name: 'GitHub', icon: <Github color="#52525b" size={24} /> },
  { name: 'Mail',   icon: <Mail color="#52525b" size={24} />,
    onPress: () => openMailDialog() },
];

function Example() {
  return <Dock items={items} iconSize={48} />;
}`;

const props = [
  { name: 'items',    type: 'DockItem[]', default: '—',    desc: 'Array of dock items. Each item needs name and icon ReactNode. onPress is optional.' },
  { name: 'iconSize', type: 'number',     default: '48',   desc: 'Base container size for each dock icon touch target.' },
  { name: 'style',    type: 'ViewStyle',  default: '—',    desc: 'Custom styles on the dock container View.' },
];

export function MobileDockPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="Dock"
        description="A touch-friendly floating icon dock for React Native. Icons shrink dynamically with a clean Animated.spring when pressed, replicating an interactive iOS-style application dock."
        pkg="@otaga/rn-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#f5f5f3', minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Note: Web component rendered in mockup for demonstration */}
              <Dock items={DEMO_ITEMS} iconSize={36} iconMagnification={36} />
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
