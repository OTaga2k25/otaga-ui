import { CodeBlock, Tabs } from '../components/CodeBlock';

const WEB_INSTALL = `npm install @otaga/web-ui-kit`;

const RN_INSTALL = `# React Native / Expo
npm install @otaga/rn-ui-kit @otaga/shared-utils

# Required peer deps
npx expo install expo-symbols @expo/vector-icons`;

const WEB_USAGE = `import { BuyButton } from '@otaga/web-ui-kit';

export default function App() {
  return (
    <BuyButton 
      label="Buy Now" 
      onBuy={() => console.log('Bought!')} 
    />
  );
}`;

const RN_USAGE = `import { BuyButton } from '@otaga/rn-ui-kit';
import { Colors } from '@otaga/shared-utils';

export default function App() {
  return (
    <BuyButton 
      label="Buy Now" 
      onBuy={() => console.log('Bought!')} 
    />
  );
}`;

const NEXT_CONFIG = `/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@otaga/web-ui-kit'],
};

module.exports = nextConfig;`;

export function Install() {
  return (
    <section id="install" className="section-padding">
      <SectionHeader
        badge="Quick Start"
        title="Ready for production"
        sub="Get up and running in minutes with our zero-config installation process."
      />

      <div className="grid-pkg" style={{ marginTop: 64, gap: 48 }}>
        {/* Web */}
        <div className="animate-fade-in">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'var(--accent-blue)20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 16 }}>🌐</span>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700 }}>Web / Next.js</h3>
          </div>
          
          <Tabs items={[
            { label: 'npm',  content: <CodeBlock code={WEB_INSTALL} lang="bash" /> },
            { label: 'yarn', content: <CodeBlock code="yarn add @otaga/web-ui-kit" lang="bash" /> },
          ]} />
          
          <div style={{ marginTop: 24 }}>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 12, fontWeight: 500 }}>Example usage:</p>
            <CodeBlock code={WEB_USAGE} lang="tsx" />
          </div>
        </div>

        {/* Mobile */}
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'var(--accent-orange)20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 16 }}>📱</span>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700 }}>Mobile / Expo</h3>
          </div>
          
          <Tabs items={[
            { label: 'npm',  content: <CodeBlock code="npm install @otaga/rn-ui-kit" lang="bash" /> },
            { label: 'expo', content: <CodeBlock code={RN_INSTALL} lang="bash" /> },
          ]} />
          
          <div style={{ marginTop: 24 }}>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 12, fontWeight: 500 }}>Example usage:</p>
            <CodeBlock code={RN_USAGE} lang="tsx" />
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 64, padding: 32, background: 'var(--surface)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Next.js Transpilation</h4>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>
              If you're using Next.js, make sure to add the package to <code className="mono">transpilePackages</code> in your <code className="mono">next.config.js</code> to ensure smooth integration.
            </p>
          </div>
          <div style={{ flex: '2 1 400px', maxWidth: '100%' }}>
            <CodeBlock code={NEXT_CONFIG} lang="js" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ badge, title, sub }: { badge: string; title: string; sub: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <span style={{
        fontSize: 12, fontWeight: 800, letterSpacing: '0.15em',
        textTransform: 'uppercase', color: 'var(--primary)',
        display: 'inline-block', marginBottom: 16,
        padding: '4px 12px', background: 'var(--primary-glow)',
        borderRadius: 8,
      }}>{badge}</span>
      <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 20 }}>
        {title}
      </h2>
      <p style={{ fontSize: 'clamp(16px, 3vw, 18px)', color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
        {sub}
      </p>
    </div>
  );
}
