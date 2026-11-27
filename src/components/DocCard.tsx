import { useState, ReactNode } from 'react';
import { CodeBlock } from './CodeBlock';

export type PropRow = {
  name: string;
  type: string;
  default?: string;
  desc: string;
  required?: boolean;
};

type Tab = 'preview' | 'code' | 'props';

export function DocCard({
  id,
  title,
  description,
  preview,
  code,
  props,
  span,
}: {
  id?: string;
  title: string;
  description: string;
  preview: ReactNode;
  code: string;
  props: PropRow[];
  span?: number;
}) {
  const [tab, setTab] = useState<Tab>('preview');

  return (
    <div
      id={id}
      className="card"
      style={{
        overflow: 'hidden',
        gridColumn: span === 2 ? '1 / -1' : undefined,
        display: 'flex',
        flexDirection: 'column',
        scrollMarginTop: 24,
      }}
    >
      {/* ── Header ── */}
      <div style={{ padding: '20px 20px 0', borderBottom: '1px solid var(--border)' }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{title}</h3>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 14 }}>
          {description}
        </p>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 2 }}>
          {(['preview', 'code', 'props'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="doc-tab"
              style={{
                background: tab === t ? 'var(--bg)' : 'transparent',
                color: tab === t ? 'var(--text)' : 'var(--text-dim)',
                borderBottom: tab === t ? '2px solid var(--primary)' : '2px solid transparent',
              }}
            >
              <span>{t === 'preview' ? '▶' : t === 'code' ? '</>' : '⊞'}</span>
              <span style={{ textTransform: 'capitalize' }}>{t}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ padding: 20, flexGrow: 1, background: 'var(--bg)' }}>
        {tab === 'preview' && (
          <div
            className="animate-fade-in preview-bg"
            style={{
              borderRadius: 12,
              border: '1px solid var(--border)',
              padding: 24,
              width: '100%',
              overflow: 'visible',   /* allow Sidebar/BottomSheet overlays to escape */
              position: 'relative',
            }}
          >
            {preview}
          </div>
        )}

        {tab === 'code' && (
          <div className="animate-fade-in">
            <CodeBlock code={code} lang="tsx" />
          </div>
        )}

        {tab === 'props' && (
          <div className="animate-fade-in" style={{ overflowX: 'auto' }}>
            {props.length === 0 ? (
              <p style={{ color: 'var(--text-dim)', fontSize: 13, padding: '12px 0' }}>No props.</p>
            ) : (
              <table className="props-table">
                <thead>
                  <tr>
                    {['Prop', 'Type', 'Default', 'Description'].map(h => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {props.map((row, i) => (
                    <tr key={i}>
                      <td>
                        <code className="mono" style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: 12 }}>
                          {row.name}
                        </code>
                        {row.required && (
                          <span style={{
                            marginLeft: 6, fontSize: 9, fontWeight: 800,
                            color: '#f87171', background: '#f8717115',
                            padding: '2px 5px', borderRadius: 4, textTransform: 'uppercase',
                          }}>req</span>
                        )}
                      </td>
                      <td>
                        <code className="mono" style={{ color: 'var(--accent-purple)', fontSize: 12 }}>{row.type}</code>
                      </td>
                      <td>
                        {row.default
                          ? <code className="mono" style={{ color: 'var(--primary)', fontSize: 12 }}>{row.default}</code>
                          : <span style={{ color: 'var(--text-dim)' }}>—</span>}
                      </td>
                      <td style={{ color: 'var(--text-muted)', lineHeight: 1.5, minWidth: 160 }}>{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
