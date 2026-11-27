import { useState } from 'react';
import { Icon, ICON_CATEGORIES, IconName } from '@otaga/web-ui-kit';

export function IconGallery() {
  const [search, setSearch]     = useState('');
  const [copied, setCopied]     = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...Object.keys(ICON_CATEGORIES)];

  const copy = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopied(name);
    setTimeout(() => setCopied(''), 1800);
  };

  const allInCategory = activeTab === 'All'
    ? Object.values(ICON_CATEGORIES).flat()
    : (ICON_CATEGORIES[activeTab] ?? []);

  const filtered = search
    ? allInCategory.filter(n => n.toLowerCase().includes(search.toLowerCase()))
    : allInCategory;

  return (
    <div className="animate-fade-in">
      {/* Search + count */}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 20, alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: '1 1 240px' }}>
          <div style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>
            <Icon name="magnifyingglass" size={16} color="var(--text-muted)" />
          </div>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search icons…"
            style={{
              width: '100%', padding: '12px 14px 12px 42px',
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 12, color: 'var(--text)', fontSize: 14,
              outline: 'none', transition: 'border-color 0.2s',
            }}
            onFocus={e => e.currentTarget.style.borderColor = 'var(--border-bright)'}
            onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
          />
        </div>
        <span style={{ fontSize: 13, color: 'var(--text-dim)', fontWeight: 500 }}>
          {filtered.length} icon{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Category tabs */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 24, overflowX: 'auto', paddingBottom: 4 }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => { setActiveTab(cat); setSearch(''); }}
            style={{
              padding: '6px 14px', fontSize: 12, fontWeight: 600,
              border: '1px solid transparent', borderRadius: 10, cursor: 'pointer',
              background: activeTab === cat ? 'var(--primary)' : 'var(--surface)',
              color: activeTab === cat ? '#fff' : 'var(--text-muted)',
              borderColor: activeTab === cat ? 'transparent' : 'var(--border)',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Icon grid */}
      {filtered.length === 0 ? (
        <div style={{ padding: '60px 0', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-dim)', fontSize: 14 }}>No icons match "{search}"</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
          gap: 12,
        }}>
          {filtered.map(name => {
            const isCopied = copied === name;
            return (
              <button
                key={name}
                onClick={() => copy(name)}
                title={`Click to copy "${name}"`}
                style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: 10, padding: '20px 10px',
                  background: isCopied ? 'var(--primary-glow)' : 'var(--surface)',
                  border: `1px solid ${isCopied ? 'var(--primary)' : 'var(--border)'}`,
                  borderRadius: 16, cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={e => {
                  if (!isCopied) {
                    (e.currentTarget as HTMLButtonElement).style.background = 'var(--surface-hover)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-bright)';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isCopied) {
                    (e.currentTarget as HTMLButtonElement).style.background = 'var(--surface)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  }
                }}
              >
                <Icon
                  name={name as IconName}
                  size={24}
                  color={isCopied ? 'var(--primary)' : 'var(--text)'}
                />
                <span className="mono" style={{
                  fontSize: 10, color: isCopied ? 'var(--primary)' : 'var(--text-dim)',
                  textAlign: 'center', lineHeight: 1.2,
                  wordBreak: 'break-all',
                  maxWidth: '100%',
                }}>
                  {isCopied ? '✓ Copied' : name}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <div style={{ marginTop: 32, padding: '16px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)' }}>
        <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.6 }}>
          💡 Click any icon to copy its name. Use it with the <code className="mono" style={{ color: 'var(--accent-blue)' }}>name</code> prop in your components.
        </p>
      </div>
    </div>
  );
}
