import { useState } from 'react';
import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { BottomSheet } from '@otaga/web-ui-kit';

export function WebBottomSheetPage() {
  const [visible, setVisible] = useState(true);

  const code = `import { BottomSheet } from '@otaga/web-ui-kit';
import { useState } from 'react';

function Example() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button onClick={() => setVisible(true)}>Open Sheet</button>

      <BottomSheet
        visible={visible}
        onClose={() => setVisible(false)}
        snapPoints={[280, 520]}
        backgroundColor="#ffffff"
        persistent={false}
      >
        <div style={{ padding: 24 }}>
          <h3>Sheet Content</h3>
          <p>Drag up to expand to the next snap point.</p>
        </div>
      </BottomSheet>
    </>
  );
}`;

  const props = [
    { name: 'visible', type: 'boolean', default: 'true', desc: 'Controls whether the bottom sheet is rendered and visible.' },
    { name: 'onClose', type: '() => void', default: '—', desc: 'Callback fired when the sheet is dismissed (drag the notch down past threshold or tap the backdrop).' },
    { name: 'children', type: 'ReactNode', default: '—', desc: 'Content rendered inside the sheet surface. Required.' },
    { name: 'snapPoints', type: 'number[]', default: '[300, 520]', desc: 'Array of snap-point heights in pixels. The sheet snaps to the nearest point on drag release.' },
    { name: 'backgroundColor', type: 'string', default: '—', desc: 'Background color of the sheet surface.' },
    { name: 'persistent', type: 'boolean', default: 'false', desc: 'When true, the sheet cannot be dismissed by dragging down or tapping the backdrop.' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="BottomSheet"
        description="Draggable bottom sheet with snap points. Features a floating notch pill handle above the sheet surface. Supports dismissible and persistent modes with multi-level snap expansion."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        {/* transform scopes position:fixed BottomSheet to this container */}
        <div style={{ position: 'relative', height: 320, transform: 'translateZ(0)', overflow: 'hidden', borderRadius: 12, background: 'var(--surface-2)' }}>
          {/* Background content — simulates a page behind the sheet */}
          <div style={{ padding: 24 }}>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>Page content sits behind the sheet.</p>
            <button
              onClick={() => setVisible(v => !v)}
              style={{
                padding: '8px 18px',
                background: 'var(--primary)',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {visible ? 'Close Sheet' : 'Open Sheet'}
            </button>
          </div>
          <BottomSheet
            visible={visible}
            onClose={() => setVisible(false)}
            snapPoints={[180, 310]}
            persistent={false}
          >
            <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 14, color: 'var(--text)' }}>Sheet Content</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Option A', 'Option B', 'Option C'].map(opt => (
                <div key={opt} onClick={() => setVisible(false)} style={{
                  padding: '11px 14px',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  cursor: 'pointer',
                  fontSize: 13,
                  color: 'var(--text)',
                }}>
                  {opt}
                </div>
              ))}
            </div>
          </BottomSheet>
        </div>
      </LivePreview>

      <SectionTitle>Mobile Preview</SectionTitle>
      <LivePreview>
        <div style={{ position: 'relative', height: 220, borderRadius: 12, overflow: 'hidden', background: 'var(--surface-2)' }}>
          {/* Backdrop */}
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
          {/* Sheet mock */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 160,
            backgroundColor: 'var(--surface)',
            borderTopLeftRadius: 32, borderTopRightRadius: 32,
            boxShadow: '0 -10px 20px rgba(0,0,0,0.15)',
            display: 'flex', flexDirection: 'column',
          }}>
            {/* Notch container — paddingBottom:20 matches rn-ui-kit notchContainer */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: -1, paddingBottom: 20, flexShrink: 0 }}>
              <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: 100, height: 30,
                backgroundColor: 'var(--surface)',
                borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              }}>
                <div style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: 'rgba(0,0,0,0.15)' }} />
              </div>
            </div>
            {/* Content */}
            <div style={{ padding: '0 20px' }}>
              <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: 'var(--text)' }}>BottomSheet works!</p>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: 0 }}>Drag the handle up to expand, or down to dismiss.</p>
            </div>
          </div>
        </div>
      </LivePreview>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}

