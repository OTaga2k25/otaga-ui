import React, { useState } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { Icon } from '@otaga/web-ui-kit';
import type { IconName } from '@otaga/web-ui-kit';

export function MobileBottomBarPage() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home',    label: 'Home',    icon: 'house.fill' },
    { id: 'search',  label: 'Search',  icon: 'magnifyingglass' },
    { id: 'profile', label: 'Profile', icon: 'person.fill' },
  ];

  const code = `import { BottomBar } from '@otaga/rn-ui-kit';
// Renders position:'absolute', bottom: 30 on native
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

const tabs = [
  { id: 'home',    label: 'Home',    icon: 'house' },        // SF Symbol on iOS
  { id: 'search',  label: 'Search',  icon: 'search' },       // Material on Android
  { id: 'profile', label: 'Profile', icon: 'person' },
];

export default function Example() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <View style={styles.container}>
      {/* Screen content */}
      <BottomBar
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={setActiveTab}
        backgroundColor="#ffffff"
        activeBackgroundColor="#000000"
        activeTintColor="#ffffff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

// Note: The RN implementation renders at position:'absolute', bottom: 30
// and uses SafeAreaView insets so content doesn't overlap the bar.
// On iOS, icons use SF Symbols; on Android, Material Icons are used.`;

  const props = [
    { name: 'tabs', type: 'BottomBarTab[]', default: '—', desc: 'Array of tab definitions: { id, label, icon }. On iOS uses SF Symbol names; on Android uses Material Icon names. Required.' },
    { name: 'activeTab', type: 'string', default: '—', desc: 'ID of the currently active tab. Required.' },
    { name: 'onTabPress', type: '(id: string) => void', default: '—', desc: 'Callback fired with the tab ID when a tab is pressed. Required.' },
    { name: 'backgroundColor', type: 'string', default: '—', desc: 'Background color of the floating pill bar.' },
    { name: 'activeBackgroundColor', type: 'string', default: '"#000"', desc: 'Background color of the active tab pill.' },
    { name: 'activeTintColor', type: 'string', default: '"#fff"', desc: 'Icon and label color for the active tab.' },
    { name: 'inactiveTintColor', type: 'string', default: '—', desc: 'Icon and label color for inactive tabs.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="BottomBar"
        description="React Native floating pill-shaped navigation bar. Renders at position:'absolute', bottom: 30. Uses SF Symbols on iOS and Material Icons on Android."
        pkg="@otaga/rn-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup
            overlay={
              <div style={{ position: 'absolute', bottom: 18, left: 12, right: 12, zIndex: 20 }}>
                <div style={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center',
                  justifyContent: 'space-around',
                  backgroundColor: '#fff',
                  borderRadius: 40,
                  height: 52,
                  width: '100%',
                  padding: '0 5px',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.13)',
                }}>
                  {tabs.map(tab => {
                    const active = activeTab === tab.id;
                    return (
                      <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                        display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5,
                        padding: active ? '7px 12px' : '7px 8px',
                        height: 38, border: 'none', borderRadius: 100,
                        backgroundColor: active ? '#000' : 'transparent',
                        cursor: 'pointer', transition: 'all 0.2s ease', flexShrink: 0,
                      }}>
                        <Icon name={tab.icon as IconName} size={17} color={active ? '#fff' : '#888'} />
                        {active && <span style={{ color: '#fff', fontWeight: 700, fontSize: 12, whiteSpace: 'nowrap' }}>{tab.label}</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            }
          >
            <div style={{ background: '#FCF5E5', minHeight: '100%', padding: 16, paddingBottom: 80 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 4 }}>
                {tabs.find(t => t.id === activeTab)?.label} Screen
              </p>
              <p style={{ fontSize: 12, color: '#888' }}>
                Tap tabs below to switch.
              </p>
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

