import React, { useState, ReactNode } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { Sidebar } from '@otaga/web-ui-kit';

export function WebSidebarPage() {
  const [visible, setVisible] = useState(false);

  const items = [
    { id: 'home',     label: 'Home',      icon: 'house.fill' },
    { id: 'orders',   label: 'My Orders', icon: 'bag' },
    { id: 'wishlist', label: 'Wishlist',  icon: 'heart' },
    { id: 'settings', label: 'Settings',  icon: 'gearshape' },
  ];

  const code = `import { Sidebar } from '@otaga/web-ui-kit';
import { useState } from 'react';

const items = [
  { id: 'home',     label: 'Home',      icon: 'house' },
  { id: 'orders',   label: 'My Orders', icon: 'bag' },
  { id: 'wishlist', label: 'Wishlist',  icon: 'heart' },
  { id: 'settings', label: 'Settings', icon: 'gearshape' },
];

function Example() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button onClick={() => setVisible(true)}>Open Menu</button>

      <Sidebar
        visible={visible}
        onClose={() => setVisible(false)}
        title="Menu"
        items={items}
        width="75%"
        footer={<p style={{ fontSize: 12 }}>App v1.0.0</p>}
      />
    </>
  );
}`;

  const props = [
    { name: 'visible', type: 'boolean', default: '—', desc: 'Controls whether the sidebar overlay is shown. Required.' },
    { name: 'onClose', type: '() => void', default: '—', desc: 'Callback to close the sidebar. Triggered by backdrop click or Escape key. Required.' },
    { name: 'title', type: 'string', default: '"Menu"', desc: 'Heading text displayed at the top of the panel.' },
    { name: 'items', type: 'SidebarItem[]', default: '—', desc: 'Navigation items to render. Each item: { id, label, icon }. Required.' },
    { name: 'footer', type: 'ReactNode', default: '—', desc: 'Optional content pinned to the bottom of the panel (e.g. version info, logout button).' },
    { name: 'width', type: 'number | string', default: '"75%"', desc: 'Width of the slide-in panel. Accepts px numbers or CSS strings.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="Sidebar"
        description="Slide-in overlay panel with keyboard (Escape) support and an item list. Closes when the user clicks the backdrop or presses Escape."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        {/* transform scopes position:fixed Sidebar to this container */}
        <div style={{ position: 'relative', minHeight: 220, transform: 'translateZ(0)', overflow: 'hidden', borderRadius: 12 }}>
          <div style={{ padding: 24 }}>
            <button
              onClick={() => setVisible(true)}
              style={{
                padding: '10px 24px',
                background: 'var(--primary, #10b981)',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Open Sidebar
            </button>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 12 }}>
              Click to open · backdrop or Escape to close
            </p>
          </div>
          <Sidebar
            visible={visible}
            onClose={() => setVisible(false)}
            title="Menu"
            items={items}
            width="60%"
            footer={<div style={{ fontSize: 12, color: 'var(--text-muted)' }}>App v1.0.0</div>}
          />
        </div>
      </LivePreview>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}

