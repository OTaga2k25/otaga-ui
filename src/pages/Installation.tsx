import { useState } from 'react';
import { CodeBlock } from '../components/CodeBlock';

export function Installation({ active }: { active?: string }) {
  const [pm, setPm] = useState<'npm' | 'yarn' | 'pnpm'>('npm');

  const cmds: Record<string, Record<string, string>> = {
    'web-ui-kit': {
      npm:  'npm install @otaga/web-ui-kit',
      yarn: 'yarn add @otaga/web-ui-kit',
      pnpm: 'pnpm add @otaga/web-ui-kit',
    },
    'rn-ui-kit': {
      npm:  'npm install @otaga/rn-ui-kit @otaga/shared-utils',
      yarn: 'yarn add @otaga/rn-ui-kit @otaga/shared-utils',
      pnpm: 'pnpm add @otaga/rn-ui-kit @otaga/shared-utils',
    },
  };

  const isWeb = active !== 'rn-installation';
  const isRN = active !== 'web-installation';

  return (
    <div>
      {/* 01 Choose your runtime */}
      <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 24 }}>
        <span style={{ color: '#FFE600', marginRight: 16 }}>01</span> Choose your runtime
      </h2>

      {/* PM switcher */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 32 }}>
        {(['npm', 'yarn', 'pnpm'] as const).map(p => (
          <button key={p} onClick={() => setPm(p)} className="install-tab" style={{
            background: pm === p ? 'var(--primary)' : 'var(--surface)',
            color: pm === p ? '#fff' : 'var(--text-muted)',
            border: `1px solid ${pm === p ? 'transparent' : 'var(--border)'}`,
          }}>{p}</button>
        ))}
      </div>

      {/* Web */}
      {isWeb && (
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Web · React / Next.js</span>
            <span style={{ fontSize: 9, fontWeight: 800, color: '#3b82f6', background: '#3b82f615', padding: '2px 8px', borderRadius: 5, textTransform: 'uppercase' }}>web</span>
          </div>
          <CodeBlock code={cmds['web-ui-kit'][pm]} lang="bash" />

          <div style={{ marginTop: 16 }}>
            <CodeBlock code={`import {
  BuyButton, CartButton, BottomBar, BottomSheet,
  Sidebar, SegmentedControl, Collapsible,
  ThemedText, ThemedView, Icon,
  Colors, useColorScheme,
} from '@otaga/web-ui-kit';

export function App() {
  return <BuyButton label="Buy Now" color="#0F4D3C" onBuy={() => {}} />;
}`} lang="tsx" />
          </div>
        </div>
      )}

      {/* Mobile */}
      {isRN && (
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Mobile · React Native / Expo</span>
            <span style={{ fontSize: 9, fontWeight: 800, color: '#f97316', background: '#f9731615', padding: '2px 8px', borderRadius: 5, textTransform: 'uppercase' }}>rn</span>
          </div>
          <CodeBlock code={cmds['rn-ui-kit'][pm]} lang="bash" />
          <div style={{ marginTop: 16 }}>
            <CodeBlock code={`import {
  BuyButton, CartButton, BottomBar, BottomSheet,
  Sidebar, SegmentedControl, Collapsible,
  ThemedText, ThemedView, IconSymbol,
} from '@otaga/rn-ui-kit';

import { Colors, useColorScheme } from '@otaga/shared-utils';`} lang="tsx" />
          </div>
        </div>
      )}

      {/* Requirements */}
      <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 16, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>Requirements</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12 }}>
        {[
          { label: '@otaga/web-ui-kit',   reqs: ['React ≥ 18', 'react-dom ≥ 18'], show: isWeb },
          { label: '@otaga/rn-ui-kit',    reqs: ['React Native ≥ 0.73', 'expo-symbols', '@expo/vector-icons'], show: isRN },
          { label: '@otaga/shared-utils', reqs: ['React Native ≥ 0.73', '@otaga/rn-ui-kit peer'], show: isRN },
        ].filter(p => p.show).map(p => (
          <div key={p.label} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: 16 }}>
            <code className="mono" style={{ fontSize: 12, color: 'var(--primary)', display: 'block', marginBottom: 10 }}>{p.label}</code>
            {p.reqs.map(r => (
              <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ color: 'var(--primary)', fontSize: 12 }}>✓</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{r}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Next.js note */}
      {isWeb && (
        <div style={{ marginTop: 32, background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10, padding: '16px 20px' }}>
          <p style={{ fontSize: 13, color: '#5eead4', fontWeight: 600, marginBottom: 6 }}>✦ Zero config for Next.js</p>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>
            <code className="mono" style={{ color: 'var(--primary)' }}>@otaga/web-ui-kit</code> works in Next.js App Router and Pages Router with no additional webpack config. No <code className="mono">react-native-web</code> required.
          </p>
        </div>
      )}
    </div>
  );
}

