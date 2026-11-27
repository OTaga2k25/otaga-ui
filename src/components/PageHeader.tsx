export function PageHeader({
  category,
  title,
  description,
  pkg,
}: {
  category: string;
  title: string;
  description: string;
  pkg: string;
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
        <span style={{ fontSize: 12, color: 'var(--text-dim)' }}>Docs</span>
        <span style={{ fontSize: 12, color: 'var(--text-dim)' }}>/</span>
        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{category}</span>
        <span style={{ fontSize: 12, color: 'var(--text-dim)' }}>/</span>
        <span style={{ fontSize: 12, color: 'var(--text)', fontWeight: 600 }}>{title}</span>
      </div>

      {/* Title */}
      <h1 style={{
        fontSize: 'clamp(26px, 4vw, 40px)',
        fontWeight: 800,
        color: 'var(--text)',
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        marginBottom: 12,
      }}>{title}</h1>

      {/* Description */}
      <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 600, marginBottom: 20 }}>
        {description}
      </p>

      {/* Import line */}
      <div className="import-line">
        <code className="mono import-line-code">
          <span style={{ color: 'var(--text-dim)' }}>import </span>
          <span style={{ color: 'var(--text)' }}>{`{ ${title} } `}</span>
          <span style={{ color: 'var(--text-dim)' }}>from </span>
          <span style={{ color: 'var(--primary)' }}>'{pkg}'</span>
        </code>
      </div>
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontSize: 16, fontWeight: 700, color: 'var(--text)',
      marginTop: 48, marginBottom: 16,
      paddingBottom: 10,
      borderBottom: '1px solid var(--border)',
    }}>
      {children}
    </h2>
  );
}

export function PropsSection({ rows }: { rows: { name: string; type: string; default?: string; desc: string; required?: boolean }[] }) {
  return (
    <div style={{ marginTop: 48 }}>
      <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 16, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
        Props
      </h2>
      <div className="props-table-wrap">
        <table className="props-table" style={{ margin: 0 }}>
          <thead>
            <tr>
              {['Prop', 'Type', 'Default', 'Description'].map(h => <th key={h}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td data-label="Prop">
                  <code className="mono" style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: 12 }}>{row.name}</code>
                  {row.required && <span style={{ marginLeft: 6, fontSize: 9, fontWeight: 800, color: '#f87171', background: '#f8717115', padding: '2px 5px', borderRadius: 4, textTransform: 'uppercase' }}>req</span>}
                </td>
                <td data-label="Type"><code className="mono" style={{ color: 'var(--accent-purple)', fontSize: 12 }}>{row.type}</code></td>
                <td data-label="Default">{row.default ? <code className="mono" style={{ color: 'var(--primary)', fontSize: 12 }}>{row.default}</code> : <span style={{ color: 'var(--text-dim)' }}>—</span>}</td>
                <td data-label="Description" style={{ color: 'var(--text-muted)', lineHeight: 1.55 }}>{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function LivePreview({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div style={{ marginTop: 24 }}>
      {label && <p style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</p>}
      <div className="preview-bg" style={{ borderRadius: 12, border: '1px solid var(--border)', padding: 24, position: 'relative', overflowX: 'auto', overflowY: 'visible' }}>
        {children}
      </div>
    </div>
  );
}
