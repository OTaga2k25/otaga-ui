import { CSSProperties, useState } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { ExpandedTabs, type ExpandedTabItem } from '@otaga/web-ui-kit';

const HomeIcon   = ({ style }: { style?: CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, ...style }}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
const UserIcon   = ({ style }: { style?: CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, ...style }}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const MailIcon   = ({ style }: { style?: CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, ...style }}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const GearIcon   = ({ style }: { style?: CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, ...style }}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>;

const DEMO_TABS: ExpandedTabItem[] = [
  { title: 'Home',     icon: HomeIcon },
  { title: 'Profile',  icon: UserIcon },
  { title: 'Messages', icon: MailIcon },
  { type: 'separator' },
  { title: 'Settings', icon: GearIcon },
];

const SCREENS = ['Home', 'Profile', 'Messages', 'Settings'];

const code = `import { ExpandedTabs } from '@otaga/rn-ui-kit';
import { Text, View } from 'react-native';

const tabs = [
  { title: 'Home',     icon: <HomeIcon /> },
  { title: 'Profile',  icon: <UserIcon /> },
  { title: 'Messages', icon: <MailIcon /> },
  { type: 'separator' },
  { title: 'Settings', icon: <GearIcon /> },
];

function Example() {
  return (
    <View style={{ flex: 1 }}>
      {/* screen content */}
      <View style={{ position: 'absolute', bottom: 24, alignSelf: 'center' }}>
        <ExpandedTabs
          tabs={tabs}
          activeColor="#22c55e"
          onChange={(index) => console.log('selected', index)}
        />
      </View>
    </View>
  );
}`;

const props = [
  { name: 'tabs',        type: 'RNExpandedTabItem[]',       default: '—',         desc: 'Array of tab objects or separator objects. icon accepts any ReactNode — emoji, vector icons, or SVG.' },
  { name: 'activeColor', type: 'string',                    default: '"#22c55e"', desc: 'Color used for the active tab background and border tint.' },
  { name: 'style',       type: 'ViewStyle',                 default: '—',         desc: 'Custom styles on the outer container View.' },
  { name: 'onChange',    type: '(index: number) => void',   default: '—',         desc: 'Called when a tab is selected.' },
];

export function MobileExpandedTabsPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  const screenName = activeIdx !== null && activeIdx < SCREENS.length
    ? SCREENS[activeIdx]
    : 'Home';

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="ExpandedTabs"
        description="Animated pill tab bar for React Native. The active tab expands to show its label using Animated width + opacity transition. Icon accepts any ReactNode — use emoji, @expo/vector-icons, or custom SVG."
        pkg="@otaga/rn-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            {/* Screen content */}
            <div style={{
              minHeight: '100%',
              background: 'linear-gradient(160deg,#f0f4f8 0%,#e8eef5 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 80,
              gap: 12,
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                backgroundColor: '#22c55e22',
                border: '2px solid #22c55e55',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {activeIdx === 0 && <HomeIcon style={{ color: '#22c55e' }} />}
                {activeIdx === 1 && <UserIcon style={{ color: '#22c55e' }} />}
                {activeIdx === 2 && <MailIcon style={{ color: '#22c55e' }} />}
                {(activeIdx === null || (activeIdx !== 0 && activeIdx !== 1 && activeIdx !== 2)) && <GearIcon style={{ color: '#22c55e' }} />}
              </div>
              <p style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#1f2937' }}>{screenName}</p>
              <p style={{ margin: 0, fontSize: 12, color: '#6b7280' }}>Tap a tab below</p>
            </div>

            {/* Tab bar — fixed at bottom of phone screen */}
            <div style={{
              position: 'absolute',
              bottom: 28,
              left: 0, right: 0,
              display: 'flex',
              justifyContent: 'center',
            }}>
              <div style={{ zoom: 0.78 }}>
                <ExpandedTabs
                  tabs={DEMO_TABS}
                  activeColor="#22c55e"
                  onChange={setActiveIdx}
                />
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
