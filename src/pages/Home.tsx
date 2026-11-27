import { useState, useEffect } from 'react';
import { Portal } from '../components/Portal';
import { Footer } from '../components/Footer';
import { ImageCarousel } from '@otaga/web-ui-kit';

// Logo Studio is a static page in public/logo-studio, so link to the file itself (a full page load, not app navigation)
const LOGO_STUDIO_URL = '/logo-studio/index.html';
const STUDIO_COLOR = '#ec4899';

const PORTAL_CARDS = [
  {
    name: "Web UI Kit",
    title: "60+ Production-Ready Components",
    img: "/assets/web_ui_showcase.png",
    routeId: "web-installation"
  },
  {
    name: "Mobile UI Kit",
    title: "Expo & React Native Gestures",
    img: "/assets/mobile_ui_showcase.png",
    routeId: "rn-installation"
  },
  {
    name: "Otaga CLI",
    title: "Rapid Component Scaffolding",
    img: "/assets/cli_showcase.png",
    routeId: "cli-docs"
  },
  {
    name: "3D WebGL",
    title: "Immersive Three.js Interaction",
    img: "/assets/threejs_showcase.png",
    routeId: "3d-installation"
  }
];

export function Home({ navigate, theme, setTheme }: { navigate: (id: string) => void, theme: string, setTheme: (t: 'dark' | 'light') => void }) {
  const [copiedPkg, setCopiedPkg] = useState<string | null>(null);
  const [cardIndex, setCardIndex] = useState(0);

  const copyCmd = (e: React.MouseEvent, cmd: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(cmd);
    setCopiedPkg(cmd);
    setTimeout(() => setCopiedPkg(null), 2000);
  };

  const platforms = [
    { title: "React Native & Web.", color: "#FFE600", tag: "V1.0.0" },
    { title: "React & Next.js.", color: "#3b82f6", tag: "WEB UI KIT" },
    { title: "Three.js & WebGL.", color: "#10b981", tag: "3D EFFECTS" },
    { title: "Rapid CLI Tools.", color: "#8b5cf6", tag: "OTAGA CLI" },
  ];

  useEffect(() => {
    const int = setInterval(() => {
      setCardIndex((i) => (i + 1) % platforms.length);
    }, 2500);
    return () => clearInterval(int);
  }, []);

  const activePlatform = platforms[cardIndex];

  return (
    <div className="home-bg" style={{ minHeight: '100vh', width: '100%' }}>
      <div style={{
        width: '100%',
        position: 'relative',
        backgroundImage: 'radial-gradient(rgba(150, 150, 150, 0.15) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '40px',
        borderBottom: '1px solid var(--border)'
      }}>

        {/* Max width container for Nav, Card, and 4 Features */}
        <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 10 }}>
          
          {/* Top Nav */}
          <header className="home-header" style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '24px 32px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }} onClick={() => navigate('overview')}>
              <span style={{ fontSize: 22, fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.05em' }}>
                {'>_'} Otaga<span style={{color: 'var(--primary)'}}>.</span>
              </span>
            </div>

            <nav className="mobile-hidden" style={{ display: 'flex', gap: 32, fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', color: 'var(--text)' }}>
              <span style={{ cursor: 'pointer', whiteSpace: 'nowrap' }} onClick={() => navigate('web-installation')}>DOCS</span>
              <span style={{ cursor: 'pointer', whiteSpace: 'nowrap' }} onClick={() => navigate('web-dock')}>EXAMPLES</span>
              <span style={{ cursor: 'pointer', whiteSpace: 'nowrap' }} onClick={() => navigate('rn-installation')}>UI</span>
              <span style={{ cursor: 'pointer', whiteSpace: 'nowrap' }} onClick={() => navigate('cli-docs')}>AI KIT</span>
              <a href={LOGO_STUDIO_URL} style={{ whiteSpace: 'nowrap', color: STUDIO_COLOR, textDecoration: 'none' }}>LOGO STUDIO</a>
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexShrink: 0 }}>
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)' }}>
                {theme === 'dark' ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
              <button className="mobile-hidden" style={{
                background: 'var(--text)', color: 'var(--surface)', border: 'none', padding: '12px 24px', borderRadius: 4,
                fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', cursor: 'pointer', whiteSpace: 'nowrap'
              }}>
                OTAGA+
              </button>
            </div>
          </header>

          {/* Hero Content - LEFT ALIGNED */}
          <div style={{ padding: '40px 32px 40px 32px', display: 'flex', justifyContent: 'flex-start', alignItems: 'stretch', gap: 24, flexWrap: 'wrap' }}>
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)',
              padding: '48px', width: '100%', maxWidth: 700, flex: '1 1 520px', borderRadius: 16,
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)', textAlign: 'left',
              transition: 'border-color 0.5s ease', borderColor: `${activePlatform.color}44`
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: 24 }}>
                <span>OPEN SOURCE / MIT LICENSE</span>
                <span style={{ color: activePlatform.color, transition: 'color 0.5s ease' }}>{activePlatform.tag}</span>
              </div>

              <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', margin: 0, marginBottom: 16 }}>
                <span style={{ color: activePlatform.color, transition: 'color 0.5s ease' }}>Otaga UI.</span><br />
                Production-grade<br />
                components for<br />
                {activePlatform.title}
              </h1>

              <div style={{ marginTop: 32, marginBottom: 32 }}>
                <button style={{
                  background: activePlatform.color, color: '#000', border: 'none', padding: '16px 32px', borderRadius: 8,
                  fontSize: 13, fontWeight: 800, letterSpacing: '0.1em', cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: 12, transition: 'background-color 0.5s ease'
                }} onClick={() => navigate('overview')}>
                  GET STARTED
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              <div>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-dim)', display: 'block', marginBottom: 12 }}>{`> AVAILABLE FOR`}</span>
                <div style={{ display: 'flex', gap: 24, fontSize: 11, fontWeight: 800, letterSpacing: '0.05em', color: 'var(--text)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }} onClick={() => navigate('rn-installation')}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>
                    EXPO
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }} onClick={() => navigate('rn-installation')}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    REACT NATIVE
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }} onClick={() => navigate('web-installation')}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    WEB
                  </span>
                </div>
              </div>
            </div>

            {/* Logo Studio: 3D-printable client gifts (static page, so a full page load) */}
            <a href={LOGO_STUDIO_URL} className="card" style={{
              flex: '1 1 300px', maxWidth: 460, minWidth: 0, borderRadius: 16, padding: 32,
              display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'var(--text)',
              background: `linear-gradient(160deg, ${STUDIO_COLOR}1f, transparent 55%), var(--surface)`,
              border: `1px solid ${STUDIO_COLOR}44`, boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', color: STUDIO_COLOR, background: `${STUDIO_COLOR}18`, padding: '4px 10px', borderRadius: 6 }}>NEW · 3D PRINT</span>
                <span className="card-arrow" style={{ fontSize: 18, color: 'var(--text-dim)' }}>→</span>
              </div>

              {/* little scene: a mug with a raised logo badge */}
              <svg viewBox="0 0 220 120" style={{ width: '100%', height: 'auto', marginBottom: 20 }} aria-hidden="true">
                <ellipse cx="96" cy="108" rx="62" ry="7" fill="rgba(0,0,0,0.25)" />
                <path d="M150 42 q30 0 30 26 q0 26 -30 26" fill="none" stroke="var(--text-dim)" strokeWidth="9" strokeLinecap="round" />
                <rect x="42" y="18" width="110" height="88" rx="10" fill="var(--surface-2)" stroke="var(--border)" />
                <ellipse cx="97" cy="18" rx="55" ry="7" fill="var(--surface)" stroke="var(--border)" />
                <rect x="72" y="40" width="50" height="40" rx="8" fill={`${STUDIO_COLOR}22`} stroke={STUDIO_COLOR} strokeWidth="2" />
                <path d="M84 70 l8 -18 l5 10 l5 -10 l8 18 z" fill={STUDIO_COLOR} />
                <g fill={STUDIO_COLOR} opacity="0.7"><circle cx="196" cy="22" r="3" /><circle cx="206" cy="36" r="2" /><circle cx="22" cy="40" r="2.5" /></g>
              </svg>

              <p style={{ fontSize: 26, fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 8px' }}>Logo Studio</p>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 24px', flex: 1 }}>
                Upload a client logo and design 3D-printable gifts: mugs, pen holders, desk organisers,
                shadow and projector lamps, LED masks. Export STL, 3MF and GLB.
              </p>
              <span style={{
                alignSelf: 'flex-start', background: STUDIO_COLOR, color: '#000', padding: '14px 24px', borderRadius: 8,
                fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', display: 'inline-flex', alignItems: 'center', gap: 10,
              }}>
                OPEN STUDIO
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
              </span>
            </a>
          </div>

          {/* 4 Package Cards (Single Row) */}
          <div style={{ padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
          {[
            { name: 'Web UI Kit', badge: 'Web', color: '#3b82f6', desc: 'React & Next.js components. Pure HTML/CSS.', route: 'web-installation', icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            ), cmd: 'npx otaga-ui add web-card' },
            { name: 'Mobile UI Kit', badge: 'React Native', color: '#f97316', desc: 'Expo & React Native. Native gestures and Animated API.', route: 'rn-installation', icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
              </svg>
            ), cmd: 'npx otaga-ui add rn-card' },
            { name: 'Otaga CLI', badge: 'CLI', color: '#8b5cf6', desc: 'Component generator CLI. Build modern apps faster.', route: 'cli-docs', icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
            ), cmd: 'npx otaga-ui init' },
            { name: 'ThreeJS', badge: '3D', color: '#10b981', desc: 'Immersive 3D experiences and WebGL components.', route: '3d-installation', icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            ), cmd: 'npx otaga-ui add 3d-scene' },
          ].map(p => (
            <div key={p.name} className="card" style={{ padding: 24, cursor: 'pointer', display: 'flex', flexDirection: 'column', minHeight: 220 }}
              onClick={() => navigate(p.route)}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: p.color, background: `${p.color}15`, padding: '4px 10px', borderRadius: 6 }}>{p.badge}</span>
                <span style={{ color: p.color, display: 'flex', alignItems: 'center' }}>{p.icon}</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <p style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', margin: 0 }}>{p.name}</p>
                <span className="card-arrow" style={{ fontSize: 18, color: 'var(--text-dim)', transition: 'transform 0.2s, color 0.2s' }}>→</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: 20, flex: 1 }}>{p.desc}</p>
              
              {/* npm command — click copies, stopPropagation prevents card nav */}
              <button
                onClick={e => copyCmd(e, p.cmd)}
                style={{
                  width: '100%', textAlign: 'left', cursor: 'pointer',
                  background: copiedPkg === p.cmd ? 'var(--primary-dim)' : 'var(--surface-2)',
                  borderRadius: 8, padding: '10px 14px',
                  border: `1px solid ${copiedPkg === p.cmd ? 'rgba(16,185,129,0.3)' : 'var(--border)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  transition: 'all 0.15s', fontFamily: 'inherit',
                }}
              >
                <code className="mono" style={{ fontSize: 11, color: copiedPkg === p.cmd ? 'var(--primary)' : 'var(--text-dim)' }}>
                  {p.cmd}
                </code>
                {copiedPkg === p.cmd ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>

    <Portal bg="#f5f5f3" lineColor={theme === 'light' ? '#f5ede0' : '#000'}>
      <div style={{
        width: '100%', height: '100%', background: '#f5f5f3',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '2rem 1.5rem', gap: '1.5rem',
        overflow: 'hidden'
      }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '.6rem', fontWeight: 900, letterSpacing: '.35em', textTransform: 'uppercase', color: 'rgba(0,0,0,.4)', marginBottom: '.5rem' }}>
            Otaga Component Suite
          </p>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 900, letterSpacing: '-.03em', textTransform: 'uppercase', color: '#0a0a0a', margin: 0 }}>
            Explore the Design System
          </h2>
          <p style={{ fontSize: '.75rem', color: 'rgba(0,0,0,.55)', marginTop: '.5rem', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            An editorial, minimalist component ecosystem built for high-performance React and React Native applications. Click card panels to reveal package capabilities.
          </p>
        </div>

        <div style={{ width: '100%', maxWidth: '900px', display: 'flex', justifyContent: 'center' }}>
          <ImageCarousel persons={PORTAL_CARDS} height={380} style={{ padding: 0 }} onNavigate={navigate} direction="vertical" />
        </div>
      </div>
    </Portal>

    <Footer />
    </div>
  );
}
