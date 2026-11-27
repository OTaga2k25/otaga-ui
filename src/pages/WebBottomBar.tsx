import React, { useState } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { BottomBar } from '@otaga/web-ui-kit';

export function WebBottomBarPage() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home',    label: 'Home',    icon: 'house.fill' },
    { id: 'search',  label: 'Search',  icon: 'magnifyingglass' },
    { id: 'profile', label: 'Profile', icon: 'person.fill' },
  ];

  const code = `import { BottomBar } from '@otaga/web-ui-kit';
import { useState } from 'react';

const tabs = [
  { id: 'home',    label: 'Home',    icon: 'house' },
  { id: 'search',  label: 'Search',  icon: 'magnifyingglass' },
  { id: 'profile', label: 'Profile', icon: 'person' },
];

function Example() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <BottomBar
      tabs={tabs}
      activeTab={activeTab}
      onTabPress={setActiveTab}
      backgroundColor="#ffffff"
      activeBackgroundColor="#000000"
      activeTintColor="#ffffff"
    />
  );
}`;

  const props = [
    { name: 'tabs', type: 'BottomBarTab[]', default: '—', desc: 'Array of tab definitions. Each item: { id, label, icon }. Required.' },
    { name: 'activeTab', type: 'string', default: '—', desc: 'ID of the currently active tab. Required.' },
    { name: 'onTabPress', type: '(id: string) => void', default: '—', desc: 'Callback fired with the tab ID when a tab is pressed. Required.' },
    { name: 'backgroundColor', type: 'string', default: '—', desc: 'Background color of the pill-shaped bar.' },
    { name: 'activeBackgroundColor', type: 'string', default: '"#000"', desc: 'Background color of the active tab pill indicator.' },
    { name: 'activeTintColor', type: 'string', default: '"#fff"', desc: 'Icon and label color for the active tab.' },
    { name: 'inactiveTintColor', type: 'string', default: '—', desc: 'Icon and label color for inactive tabs.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="BottomBar"
        description="Floating pill-shaped navigation bar fixed to the bottom of the viewport. Renders a compact tab row with icon and label for each navigation destination."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ padding: 24 }}>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>
            Active tab: <strong>{activeTab}</strong>
          </div>
          {/* transform scopes position:fixed children to this container */}
          <div style={{
            position: 'relative', height: 110, borderRadius: 16, overflow: 'hidden',
            background: 'var(--surface-2)', border: '1px solid var(--border)',
            transform: 'translateZ(0)',
          }}>
            <BottomBar
              tabs={tabs}
              activeTab={activeTab}
              onTabPress={setActiveTab}
              backgroundColor="#ffffff"
              activeBackgroundColor="#000000"
              activeTintColor="#ffffff"
            />
          </div>
        </div>
      </LivePreview>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}

