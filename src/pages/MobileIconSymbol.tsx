import React from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { Icon, ThemedText } from '@otaga/web-ui-kit';
import type { IconName } from '@otaga/web-ui-kit';

type IconRow = { sfSymbol: IconName; material: string; desc: string };

const ICON_MAP: IconRow[] = [
  { sfSymbol: 'house',           material: 'home',          desc: 'Home / Dashboard' },
  { sfSymbol: 'magnifyingglass', material: 'search',         desc: 'Search' },
  { sfSymbol: 'heart',           material: 'favorite',       desc: 'Favourite / Like' },
  { sfSymbol: 'bag',             material: 'shopping_bag',   desc: 'Shopping Bag' },
  { sfSymbol: 'cart',            material: 'shopping_cart',  desc: 'Shopping Cart' },
  { sfSymbol: 'person',          material: 'person',         desc: 'User / Profile' },
  { sfSymbol: 'gearshape',       material: 'settings',       desc: 'Settings' },
  { sfSymbol: 'bell',            material: 'notifications',  desc: 'Notifications' },
  { sfSymbol: 'star',            material: 'star',           desc: 'Star / Rating' },
  { sfSymbol: 'xmark',           material: 'close',          desc: 'Close / Dismiss' },
];

const PREVIEW_ICONS: { name: IconName; color: string; label: string }[] = [
  { name: 'house.fill',      color: '#2a9d6a', label: 'house' },
  { name: 'magnifyingglass', color: '#3b82f6', label: 'search' },
  { name: 'heart',           color: '#ef4444', label: 'heart' },
  { name: 'bag',             color: '#f97316', label: 'bag' },
  { name: 'person.fill',     color: '#8b5cf6', label: 'person' },
  { name: 'gearshape',       color: '#64748b', label: 'settings' },
  { name: 'bell.fill',       color: '#eab308', label: 'bell' },
  { name: 'star',            color: '#f59e0b', label: 'star' },
  { name: 'xmark',           color: '#6b7280', label: 'xmark' },
  { name: 'cart.fill',       color: '#2a9d6a', label: 'cart' },
];

export function MobileIconSymbolPage() {
  const code = `import { IconSymbol } from '@otaga/rn-ui-kit';
// SF Symbols on iOS · Material Icons on Android
import { View, StyleSheet } from 'react-native';

export default function Example() {
  return (
    <View style={styles.row}>
      <IconSymbol name="house"           size={28} color="#2a9d6a" />
      <IconSymbol name="magnifyingglass" size={28} color="#3b82f6" />
      <IconSymbol name="heart"           size={28} color="#ef4444" />
      <IconSymbol name="bag"             size={28} color="#f97316" />
      <IconSymbol name="person"          size={28} color="#8b5cf6" />
    </View>
  );
}

// weight prop only applies on iOS 16+ (SF Symbols variable weights)
// On Android the Material Icon variant is chosen automatically.
const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 20, padding: 20 },
});`;

  const props = [
    { name: 'name', type: 'SFSymbolName', default: '—', desc: 'SF Symbol-style icon name (e.g. "house", "magnifyingglass"). Maps to the equivalent Material Icon on Android. Required.' },
    { name: 'size', type: 'number', default: '24', desc: 'Width and height of the icon in points.' },
    { name: 'color', type: 'string | OpaqueColorValue', default: '—', desc: 'Fill color of the icon. Accepts any React Native color value. Required.' },
    { name: 'weight', type: 'SymbolWeight', default: '"regular"', desc: 'SF Symbol weight variant (ultraLight, thin, light, regular, medium, semibold, bold, heavy, black). iOS 16+ only.' },
    { name: 'style', type: 'StyleProp<TextStyle>', default: '—', desc: 'Additional TextStyle applied to the underlying Text/Image element.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="IconSymbol"
        description="Cross-platform icon component. Renders SF Symbols on iOS and automatically maps to the equivalent Material Icon on Android. Supports variable weights on iOS 16+."
        pkg="@otaga/rn-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#FCF5E5', minHeight: '100%', padding: 16 }}>
              <ThemedText type="defaultSemiBold" style={{ marginBottom: 16 }}>Icon Grid</ThemedText>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: 8,
                  marginBottom: 20,
                }}
              >
                {PREVIEW_ICONS.map(({ name, color, label }) => (
                  <div
                    key={name}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 6,
                      padding: '12px 6px',
                      background: '#fff',
                      borderRadius: 10,
                    }}
                  >
                    <Icon name={name} size={24} color={color} />
                    <span style={{
                      fontSize: 9,
                      color: '#888',
                      textAlign: 'center',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      maxWidth: '100%',
                    }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 10, color: '#888' }}>
                iOS: SF Symbols · Android: Material Icons
              </div>
            </div>
          </PhoneMockup>
        </div>
      </LivePreview>

      <SectionTitle>SF Symbol → Material Icon Mapping</SectionTitle>
      <div style={{ overflowX: 'auto', marginBottom: 32 }}>
        <table className="props-table">
          <thead>
            <tr>
              <th>SF Symbol (iOS)</th>
              <th>Material Icon (Android)</th>
              <th>Use case</th>
            </tr>
          </thead>
          <tbody>
            {ICON_MAP.map(row => (
              <tr key={row.sfSymbol}>
                <td><code className="mono">{row.sfSymbol}</code></td>
                <td><code className="mono">{row.material}</code></td>
                <td style={{ color: 'var(--text-muted)' }}>{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}

