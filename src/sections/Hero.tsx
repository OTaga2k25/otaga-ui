export function Hero() {
  return (
    <div>
      <div style={{ paddingBottom: 48 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '5px 12px', borderRadius: 100,
          border: '1px solid rgba(16,185,129,0.3)',
          background: 'rgba(16,185,129,0.06)', marginBottom: 24,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', display: 'inline-block', boxShadow: '0 0 8px var(--primary)' }} />
          <span style={{ fontSize: 12, color: 'var(--primary)', fontWeight: 600 }}>Stable Release · v1.0.0</span>
        </div>

        <h1 className="hero-title">
          Design once.<br />
          <span className="text-gradient">Build everywhere.</span>
        </h1>

        <p className="hero-sub">
          Premium UI components for <strong style={{ color: 'var(--text)' }}>React Native</strong> and{' '}
          <strong style={{ color: 'var(--text)' }}>React / Next.js</strong>. Same design language, zero cross-dependencies.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#install"         className="btn btn-primary">Get Started →</a>
          <a href="#web-buybutton"   className="btn btn-secondary">Web Components</a>
          <a href="#rn-themedtext"   className="btn btn-secondary">Mobile Components</a>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        {[
          { name: 'Web UI Kit', badge: 'Web', color: '#3b82f6', desc: 'React & Next.js components. Pure HTML/CSS.', route: 'web-buybutton', icon: '🌐' },
          { name: 'Mobile UI Kit', badge: 'React Native', color: '#f97316', desc: 'Expo & React Native. Native gestures and Animated API.', route: 'rn-buybutton', icon: '📱' },
          { name: 'Otaga CLI', badge: 'CLI', color: '#8b5cf6', desc: 'Component generator CLI. Build modern apps faster.', route: 'installation', icon: '⚡' },
          { name: 'ThreeJS', badge: '3D', color: '#10b981', desc: 'Immersive 3D experiences and WebGL components.', route: 'overview', icon: '🧊' },
        ].map(p => (
          <div 
            key={p.name} 
            className="card" 
            style={{ padding: 20, cursor: 'pointer', transition: 'all 0.2s', display: 'flex', flexDirection: 'column' }}
            onClick={() => document.dispatchEvent(new CustomEvent('navigate', { detail: p.route }))}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: p.color, background: `${p.color}15`, padding: '4px 8px', borderRadius: 6 }}>
                {p.badge}
              </span>
              <span style={{ fontSize: 18 }}>{p.icon}</span>
            </div>
            <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{p.name}</p>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.55 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
