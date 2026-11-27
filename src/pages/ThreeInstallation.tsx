import { useState } from 'react';
import { CodeBlock } from '../components/CodeBlock';

const GH_CDN = 'https://cdn.jsdelivr.net/gh/OTaga2k25/otaga-ui@42c544d/three-effects/dist/index.umd.js';
const NPM_CDN_JSDELIVR = 'https://cdn.jsdelivr.net/npm/@otaga/three-effects/dist/index.umd.js';
const NPM_CDN_UNPKG    = 'https://unpkg.com/@otaga/three-effects/dist/index.umd.js';

export function ThreeInstallation() {
  const [pm,  setPm]  = useState<'npm' | 'yarn' | 'pnpm'>('npm');
  const [cdn, setCdn] = useState<'github' | 'jsdelivr' | 'unpkg'>('jsdelivr');

  const installCmd = {
    npm:  'npm install @otaga/three-effects',
    yarn: 'yarn add @otaga/three-effects',
    pnpm: 'pnpm add @otaga/three-effects',
  }[pm];

  const cdnUrl = {
    github:    GH_CDN,
    jsdelivr:  NPM_CDN_JSDELIVR,
    unpkg:     NPM_CDN_UNPKG,
  }[cdn];

  const cdnNote = cdn === 'github'
    ? '✓ Works now — commit-pinned (immutable). Update the hash after each new release.'
    : null;

  return (
    <div>
      <h1 style={{ fontSize: 36, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: 12 }}>
        Installation
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>
        <code style={{ color: 'var(--primary)', fontFamily: 'monospace' }}>@otaga/three-effects</code> works in two ways —
        install via npm for React / Next.js projects, or drop in a single script tag for plain HTML pages.
      </p>

      {/* ── React / npm ── */}
      <div style={section}>
        <SectionHead
          title="React / Next.js"
          badge="npm"
          badgeColor="#3b82f6"
          desc="Install the package, import React components directly. Three.js is bundled — no extra setup."
        />

        {/* PM tabs */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
          {(['npm', 'yarn', 'pnpm'] as const).map(p => (
            <button key={p} onClick={() => setPm(p)} style={tabStyle(pm === p)}>
              {p}
            </button>
          ))}
        </div>

        <CodeBlock code={installCmd} lang="bash" />

        <div style={{ marginTop: 16 }}>
          <CodeBlock code={`import {
  FloatingCardReact,
  GlowCardReact,
  ParticleBackgroundReact,
  RippleEffectReact,
  MorphTextReact,
} from '@otaga/three-effects';

export function App() {
  return (
    <>
      {/* 3D card that tilts on hover */}
      <FloatingCardReact color={0x6366f1} style={{ height: 400 }} />

      {/* Particle scene as background */}
      <div style={{ position: 'relative' }}>
        <ParticleBackgroundReact
          count={150}
          connected={true}
          style={{ position: 'absolute', inset: 0 }}
        />
      </div>

      {/* Particle text that morphs between words */}
      <MorphTextReact
        texts={['Hello', 'World', 'otaga']}
        interval={2500}
        style={{ height: 180 }}
      />
    </>
  );
}`} lang="tsx" />
        </div>

        <InfoBox color="#3b82f6" title="Next.js App Router">
          Wrap in a <code style={{ fontFamily: 'monospace', fontSize: 12 }}>'use client'</code> component —
          Three.js needs the browser's <code style={{ fontFamily: 'monospace', fontSize: 12 }}>canvas</code> and{' '}
          <code style={{ fontFamily: 'monospace', fontSize: 12 }}>requestAnimationFrame</code> APIs which are not available during SSR.
        </InfoBox>
      </div>

      {/* ── Plain HTML / CDN ── */}
      <div style={section}>
        <SectionHead
          title="Plain HTML / CDN"
          badge="cdn"
          badgeColor="#a855f7"
          desc="One script tag, no build step. three.js is bundled inside. All 5 effects available as OtagaEffects.*"
        />

        {/* CDN tabs */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
          {([
            { id: 'github',   label: 'GitHub CDN' },
            { id: 'jsdelivr', label: 'jsDelivr (npm)' },
            { id: 'unpkg',    label: 'unpkg (npm)' },
          ] as const).map(({ id, label }) => (
            <button key={id} onClick={() => setCdn(id)} style={tabStyle(cdn === id)}>
              {label}
            </button>
          ))}
        </div>

        {cdnNote && (
          <p style={{ fontSize: 11, color: '#10b981', marginBottom: 12, fontWeight: 600 }}>
            {cdnNote}
          </p>
        )}

        <CodeBlock code={`<!-- Step 1: Load the bundle (three.js is included) -->
<script src="${cdnUrl}"></script>

<!-- Step 2: Create a container -->
<div id="card" style="width:100%;height:400px"></div>

<!-- Step 3: Initialise -->
<script>
  new OtagaEffects.FloatingCard(document.getElementById('card'), {
    color: 0x6366f1,
    tiltStrength: 0.4,
  });
</script>`} lang="html" />

        <div style={{ marginTop: 16 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>
            All 5 effects — full example
          </p>
          <CodeBlock code={`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { margin: 0; background: #05050f; }
    .wrap { width: 100%; height: 400px; }
  </style>
</head>
<body>

  <div id="floating"  class="wrap"></div>
  <div id="glow"      class="wrap"></div>
  <div id="particles" class="wrap"></div>
  <div id="ripple"    class="wrap" style="cursor:pointer"></div>
  <div id="morph"     class="wrap"></div>

  <script src="${cdnUrl}"></script>
  <script>
    const E = OtagaEffects;

    new E.FloatingCard(document.getElementById('floating'), {
      color: 0x6366f1, tiltStrength: 0.4,
    });

    new E.GlowCard(document.getElementById('glow'), {
      glowColor: 0x818cf8, pulseSpeed: 1.6,
    });

    new E.ParticleBackground(document.getElementById('particles'), {
      count: 150, connected: true,
    });

    new E.RippleEffect(document.getElementById('ripple'), {
      color: 0x818cf8, maxRadius: 3,
    });

    new E.MorphText(document.getElementById('morph'), {
      texts: ['Hello', 'World', 'otaga'],
      fontSize: 80,
    });
  </script>

</body>
</html>`} lang="html" />
        </div>
      </div>

      {/* ── Requirements ── */}
      <h2 style={h2}>Requirements</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12 }}>
        {[
          {
            label: 'React / npm',
            items: ['React ≥ 18', 'No other peer deps — three.js is bundled'],
          },
          {
            label: 'Plain HTML / CDN',
            items: ['Any modern browser (Chrome, Firefox, Safari, Edge)', 'WebGL support required', 'No build step — just a script tag'],
          },
        ].map(p => (
          <div key={p.label} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: 16 }}>
            <code style={{ fontSize: 12, color: 'var(--primary)', fontFamily: 'monospace', display: 'block', marginBottom: 10 }}>
              {p.label}
            </code>
            {p.items.map(r => (
              <div key={r} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                <span style={{ color: '#a855f7', fontSize: 12, marginTop: 1 }}>✓</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{r}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ── Status & upgrade path ── */}
      <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10, padding: '14px 18px' }}>
          <p style={{ fontSize: 13, color: '#10b981', fontWeight: 600, marginBottom: 4 }}>✓ CDN (GitHub) — working now</p>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
            Use the commit-pinned jsDelivr GitHub URL. After each rebuild + push, update the hash to get the latest version.
          </p>
          <code style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'monospace', display: 'block', marginTop: 8, wordBreak: 'break-all' }}>
            cdn.jsdelivr.net/gh/OTaga2k25/otaga-ui@42c544d/three-effects/dist/index.umd.js
          </code>
        </div>
        <div style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10, padding: '14px 18px' }}>
          <p style={{ fontSize: 13, color: '#10b981', fontWeight: 600, marginBottom: 4 }}>✓ npm — live now</p>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
            Install via{' '}
            <code style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--primary)' }}>npm i @otaga/three-effects</code>{' '}
            or use the jsDelivr / unpkg CDN URLs above. Version pinning and auto-updates work out of the box.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Helpers ── */

function SectionHead({ title, badge, badgeColor, desc }: {
  title: string; badge: string; badgeColor: string; desc: string;
}) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>{title}</span>
        <span style={{ fontSize: 9, fontWeight: 800, color: badgeColor, background: `${badgeColor}18`, padding: '2px 8px', borderRadius: 5, textTransform: 'uppercase' }}>
          {badge}
        </span>
      </div>
      <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}

function InfoBox({ color, title, children }: { color: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 16, background: `${color}0d`, border: `1px solid ${color}30`, borderRadius: 10, padding: '14px 18px' }}>
      <p style={{ fontSize: 13, color, fontWeight: 600, marginBottom: 4 }}>✦ {title}</p>
      <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{children}</p>
    </div>
  );
}

function tabStyle(active: boolean): React.CSSProperties {
  return {
    padding: '5px 14px', borderRadius: 6, border: `1px solid ${active ? 'transparent' : 'var(--border)'}`,
    background: active ? 'var(--primary)' : 'var(--surface)',
    color: active ? '#fff' : 'var(--text-muted)',
    cursor: 'pointer', fontSize: 12, fontWeight: 600, fontFamily: 'inherit',
  };
}

const section: React.CSSProperties = {
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: 16, padding: 24, marginBottom: 24,
};

const h2: React.CSSProperties = {
  fontSize: 18, fontWeight: 700, color: 'var(--text)',
  marginBottom: 16, paddingBottom: 10, borderBottom: '1px solid var(--border)',
};
