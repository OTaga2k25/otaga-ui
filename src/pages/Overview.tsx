import { useState } from 'react';

export function Overview({ navigate = (id) => document.dispatchEvent(new CustomEvent('navigate', { detail: id })) }: { navigate?: (id: string) => void }) {
  const [copiedPkg, setCopiedPkg] = useState<string | null>(null);

  const copyCmd = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`npm i ${name}`);
    setCopiedPkg(name);
    setTimeout(() => setCopiedPkg(null), 2000);
  };

  return (
    <div>
      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 'clamp(32px,5vw,48px)', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text)', marginBottom: 16 }}>
          Overview
        </h1>
        <p style={{ fontSize: 16, color: 'var(--text-muted)', maxWidth: 640, lineHeight: 1.7 }}>
          Otaga UI is a comprehensive component library designed for the modern web and mobile ecosystems. It bridges the gap between React DOM and React Native by providing unified design tokens and carefully crafted components for both platforms.
        </p>
      </div>

      {/* ── UI Components ── */}
      <h2 style={sectionTitle}>What's included</h2>
      <div style={grid}>
        {[
          { name: 'BuyButton',        pkg: 'both',   desc: 'Swipe-to-confirm purchase',    id: 'web-buybutton' },
          { name: 'CartButton',       pkg: 'both',   desc: 'Swipe-to-add with bag icon',   id: 'web-cartbutton' },
          { name: 'SegmentedControl', pkg: 'both',   desc: 'Pill tab switcher',             id: 'web-segmentedcontrol' },
          { name: 'Collapsible',      pkg: 'both',   desc: 'Animated accordion',            id: 'web-collapsible' },
          { name: 'BottomBar',        pkg: 'both',   desc: 'Floating nav bar',              id: 'web-bottombar' },
          { name: 'Sidebar',          pkg: 'both',   desc: 'Slide-in overlay menu',         id: 'web-sidebar' },
          { name: 'BottomSheet',      pkg: 'both',   desc: 'Draggable snap sheet',          id: 'web-bottomsheet' },
          { name: 'ThemedText',       pkg: 'both',   desc: 'Dark/light adaptive text',      id: 'web-themedtext' },
          { name: 'ThemedView',       pkg: 'both',   desc: 'Theme-aware container',         id: 'web-themedview' },
          { name: 'Icon',             pkg: 'web',    desc: '80+ SVG icons',                 id: 'web-icons' },
          { name: 'IconSymbol',       pkg: 'mobile', desc: 'SF Symbols + Material',         id: 'rn-iconsymbol' },
        ].map(c => (
          <div
            key={c.name}
            onClick={() => navigate(c.id)}
            style={card}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-bright)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{c.name}</span>
              <span style={badge(c.pkg)}>{c.pkg === 'both' ? 'WEB + RN' : c.pkg.toUpperCase()}</span>
            </div>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{c.desc}</span>
          </div>
        ))}
      </div>

      {/* ── Three Effects ── */}
      <h2 style={{ ...sectionTitle, marginTop: 40 }}>Three Effects</h2>
      <div style={grid}>
        {[
          { name: 'FloatingCard',       desc: 'Card tilts on hover, floats with sine animation',       id: '3d-floatingcard' },
          { name: 'GlowCard',           desc: 'Pulsing glow sprite + emissive bloom + rim lighting',    id: '3d-glowcard' },
          { name: 'ParticleBackground', desc: 'Drifting particles with constellation connection lines', id: '3d-particlebg' },
          { name: 'RippleEffect',       desc: 'Click-to-spawn expanding 3D rings that fade out',        id: '3d-ripple' },
          { name: 'MorphText',          desc: 'Particles sample and morph between canvas text words',   id: '3d-morphtext' },
        ].map(c => (
          <div
            key={c.name}
            onClick={() => navigate(c.id)}
            style={{ ...card, borderColor: 'rgba(168,85,247,0.18)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(168,85,247,0.18)')}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{c.name}</span>
              <span style={{ fontSize: 9, fontWeight: 700, color: '#a855f7', background: '#a855f715', padding: '2px 6px', borderRadius: 4, textTransform: 'uppercase' as const }}>3D</span>
            </div>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{c.desc}</span>
          </div>
        ))}
      </div>

      {/* ── Install ── */}
      <h2 style={{ ...sectionTitle, marginTop: 48 }}>Quick install</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          { pkg: '@otaga/web-ui-kit',    label: 'Web (React / Next.js)',           color: '#3b82f6', navId: 'web-installation' },
          { pkg: '@otaga/rn-ui-kit',     label: 'Mobile (Expo / React Native)',     color: '#f97316', navId: 'rn-installation' },
          { pkg: '@otaga/three-effects', label: '3D Effects (React + plain HTML)',  color: '#a855f7', navId: '3d-installation' },
        ].map(({ pkg, label, color, navId }) => (
          <div
            key={pkg}
            onClick={() => navigate(navId)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '12px 16px', cursor: 'pointer', transition: 'border-color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = color)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            <div>
              <span style={{ fontSize: 12, color, fontWeight: 700, display: 'block', marginBottom: 2 }}>{label}</span>
              <code style={{ fontSize: 13, color: 'var(--text)', fontFamily: 'monospace' }}>npm i {pkg}</code>
            </div>
            <button
              onClick={e => copyCmd(e, pkg)}
              style={{ fontSize: 11, padding: '5px 10px', borderRadius: 6, border: '1px solid var(--border)', background: copiedPkg === pkg ? color : 'var(--surface-2)', color: copiedPkg === pkg ? '#fff' : 'var(--text-muted)', cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'inherit' }}
            >
              {copiedPkg === pkg ? 'Copied!' : 'Copy'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Helpers ── */
const sectionTitle: React.CSSProperties = {
  fontSize: 20, fontWeight: 700, color: 'var(--text)',
  marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--border)',
};

const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: 10,
};

const card: React.CSSProperties = {
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: 10, padding: '14px 16px',
  display: 'flex', flexDirection: 'column', gap: 6,
  cursor: 'pointer', transition: 'border-color 0.15s',
};

function badge(pkg: string): React.CSSProperties {
  const color = pkg === 'web' ? '#3b82f6' : pkg === 'mobile' ? '#f97316' : 'var(--primary)';
  return {
    fontSize: 9, fontWeight: 700, color,
    background: `${color}15`, padding: '2px 6px',
    borderRadius: 4, textTransform: 'uppercase',
  };
}
