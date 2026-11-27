import { ReactNode, CSSProperties } from 'react';

export function PhoneMockup({ children, style, darkMode = false, overlay }: { children: ReactNode; style?: CSSProperties; darkMode?: boolean; overlay?: ReactNode }) {
  const tint = darkMode ? '#fff' : '#111';
  const bg = darkMode ? '#000' : '#fff';

  return (
    <div style={{
      position: 'relative',
      width: 270,
      flexShrink: 0,
      ...style,
    }}>
      {/* Power button */}
      <div style={{
        position: 'absolute', right: -3, top: 100,
        width: 3, height: 64, borderRadius: '0 2px 2px 0',
        background: 'linear-gradient(180deg,#3a3a3a,#2a2a2a)',
      }} />
      
      {/* Volume buttons */}
      {[72, 120, 164].map((top, i) => (
        <div key={i} style={{
          position: 'absolute', left: -3, top,
          width: 3, height: i === 0 ? 32 : 44,
          borderRadius: '2px 0 0 2px',
          background: 'linear-gradient(180deg,#3a3a3a,#2a2a2a)',
        }} />
      ))}

      {/* Device frame */}
      <div style={{
        background: 'linear-gradient(145deg, #1f1f1f, #0d0d0d)',
        borderRadius: 52,
        padding: 10,
        boxShadow: `
          inset 0 0 0 1.5px #3a3a3a,
          inset 0 0 0 3px #111,
          0 40px 100px rgba(0,0,0,0.8),
          0 15px 40px rgba(0,0,0,0.5)
        `,
      }}>
        {/* Screen */}
        <div style={{
          borderRadius: 42,
          overflow: 'hidden',
          background: bg,
          position: 'relative',
          aspectRatio: '9/19.5',
          border: `1px solid ${darkMode ? '#222' : '#eee'}`
        }}>
          {/* Dynamic island */}
          <div style={{
            position: 'absolute', top: 12, left: '50%',
            transform: 'translateX(-50%)',
            width: 88, height: 26,
            background: '#111',
            borderRadius: 20,
            zIndex: 30,
          }} />

          {/* Status bar time */}
          <div style={{
            position: 'absolute', top: 16, left: 24,
            fontSize: 11, fontWeight: 700, color: tint,
            zIndex: 30, fontFamily: 'Outfit, sans-serif',
          }}>9:41</div>

          {/* Status icons */}
          <div style={{
            position: 'absolute', top: 18, right: 20,
            display: 'flex', gap: 4, alignItems: 'center', zIndex: 30,
          }}>
            {[4,6,8,10].map((h,i) => (
              <div key={i} style={{ width: 3, height: h, background: tint, borderRadius: 1, alignSelf: 'flex-end', opacity: 0.8 }} />
            ))}
            <div style={{ width: 2 }} />
            <div style={{
              width: 20, height: 10, border: `1.5px solid ${tint}`,
              borderRadius: 3, position: 'relative', marginLeft: 2, opacity: 0.8
            }}>
              <div style={{ position: 'absolute', right: -4, top: 2, width: 2, height: 5, background: tint, borderRadius: '0 1px 1px 0' }} />
              <div style={{ margin: 1, background: tint, height: 5, width: '80%', borderRadius: 1 }} />
            </div>
          </div>

          {/* Scrollable screen content */}
          <div style={{ width: '100%', height: '100%', overflowY: 'auto', paddingTop: 56, scrollbarWidth: 'none' }}>
            <style>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>
            {children}
          </div>

          {/* Overlay slot — renders absolutely inside the screen, above content */}
          {overlay}

          {/* Home indicator */}
          <div style={{
            position: 'absolute', bottom: 8, left: '50%',
            transform: 'translateX(-50%)',
            width: 88, height: 4, background: tint,
            borderRadius: 10, zIndex: 30, opacity: 0.2
          }} />
        </div>
      </div>
    </div>
  );
}
