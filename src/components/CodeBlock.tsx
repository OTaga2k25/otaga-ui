import { useState, CSSProperties } from 'react';

export function CodeBlock({ code, lang = 'bash' }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="card"
      style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '9px 14px', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)',
      }}>
        <span className="mono" style={{ fontSize: 11, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {lang}
        </span>
        {/* Copy button — always visible, more prominent on hover */}
        <button
          onClick={copy}
          title="Copy to clipboard"
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            fontSize: 11, fontWeight: 600, fontFamily: 'inherit',
            color: copied ? 'var(--primary)' : (hovered ? 'var(--text-muted)' : 'var(--text-dim)'),
            background: copied ? 'var(--primary-dim)' : (hovered ? 'var(--surface-hover)' : 'transparent'),
            border: `1px solid ${copied ? 'rgba(16,185,129,0.3)' : (hovered ? 'var(--border-bright)' : 'transparent')}`,
            borderRadius: 6, cursor: 'pointer', padding: '3px 8px',
            transition: 'all 0.15s',
          }}
        >
          {copied ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre style={{
        padding: '16px 18px', margin: 0, fontSize: 12.5, lineHeight: 1.75,
        fontFamily: 'JetBrains Mono, monospace', color: '#c9d1d9',
        overflowX: 'auto', whiteSpace: 'pre', background: 'var(--code-bg)',
      } as CSSProperties}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function Tabs({ items }: { items: { label: string; content: React.ReactNode }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 16, overflowX: 'auto', paddingBottom: 4 }}>
        {items.map((item, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            padding: '8px 18px', fontSize: 13, fontWeight: 600,
            border: '1px solid transparent', borderRadius: 10, cursor: 'pointer',
            background: active === i ? 'var(--surface-hover)' : 'transparent',
            color: active === i ? 'var(--text)' : 'var(--text-muted)',
            borderColor: active === i ? 'var(--border-bright)' : 'transparent',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap',
          }}>
            {item.label}
          </button>
        ))}
      </div>
      <div className="animate-fade-in" key={active}>
        {items[active].content}
      </div>
    </div>
  );
}
