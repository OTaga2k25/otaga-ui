import { useState } from 'react';

export function CliDocs() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div>
      <div className="section-header">
        <span className="section-badge">CLI</span>
        <h2>Otaga UI CLI</h2>
        <p>A powerful command-line tool to initialize your project and inject components directly into your codebase.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        
        {/* Initialize */}
        <section>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>Initialize Project</h3>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 16 }}>
            Run the <code>init</code> command in the root of your project to set up your configuration file and create the required component directories.
          </p>
          <div className="code-block" style={{ marginBottom: 16 }}>
            <div className="code-block-header">
              <span style={{ fontSize: 11, color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Terminal</span>
              <button 
                onClick={() => copy('npx otaga-ui init')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: copied === 'npx otaga-ui init' ? 'var(--primary)' : 'var(--text-dim)' }}
              >
                {copied === 'npx otaga-ui init' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre><code>npx otaga-ui init</code></pre>
          </div>
          <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>
            This will prompt you for the directory where components should be installed (e.g., <code>components/ui</code>) and create an <code>otaga-ui.json</code> file to remember your preferences.
          </p>
        </section>

        {/* Add Components */}
        <section>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>Add Components</h3>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 16 }}>
            Use the <code>add</code> command to inject a specific component directly into your project. The CLI fetches the raw code from the repository and places it in your configured directory.
          </p>
          <div className="code-block" style={{ marginBottom: 16 }}>
            <div className="code-block-header">
              <span style={{ fontSize: 11, color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Terminal</span>
              <button 
                onClick={() => copy('npx otaga-ui add flip-card')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: copied === 'npx otaga-ui add flip-card' ? 'var(--primary)' : 'var(--text-dim)' }}
              >
                {copied === 'npx otaga-ui add flip-card' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre><code>npx otaga-ui add flip-card</code></pre>
          </div>
          <div className="callout callout-green" style={{ marginTop: 24 }}>
            <div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2 }}>
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" />
              </svg>
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--text)', marginBottom: 4 }}>You own the code!</strong>
              The CLI does not install a hidden NPM package. It copies the raw <code>.tsx</code> files directly into your project so you can fully customize the styling, animations, and logic to fit your specific needs.
            </div>
          </div>
        </section>

        {/* Add Multiple Components */}
        <section>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>Add Multiple Components</h3>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 16 }}>
            You can install several components at once by separating their names with a space.
          </p>
          <div className="code-block">
            <div className="code-block-header">
              <span style={{ fontSize: 11, color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Terminal</span>
              <button 
                onClick={() => copy('npx otaga-ui add bottom-sheet segmented-control')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: copied === 'npx otaga-ui add bottom-sheet segmented-control' ? 'var(--primary)' : 'var(--text-dim)' }}
              >
                {copied === 'npx otaga-ui add bottom-sheet segmented-control' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre><code>npx otaga-ui add bottom-sheet segmented-control</code></pre>
          </div>
        </section>

      </div>
    </div>
  );
}
