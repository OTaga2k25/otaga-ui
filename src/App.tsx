import { useState, useEffect, useCallback, useRef, KeyboardEvent } from 'react';

// Pages
import { Home }                  from './pages/Home';
import { Overview }              from './pages/Overview';
import { Installation }          from './pages/Installation';
import { CliDocs }               from './pages/CliDocs';
import { WebBuyButtonPage }      from './pages/WebBuyButton';
import { WebCartButtonPage }     from './pages/WebCartButton';
import { WebSegmentedControlPage } from './pages/WebSegmentedControl';
import { WebCollapsiblePage }    from './pages/WebCollapsible';
import { WebThemedTextPage }     from './pages/WebThemedText';
import { WebThemedViewPage }     from './pages/WebThemedView';
import { WebBottomBarPage }      from './pages/WebBottomBar';
import { WebSidebarPage }        from './pages/WebSidebar';
import { WebBottomSheetPage }    from './pages/WebBottomSheet';
import { WebIconsPage }          from './pages/WebIcons';
import { WebFlipCardPage }          from './pages/WebFlipCard';
import { WebAuthFlipCardPage }      from './pages/WebAuthFlipCard';
import { WebLoginFormPage }         from './pages/WebLoginForm';
import { WebSubscribeCardPage }     from './pages/WebSubscribeCard';
import { WebSignInCardPage }        from './pages/WebSignInCard';
import { WebWelcomeBackFormPage }   from './pages/WebWelcomeBackForm';
import { WebDarkLoginBoxPage }      from './pages/WebDarkLoginBox';
import { WebPurpleLoginFormPage }   from './pages/WebPurpleLoginForm';
import { WebImageSwiperPage }       from './pages/WebImageSwiper';
import { WebInfiniteGridPage }      from './pages/WebInfiniteGrid';
import { WebExpandedTabsPage }      from './pages/WebExpandedTabs';
import { WebCardCarouselPage }      from './pages/WebCardCarousel';
import { WebImageCarouselPage }     from './pages/WebImageCarousel';
import { WebDockPage }              from './pages/WebDock';
import { WebChatBotCardPage }       from './pages/WebChatBotCard';
import { WebFileUploadPage }        from './pages/WebFileUpload';
import { WebBrutalistTaskCardPage } from './pages/WebBrutalistTaskCard';
import { MobileBuyButtonPage }      from './pages/MobileBuyButton';
import { MobileCartButtonPage }  from './pages/MobileCartButton';
import { MobileCollapsiblePage } from './pages/MobileCollapsible';
import { MobileBottomBarPage }   from './pages/MobileBottomBar';
import { MobileSidebarPage }     from './pages/MobileSidebar';
import { MobileBottomSheetPage } from './pages/MobileBottomSheet';
import { MobileIconSymbolPage }  from './pages/MobileIconSymbol';
import { MobileFlipCardPage }         from './pages/MobileFlipCard';
import { MobileAuthFlipCardPage }     from './pages/MobileAuthFlipCard';
import { MobileLoginFormPage }        from './pages/MobileLoginForm';
import { MobileSubscribeCardPage }    from './pages/MobileSubscribeCard';
import { MobileSignInCardPage }       from './pages/MobileSignInCard';
import { MobileWelcomeBackFormPage }  from './pages/MobileWelcomeBackForm';
import { MobileDarkLoginBoxPage }     from './pages/MobileDarkLoginBox';
import { MobilePurpleLoginFormPage }  from './pages/MobilePurpleLoginForm';
import { MobileImageSwiperPage }      from './pages/MobileImageSwiper';
import { MobileExpandedTabsPage }    from './pages/MobileExpandedTabs';
import { MobileCardCarouselPage }    from './pages/MobileCardCarousel';
import { MobileImageCarouselPage }   from './pages/MobileImageCarousel';
import { MobileDockPage }            from './pages/MobileDock';
import { MobileChatBotCardPage }     from './pages/MobileChatBotCard';
import { MobileBrutalistTaskCardPage } from './pages/MobileBrutalistTaskCard';
import { ThreeInstallation }           from './pages/ThreeInstallation';
import { ThreeFloatingCardPage }       from './pages/ThreeFloatingCard';
import { ThreeGlowCardPage }           from './pages/ThreeGlowCard';
import { ThreeParticleBackgroundPage } from './pages/ThreeParticleBackground';
import { ThreeRippleEffectPage }       from './pages/ThreeRippleEffect';
import { ThreeMorphTextPage }          from './pages/ThreeMorphText';
/* ── Route map ── */
const PAGES: Record<string, React.FC> = {
  'overview':            Overview,
  'installation':        Installation,
  'cli-docs':            CliDocs,
  'web-installation':    Installation,
  'web-buybutton':       WebBuyButtonPage,
  'web-cartbutton':      WebCartButtonPage,
  'web-segmentedcontrol': WebSegmentedControlPage,
  'web-collapsible':     WebCollapsiblePage,
  'web-themedtext':      WebThemedTextPage,
  'web-themedview':      WebThemedViewPage,
  'web-bottombar':       WebBottomBarPage,
  'web-sidebar':         WebSidebarPage,
  'web-bottomsheet':     WebBottomSheetPage,
  'web-icons':           WebIconsPage,
  'web-flipcard':        WebFlipCardPage,
  'web-authflipcard':   WebAuthFlipCardPage,
  'web-loginform':      WebLoginFormPage,
  'web-subscribecard':  WebSubscribeCardPage,
  'web-signincard':     WebSignInCardPage,
  'web-welcomeback':    WebWelcomeBackFormPage,
  'web-darkloginbox':   WebDarkLoginBoxPage,
  'web-purplelogin':    WebPurpleLoginFormPage,
  'web-imageswiper':    WebImageSwiperPage,
  'web-infinitegrid':   WebInfiniteGridPage,
  'web-expandedtabs':   WebExpandedTabsPage,
  'web-cardcarousel':   WebCardCarouselPage,
  'web-imagecarousel':  WebImageCarouselPage,
  'web-dock':           WebDockPage,
  'web-chatbotcard':    WebChatBotCardPage,
  'web-fileupload':     WebFileUploadPage,
  'web-brutalisttask':  WebBrutalistTaskCardPage,
  'rn-installation':     Installation,
  'rn-buybutton':        MobileBuyButtonPage,
  'rn-cartbutton':       MobileCartButtonPage,
  'rn-collapsible':      MobileCollapsiblePage,
  'rn-bottombar':        MobileBottomBarPage,
  'rn-sidebar':          MobileSidebarPage,
  'rn-bottomsheet':      MobileBottomSheetPage,
  'rn-iconsymbol':       MobileIconSymbolPage,
  'rn-flipcard':         MobileFlipCardPage,
  'rn-authflipcard':    MobileAuthFlipCardPage,
  'rn-loginform':       MobileLoginFormPage,
  'rn-subscribecard':   MobileSubscribeCardPage,
  'rn-signincard':      MobileSignInCardPage,
  'rn-welcomeback':     MobileWelcomeBackFormPage,
  'rn-darkloginbox':    MobileDarkLoginBoxPage,
  'rn-purplelogin':     MobilePurpleLoginFormPage,
  'rn-imageswiper':     MobileImageSwiperPage,
  'rn-expandedtabs':    MobileExpandedTabsPage,
  'rn-cardcarousel':    MobileCardCarouselPage,
  'rn-imagecarousel':   MobileImageCarouselPage,
  'rn-dock':            MobileDockPage,
  'rn-chatbotcard':     MobileChatBotCardPage,
  'rn-brutalisttask':   MobileBrutalistTaskCardPage,
  '3d-installation':   ThreeInstallation,
  '3d-floatingcard':   ThreeFloatingCardPage,
  '3d-glowcard':       ThreeGlowCardPage,
  '3d-particlebg':     ThreeParticleBackgroundPage,
  '3d-ripple':         ThreeRippleEffectPage,
  '3d-morphtext':      ThreeMorphTextPage,
};

/* ── Sidebar navigation ── */
const NAV = [
  {
    label: 'Getting Started',
    items: [
      { id: 'overview',      label: 'Overview' },
    ],
  },
  {
    label: 'Three Effects',
    badge: '3d',
    badgeColor: '#a855f7',
    items: [
      { id: '3d-installation', label: 'Installation' },
      { id: '3d-floatingcard', label: 'FloatingCard' },
      { id: '3d-glowcard',     label: 'GlowCard' },
      { id: '3d-particlebg',   label: 'ParticleBackground' },
      { id: '3d-ripple',       label: 'RippleEffect' },
      { id: '3d-morphtext',    label: 'MorphText' },
    ],
  },
  {
    label: 'Web UI Kit',
    badge: 'web',
    badgeColor: '#3b82f6',
    items: [
      { id: 'web-installation',     label: 'Installation' },
      { id: 'web-buybutton',        label: 'BuyButton' },
      { id: 'web-cartbutton',       label: 'CartButton' },
      { id: 'web-segmentedcontrol', label: 'SegmentedControl' },
      { id: 'web-collapsible',      label: 'Collapsible' },
      { id: 'web-themedtext',       label: 'ThemedText' },
      { id: 'web-themedview',       label: 'ThemedView' },
      { id: 'web-bottombar',        label: 'BottomBar' },
      { id: 'web-sidebar',          label: 'Sidebar' },
      { id: 'web-bottomsheet',      label: 'BottomSheet' },
      { id: 'web-icons',            label: 'Icons' },
      { id: 'web-flipcard',         label: 'FlipCard' },
      { id: 'web-authflipcard',    label: 'AuthFlipCard' },
      { id: 'web-loginform',       label: 'LoginForm' },
      { id: 'web-subscribecard',   label: 'SubscribeCard' },
      { id: 'web-signincard',      label: 'SignInCard' },
      { id: 'web-welcomeback',     label: 'WelcomeBackForm' },
      { id: 'web-darkloginbox',    label: 'DarkLoginBox' },
      { id: 'web-purplelogin',     label: 'PurpleLoginForm' },
      { id: 'web-imageswiper',     label: 'ImageSwiper' },
      { id: 'web-infinitegrid',    label: 'InfiniteGrid' },
      { id: 'web-expandedtabs',    label: 'ExpandedTabs' },
      { id: 'web-cardcarousel',    label: 'CardCarousel' },
      { id: 'web-imagecarousel',   label: 'ImageCarousel' },
      { id: 'web-dock',            label: 'Dock' },
      { id: 'web-chatbotcard',     label: 'ChatBotCard' },
      { id: 'web-fileupload',      label: 'FileUpload' },
      { id: 'web-brutalisttask',   label: 'BrutalistTaskCard' },
    ],
  },
  {
    label: 'Mobile UI Kit',
    badge: 'rn',
    badgeColor: '#f97316',
    items: [
      { id: 'rn-installation',      label: 'Installation' },
      { id: 'rn-buybutton',         label: 'BuyButton' },
      { id: 'rn-cartbutton',        label: 'CartButton' },
      { id: 'rn-collapsible',       label: 'Collapsible' },
      { id: 'rn-bottombar',         label: 'BottomBar' },
      { id: 'rn-sidebar',           label: 'Sidebar' },
      { id: 'rn-bottomsheet',       label: 'BottomSheet' },
      { id: 'rn-iconsymbol',        label: 'IconSymbol' },
      { id: 'rn-flipcard',          label: 'FlipCard' },
      { id: 'rn-authflipcard',     label: 'AuthFlipCard' },
      { id: 'rn-loginform',        label: 'LoginForm' },
      { id: 'rn-subscribecard',    label: 'SubscribeCard' },
      { id: 'rn-signincard',       label: 'SignInCard' },
      { id: 'rn-welcomeback',      label: 'WelcomeBackForm' },
      { id: 'rn-darkloginbox',     label: 'DarkLoginBox' },
      { id: 'rn-purplelogin',      label: 'PurpleLoginForm' },
      { id: 'rn-imageswiper',      label: 'ImageSwiper' },
      { id: 'rn-expandedtabs',     label: 'ExpandedTabs' },
      { id: 'rn-cardcarousel',     label: 'CardCarousel' },
      { id: 'rn-imagecarousel',    label: 'ImageCarousel' },
      { id: 'rn-dock',             label: 'Dock' },
      { id: 'rn-chatbotcard',      label: 'ChatBotCard' },
      { id: 'rn-brutalisttask',    label: 'BrutalistTaskCard' },
    ],
  },
];

const getRouteFromURL = () => {
  const path = window.location.pathname.slice(1).split('/')[0];
  if (!path || path === 'home') return 'home';
  return PAGES[path] ? path : 'home';
};

type Section = 'web' | 'rn' | '3d' | 'cli';

function getSection(id: string): Section | null {
  if (id.startsWith('web-')) return 'web';
  if (id.startsWith('rn-'))  return 'rn';
  if (id.startsWith('3d-'))  return '3d';
  if (id === 'cli-docs')     return 'cli';
  return null;
}

export default function App() {
  const [active, setActive] = useState(getRouteFromURL);

  // Synchronously derived from active — never stale, no async lag
  const activeSection = getSection(active);

  // Persists last known section for overview pages (sidebar context memory)
  const [lastSection, setLastSection] = useState<Section | null>(() =>
    localStorage.getItem('otaga-section') as Section | null
  );

  useEffect(() => {
    if (activeSection) {
      setLastSection(activeSection);
      localStorage.setItem('otaga-section', activeSection);
    }
  }, [activeSection]);

  // Use activeSection when on a section page, fall back to lastSection on overview
  const currentSection = activeSection ?? lastSection;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery]           = useState('');
  const [resultIdx, setResultIdx]   = useState(0);
  const [theme, setTheme]           = useState<'dark' | 'light'>('dark');
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Sync active page when browser back/forward is used
  useEffect(() => {
    const handler = () => setActive(getRouteFromURL());
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  // Flatten all nav items for searching
  const allItems = NAV.flatMap(s =>
    s.items.map(item => ({ ...item, section: s.label, badgeColor: s.badgeColor ?? '#888' }))
  );

  const results = query.trim()
    ? allItems.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.section.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const showDropdown = query.trim().length > 0;

  const navigate = useCallback((id: string) => {
    if (id === 'home') {
      setActive('home');
      window.history.pushState({}, '', '/');
      return;
    }
    if (!PAGES[id]) return;
    setActive(id);
    window.history.pushState({}, '', `/${id}`);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Listen for programmatic navigation events (used in Overview page cards)
  useEffect(() => {
    const handler = (e: Event) => navigate((e as CustomEvent).detail);
    document.addEventListener('navigate', handler);
    return () => document.removeEventListener('navigate', handler);
  }, [navigate]);

  // Close search on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.search-wrap')) setQuery('');
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // ⌘K / Ctrl+K focuses search
  useEffect(() => {
    const handler = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setQuery('');
        searchRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const handleSearchKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setResultIdx(i => Math.min(i + 1, results.length - 1)); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setResultIdx(i => Math.max(i - 1, 0)); }
    if (e.key === 'Enter')     { navigate(results[resultIdx].id); setQuery(''); }
  };

  const PageComponent = PAGES[active] ?? Overview;

  if (active === 'home') {
    return <Home navigate={navigate} theme={theme} setTheme={setTheme} />;
  }

  const getBannerContent = () => {
    switch (currentSection) {
      case 'web': return { title: 'React Web', desc: 'Beautiful, accessible React components for the web. Built with modern styling and fluid animations.' };
      case 'rn': return { title: 'React Native', desc: 'High-fidelity, cross-platform UI kit for iOS and Android, ready for production.' };
      case '3d': return { title: 'Three.js', desc: 'Immersive 3D effects and canvas components powered by React Three Fiber.' };
      case 'cli': return { title: 'Otaga CLI', desc: 'Command-line tools for scaffolding, generating components, and managing your workspace.' };
      default: return { title: 'Docs', desc: 'Reference for Otaga across React, React Native, and Three.js, plus our CLI developer tools. Features live examples and copy-paste snippets for every API.' };
    }
  };
  const banner = getBannerContent();

  return (
    <div className="shell">

      {/* ── Mobile topbar ── */}
      <header className="topbar">
        <button
          onClick={() => setMobileOpen(v => !v)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 4, display: 'flex' }}
          aria-label="Open menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6"  x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <span style={{ fontWeight: 800, fontSize: 16, color: 'var(--text)', letterSpacing: '-0.3px' }}>
          otaga <span className="mono" style={{ color: 'var(--primary)', fontSize: 11 }}>ui</span>
        </span>
        <div style={{ width: 28 }} />
      </header>

      {/* ── Sidebar ── */}
      {mobileOpen && (
        <div onClick={() => setMobileOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', zIndex: 199 }} />
      )}

      <aside className={`sidebar${mobileOpen ? ' mobile-open' : ''}`}>
        {/* Yellow Header (Matches Main Banner) */}
        <div style={{
          height: '15vh',
          minHeight: '160px',
          background: '#FFE600',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          flexShrink: 0,
        }}>
          {/* ASCII Pattern Background */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
            <div style={{
              position: 'absolute', inset: 0, opacity: 0.15, color: '#000',
              fontSize: '14px', lineHeight: 1, letterSpacing: '0.5em', fontFamily: 'monospace',
              whiteSpace: 'pre', userSelect: 'none'
            }}>
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                  {Array.from({ length: 30 }).map((_, j) => {
                    const char = Math.random() > 0.5 ? '/' : Math.random() > 0.5 ? '+' : '\\';
                    return <span key={j}>{char}</span>;
                  })}
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative', zIndex: 1, padding: '20px 20px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
              <span style={{ fontSize: 18, fontWeight: 800, color: '#000', letterSpacing: '-0.3px' }}>otaga</span>
              <span className="mono" style={{ fontSize: 11, color: '#16a34a' }}>ui</span>
            </div>
            <p style={{ fontSize: 11, color: 'rgba(0,0,0,0.6)' }}>Component library docs</p>
          </div>

          {/* Search */}
          <div className="search-wrap" style={{ padding: '0 12px', position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'var(--surface-2)', border: `1px solid ${showDropdown ? 'var(--border-bright)' : 'rgba(0,0,0,0.1)'}`,
              borderRadius: showDropdown ? '8px 8px 0 0' : 8,
              padding: '7px 10px',
              transition: 'border-color 0.15s',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchRef}
                value={query}
                onChange={e => { setQuery(e.target.value); setResultIdx(0); }}
                onKeyDown={handleSearchKey}
                placeholder="Search docs…"
                style={{
                  flex: 1, background: 'none', border: 'none', outline: 'none',
                  fontSize: 12, color: 'var(--text)', fontFamily: 'inherit',
                }}
              />
              {query ? (
                <button onClick={() => setQuery('')} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--text-dim)', fontSize: 14, padding: 0, lineHeight: 1,
                }}>✕</button>
              ) : (
                <span style={{ fontSize: 10, color: 'var(--text-dim)', background: 'var(--surface)', border: '1px solid var(--border)', padding: '1px 5px', borderRadius: 4, fontFamily: 'monospace', flexShrink: 0 }}>⌘K</span>
              )}
            </div>

            {/* Results dropdown */}
            {showDropdown && (
              <div style={{
                position: 'absolute', left: 12, right: 12, top: '100%',
                background: 'var(--surface-2)', border: '1px solid var(--border-bright)',
                borderTop: 'none', borderRadius: '0 0 8px 8px',
                zIndex: 50, overflow: 'hidden', marginTop: -1,
                boxShadow: '0 12px 24px rgba(0,0,0,0.2)'
              }}>
              {results.length === 0 ? (
                <div style={{ padding: '12px 14px', fontSize: 12, color: 'var(--text-dim)' }}>
                  No results for "<strong style={{ color: 'var(--text-muted)' }}>{query}</strong>"
                </div>
              ) : (
                results.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => { navigate(item.id); setQuery(''); }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      width: '100%', padding: '9px 12px',
                      background: i === resultIdx ? 'var(--surface-hover)' : 'transparent',
                      border: 'none', cursor: 'pointer', textAlign: 'left',
                      borderBottom: i < results.length - 1 ? '1px solid var(--border)' : 'none',
                      fontFamily: 'inherit',
                    }}
                    onMouseEnter={() => setResultIdx(i)}
                  >
                    <span style={{
                      fontSize: 9, fontWeight: 700, textTransform: 'uppercase',
                      letterSpacing: '0.05em', color: item.badgeColor,
                      background: `${item.badgeColor}18`,
                      padding: '2px 6px', borderRadius: 4, flexShrink: 0,
                    }}>
                      {item.section === 'Getting Started' ? 'docs' : item.section.includes('Web') ? 'web' : item.section.includes('Three') ? '3d' : 'rn'}
                    </span>
                    <span style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>
                      {item.label}
                    </span>
                    <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text-dim)' }}>
                      {item.section}
                    </span>
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Nav */}
        <nav className="sidebar-nav" data-lenis-prevent>
          <div style={{ padding: '8px 12px 4px' }}>
            <button
              onClick={() => navigate('home')}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: 'var(--surface-2)', border: '1px solid var(--border)',
                borderRadius: 8, cursor: 'pointer', padding: '6px 10px',
                color: 'var(--text)', fontSize: 11, fontWeight: 600,
                fontFamily: 'inherit', width: '100%'
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Home
            </button>
          </div>
          
          {NAV.filter(section => {
            if (section.label === 'Getting Started') return true;
            if (!activeSection) return true;
            if (activeSection === 'cli') return section.label === 'CLI Tools';
            if (activeSection === 'web') return section.label === 'Web UI Kit';
            if (activeSection === 'rn') return section.label === 'Mobile UI Kit';
            if (activeSection === '3d') return section.label === 'Three Effects';
            return false;
          }).map(section => (
            <div key={section.label}>
              <div className="sidebar-section-label">
                <span>{section.label}</span>
                {section.badge && (
                  <span style={{
                    fontSize: 9, fontWeight: 800, padding: '1px 6px', borderRadius: 4,
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                    color: section.badgeColor, background: `${section.badgeColor}18`,
                    marginLeft: 6,
                  }}>{section.badge}</span>
                )}
              </div>
              {section.items.map(item => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`sidebar-link${active === item.id ? ' active' : ''}`}
                >
                  <span className="dot" />
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border)', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <a
                href="https://www.npmjs.com/~alanalz77"
                target="_blank" rel="noreferrer"
                style={{ fontSize: 10, fontWeight: 700, color: '#cb3837', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 3 }}
              >
                <svg width="16" height="11" viewBox="0 0 18 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="7" fill="#cb3837"/>
                  <rect x="1" y="1" width="4" height="5" fill="white"/>
                  <rect x="2" y="1" width="1" height="4" fill="#cb3837"/>
                  <rect x="6" y="1" width="4" height="5" fill="white"/>
                  <rect x="7" y="1" width="1" height="3" fill="#cb3837"/>
                  <rect x="11" y="1" width="4" height="4" fill="white"/>
                  <rect x="12" y="1" width="1" height="3" fill="#cb3837"/>
                  <rect x="14" y="1" width="1" height="3" fill="#cb3837"/>
                </svg>
                npm
              </a>
              <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--primary)' }}>MIT</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-dim)' }}>v1.0</span>
            </div>
            <button
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                display: 'flex', alignItems: 'center', gap: 5,
                background: 'var(--surface-hover)', border: '1px solid var(--border-bright)',
                borderRadius: 20, cursor: 'pointer', padding: '4px 10px',
                color: 'var(--text-muted)', fontSize: 11, fontWeight: 600,
                fontFamily: 'inherit', lineHeight: 1, transition: 'all 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--text)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--text-dim)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-bright)'; }}
            >
              {theme === 'dark' ? (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  Light
                </>
              ) : (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  Dark
                </>
              )}
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <a
              href="https://www.npmjs.com/package/@otaga/rn-ui-kit"
              target="_blank" rel="noreferrer"
              style={{ fontSize: 9, color: 'var(--text-dim)', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 4, padding: '2px 6px', fontFamily: 'monospace', textDecoration: 'none' }}
            >
              @otaga/rn-ui-kit ↗
            </a>
            <a
              href="https://www.npmjs.com/~alanalz77"
              target="_blank" rel="noreferrer"
              style={{ fontSize: 9, color: 'var(--text-dim)', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 4, padding: '2px 6px', fontFamily: 'monospace', textDecoration: 'none' }}
            >
              npm profile ↗
            </a>
          </div>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main id="main-scroll" className="main-scroll">
        
        {/* GLOBAL TOP HEADER - PERSISTENT EVERYWHERE */}
        <div style={{ width: '100%', position: 'relative', zIndex: 10 }}>
          {/* Yellow background with ASCII */}
          <div style={{
            width: '100%',
            height: '15vh',
            minHeight: '160px',
            backgroundColor: '#FFE600',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* ASCII Pattern */}
            <div style={{
              position: 'absolute', inset: 0, opacity: 0.15, color: '#000',
              fontSize: '14px', lineHeight: 1, letterSpacing: '0.5em', fontFamily: 'monospace',
              whiteSpace: 'pre', overflow: 'hidden', userSelect: 'none', pointerEvents: 'none', zIndex: 0
            }}>
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                  {Array.from({ length: 250 }).map((_, j) => {
                    const char = Math.random() > 0.5 ? '/' : Math.random() > 0.5 ? '+' : '\\';
                    return <span key={j}>{char}</span>;
                  })}
                </div>
              ))}
            </div>
          </div>
          
          {/* Black Docs Card perfectly aligned with right content */}
          <div style={{
            marginTop: '-80px',
            position: 'relative',
            zIndex: 10,
            maxWidth: 1100,
            margin: '-80px auto 0 auto',
            padding: '0 48px'
          }}>
            <div style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderTop: 'none',
              borderRadius: '0 0 16px 16px',
              padding: '40px 48px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
              maxWidth: 700
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: 32, textTransform: 'uppercase' }}>
                <span>DOCUMENTATION</span>
                <span style={{ color: 'var(--primary)' }}>V1.0.0</span>
              </div>
              <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 900, letterSpacing: '-0.04em', margin: 0, marginBottom: 16, color: 'var(--text)' }}>
                {banner.title}
              </h1>
              <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 560, margin: 0 }}>
                {banner.desc}
              </p>
            </div>
          </div>
        </div>

        <div className="content-wrap">
          {/* Page content — re-mounts on navigation */}
          <div key={active} className="animate-fade-in" style={{ paddingTop: 40, paddingBottom: 80 }}>
            {/* @ts-ignore */}
            <PageComponent active={active} navigate={navigate} />
          </div>

          {/* Prev / Next navigation */}
          <PageNav active={active} navigate={navigate} currentSection={currentSection} />
        </div>
      </main>
    </div>
  );
}

/* ── Prev / Next bottom nav ── */
function PageNav({ active, navigate, currentSection }: { active: string; navigate: (id: string) => void; currentSection: Section | null }) {
  const filteredNav = NAV.filter(section => {
    if (section.label === 'Getting Started') return true;
    if (!currentSection) return true;
    if (currentSection === 'cli') return section.label === 'CLI Tools';
    if (currentSection === 'web') return section.label === 'Web UI Kit';
    if (currentSection === 'rn') return section.label === 'Mobile UI Kit';
    if (currentSection === '3d') return section.label === 'Three Effects';
    return false;
  });

  const allPages = filteredNav.flatMap(s => s.items);
  const idx = allPages.findIndex(p => p.id === active);
  const prev = idx > 0 ? allPages[idx - 1] : null;
  const next = idx < allPages.length - 1 ? allPages[idx + 1] : null;
  const section = (id: string) => NAV.find(s => s.items.some(i => i.id === id))?.label ?? '';

  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      gap: 16, marginTop: 64, paddingTop: 24,
      borderTop: '1px solid var(--border)',
    }}>
      {prev ? (
        <button onClick={() => navigate(prev.id)} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 10, padding: '12px 18px', cursor: 'pointer',
          textAlign: 'left', transition: 'border-color 0.15s', flex: 1, maxWidth: 280,
          fontFamily: 'inherit',
        }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-bright)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
        >
          <span style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 4 }}>← Previous</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{prev.label}</span>
          <span style={{ fontSize: 11, color: 'var(--text-dim)', marginTop: 2 }}>{section(prev.id)}</span>
        </button>
      ) : <div />}

      {next ? (
        <button onClick={() => navigate(next.id)} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 10, padding: '12px 18px', cursor: 'pointer',
          textAlign: 'right', transition: 'border-color 0.15s', flex: 1, maxWidth: 280,
          fontFamily: 'inherit',
        }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-bright)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
        >
          <span style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 4 }}>Next →</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{next.label}</span>
          <span style={{ fontSize: 11, color: 'var(--text-dim)', marginTop: 2 }}>{section(next.id)}</span>
        </button>
      ) : <div />}
    </div>
  );
}
