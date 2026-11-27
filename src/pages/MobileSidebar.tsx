import React, { useState } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { Sidebar, ThemedText } from '@otaga/web-ui-kit';

export function MobileSidebarPage() {
  const [visible, setVisible] = useState(false);

  const items = [
    { id: 'home',     label: 'Home',      icon: 'house.fill' },
    { id: 'orders',   label: 'My Orders', icon: 'bag' },
    { id: 'wishlist', label: 'Wishlist',  icon: 'heart' },
    { id: 'settings', label: 'Settings',  icon: 'gearshape' },
  ];

  const code = `import { Sidebar } from '@otaga/rn-ui-kit';
// Uses Modal + Animated.timing for slide-in animation
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

const items = [
  { id: 'home',     label: 'Home',      icon: 'house' },
  { id: 'orders',   label: 'My Orders', icon: 'bag' },
  { id: 'wishlist', label: 'Wishlist',  icon: 'heart' },
  { id: 'settings', label: 'Settings',  icon: 'gearshape' },
];

export default function Example() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(true)} style={styles.btn}>
        <Text style={styles.btnText}>Open Menu</Text>
      </TouchableOpacity>

      <Sidebar
        visible={visible}
        onClose={() => setVisible(false)}
        title="Menu"
        items={items}
        width="75%"
        footer={<Text style={{ fontSize: 12, color: '#888' }}>App v1.0.0</Text>}
      />
    </View>
  );
}

// Note: The RN implementation uses Modal with a transparent background
// and Animated.timing to slide the panel in from the left edge.
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FCF5E5' },
  btn:       { backgroundColor: '#2a9d6a', padding: 14, borderRadius: 10, alignItems: 'center' },
  btnText:   { color: '#fff', fontWeight: '600' },
});`;

  const props = [
    { name: 'visible', type: 'boolean', default: '—', desc: 'Controls whether the Modal + panel is shown. Required.' },
    { name: 'onClose', type: '() => void', default: '—', desc: 'Callback to dismiss the sidebar. Triggered by backdrop press. Required.' },
    { name: 'title', type: 'string', default: '"Menu"', desc: 'Heading text at the top of the slide-in panel.' },
    { name: 'items', type: 'SidebarItem[]', default: '—', desc: 'Navigation items: { id, label, icon }. Required.' },
    { name: 'footer', type: 'ReactNode', default: '—', desc: 'Content pinned to the bottom of the panel (e.g. version info, logout).' },
    { name: 'width', type: 'number | string', default: '"75%"', desc: 'Width of the panel as a number (points) or percentage string.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="Sidebar"
        description="React Native slide-in overlay panel. Uses Modal with a semi-transparent backdrop and Animated.timing for a smooth slide-in from the left edge."
        pkg="@otaga/rn-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup
            overlay={
              /* Constrain the fixed Sidebar inside the phone screen */
              <div style={{ position: 'absolute', inset: 0, zIndex: 20, overflow: 'hidden', borderRadius: 42, transform: 'translateZ(0)', pointerEvents: 'none' }}>
                <Sidebar
                  visible={visible}
                  onClose={() => setVisible(false)}
                  title="Menu"
                  items={items}
                  width="75%"
                  footer={<div style={{ fontSize: 12, color: '#888' }}>App v1.0.0</div>}
                />
              </div>
            }
          >
            <div style={{ background: '#FCF5E5', minHeight: '100%', padding: 16 }}>
              <ThemedText type="defaultSemiBold" style={{ marginBottom: 16 }}>Navigation Demo</ThemedText>
              <button onClick={() => setVisible(true)} style={{
                width: '100%', padding: '12px 0', background: '#2a9d6a',
                color: '#fff', border: 'none', borderRadius: 10,
                fontSize: 13, fontWeight: 600, cursor: 'pointer',
              }}>
                Open Menu
              </button>
              <p style={{ fontSize: 11, color: '#888', marginTop: 10 }}>
                Slides in from left · tap backdrop to close
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

