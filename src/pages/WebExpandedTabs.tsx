import { CSSProperties } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { ExpandedTabs, type ExpandedTabItem } from '@otaga/web-ui-kit';

const HomeIcon = ({ style }: { style?: CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20, ...style }}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const UserIcon = ({ style }: { style?: CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20, ...style }}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const MailIcon = ({ style }: { style?: CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20, ...style }}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const SettingsIcon = ({ style }: { style?: CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20, ...style }}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const DEMO_TABS: ExpandedTabItem[] = [
  { title: 'Home',     icon: HomeIcon },
  { title: 'Profile',  icon: UserIcon },
  { title: 'Messages', icon: MailIcon },
  { type: 'separator' },
  { title: 'Settings', icon: SettingsIcon },
];

const code = `import { ExpandedTabs } from '@otaga/web-ui-kit';

const tabs = [
  { title: 'Home',     icon: HomeIcon },
  { title: 'Profile',  icon: UserIcon },
  { title: 'Messages', icon: MailIcon },
  { type: 'separator' },
  { title: 'Settings', icon: SettingsIcon },
];

function Example() {
  return (
    <ExpandedTabs
      tabs={tabs}
      activeColor="#22c55e"
      onChange={(index) => console.log('selected', index)}
    />
  );
}`;

const props = [
  { name: 'tabs',        type: 'ExpandedTabItem[]', default: '—',         desc: 'Array of tab objects or separator objects. Each tab needs title and icon. Required.' },
  { name: 'activeColor', type: 'string',            default: '"#22c55e"', desc: 'Color used for the active pill background and border tint.' },
  { name: 'style',       type: 'CSSProperties',     default: '—',         desc: 'Custom styles on the outer container.' },
  { name: 'onChange',    type: '(index: number | null) => void', default: '—', desc: 'Called when a tab is selected or deselected (click outside).' },
];

export function WebExpandedTabsPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="ExpandedTabs"
        description="Animated pill tab bar. The active tab expands to show its label with a sliding pill background. Click outside to deselect. Supports separators between tab groups."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 0' }}>
          <ExpandedTabs tabs={DEMO_TABS} activeColor="#22c55e" onChange={i => console.log('tab', i)} />
        </div>
      </LivePreview>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
