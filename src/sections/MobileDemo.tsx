import { useState, CSSProperties } from 'react';
import {
  BuyButton, CartButton, SegmentedControl,
  Collapsible, ThemedText, ThemedView,
} from '@otaga/web-ui-kit';
import { PhoneMockup } from '../components/PhoneMockup';
import { DocCard, PropRow } from '../components/DocCard';
import { IconGallery } from '../components/IconGallery';
import { SectionHeader } from './Install';

const ACCENT = 'var(--primary)';

const TEXT_CODE = `import { ThemedText } from '@otaga/rn-ui-kit';\n\n<ThemedText type="title">Header</ThemedText>`;
const VIEW_CODE = `import { ThemedView } from '@otaga/rn-ui-kit';\n\n<ThemedView lightColor="#eee" darkColor="#111">...</ThemedView>`;
const SEG_CODE = `import { SegmentedControl } from '@otaga/rn-ui-kit';\n\n<SegmentedControl options={['A','B']} selectedOption={s} onSelect={setS} />`;
const BUY_CODE = `import { BuyButton } from '@otaga/rn-ui-kit';\n\n<BuyButton label="Buy Now" color="#2A9D6A" onBuy={handleBuy} />`;
const CART_CODE = `import { CartButton } from '@otaga/rn-ui-kit';\n\n<CartButton label="Add to cart" color="#2A9D6A" onAddToCart={handle} />`;

function PhonePreview({ children, darkMode = false }: { children: React.ReactNode; darkMode?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <PhoneMockup darkMode={darkMode}>
        <div style={{ 
          background: darkMode ? '#000' : '#FCF5E5', 
          minHeight: '100%', 
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20
        }}>
          {children}
        </div>
      </PhoneMockup>
    </div>
  );
}

function ScreenLabel({ text, darkMode = false }: { text: string; darkMode?: boolean }) {
  return (
    <p style={{ 
      fontSize: 10, 
      color: darkMode ? '#555' : '#888', 
      marginBottom: 0, 
      letterSpacing: '0.1em', 
      textTransform: 'uppercase', 
      fontWeight: 800 
    }}>{text}</p>
  );
}

export function MobileDemo() {
  const [seg, setSeg] = useState('All');
  const [isDark, setIsDark] = useState(false);

  return (
    <section id="mobile" className="section-padding">
      <SectionHeader
        badge="Native Components"
        title="Experience @otaga/rn-ui-kit"
        sub="High-performance React Native components designed for the next generation of mobile apps."
      />

      {/* Theme Toggle for previews */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40, marginBottom: 40 }}>
        <button 
          onClick={() => setIsDark(!isDark)}
          className="btn btn-secondary"
          style={{ padding: '8px 20px', borderRadius: 100, fontSize: 13 }}
        >
          {isDark ? '☀️ Switch to Light Mode Previews' : '🌙 Switch to Dark Mode Previews'}
        </button>
      </div>

      <div className="grid-doc">
        <DocCard
          title="ThemedText"
          description="A smart text component that adapts to iOS/Android dark mode automatically."
          props={[{ name: 'type', type: 'string', default: 'default', desc: 'Title, subtitle, default, link' }]}
          code={TEXT_CODE}
          preview={
            <PhonePreview darkMode={isDark}>
              <ScreenLabel text="Typography System" darkMode={isDark} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <ThemedText type="title">Native Title</ThemedText>
                <ThemedText type="subtitle">Sub-heading</ThemedText>
                <ThemedText type="default">Adaptive body text that looks great on any background.</ThemedText>
                <ThemedText type="link">Interactive Link</ThemedText>
              </div>
            </PhonePreview>
          }
        />

        <DocCard
          title="SegmentedControl"
          description="Interactive pill-switcher with haptic feedback and smooth animations."
          props={[{ name: 'options', type: 'string[]', default: '[]', desc: 'Labels to show' }]}
          code={SEG_CODE}
          preview={
            <PhonePreview darkMode={isDark}>
              <ScreenLabel text="Control Variants" darkMode={isDark} />
              <SegmentedControl
                options={['All', 'Active', 'Sold']}
                selectedOption={seg}
                onSelect={setSeg}
                activeColor="var(--primary)"
              />
              <div style={{ marginTop: 20 }}>
                <SegmentedControl
                  options={['S', 'M', 'L']}
                  selectedOption="M"
                  onSelect={() => {}}
                  activeColor="var(--accent-blue)"
                />
              </div>
            </PhonePreview>
          }
        />

        <DocCard
          title="BuyButton"
          description="A 60FPS swipe-to-confirm button optimized for React Native gestures."
          props={[{ name: 'label', type: 'string', default: 'Buy Now', desc: 'Button text' }]}
          code={BUY_CODE}
          preview={
            <PhonePreview darkMode={isDark}>
              <ScreenLabel text="Transaction UI" darkMode={isDark} />
              <BuyButton label="Buy Now" color="var(--primary)" height={52} onBuy={() => {}} />
              <BuyButton label="Reserve" color="var(--accent-orange)" height={52} onBuy={() => {}} />
              <p style={{ textAlign: 'center', fontSize: 10, color: 'var(--text-dim)' }}>Swipe to confirm action</p>
            </PhonePreview>
          }
        />

        <DocCard
          title="CartButton"
          description="Dual-state sliding add-to-cart component with native bag interaction."
          props={[{ name: 'iconColor', type: 'string', default: '#fff', desc: 'Icon tint' }]}
          code={CART_CODE}
          preview={
            <PhonePreview darkMode={isDark}>
              <ScreenLabel text="Ecommerce Flow" darkMode={isDark} />
              <CartButton label="Add to cart" color="var(--primary)" height={54} onAddToCart={() => {}} />
              <CartButton label="Save for later" color="var(--accent-purple)" height={54} onAddToCart={() => {}} />
            </PhonePreview>
          }
        />

        <DocCard
          title="Collapsible"
          description="Accordion with animated chevron. Each instance independently manages open/closed state."
          props={[{ name: 'title', type: 'string', default: undefined, desc: 'Always-visible header', required: true }]}
          code={`import { Collapsible, ThemedText } from '@otaga/rn-ui-kit';\n\n<Collapsible title="Shipping">\n  <ThemedText>3–5 business days</ThemedText>\n</Collapsible>`}
          preview={
            <PhonePreview darkMode={isDark}>
              <ScreenLabel text="Collapsible" darkMode={isDark} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Shipping info', 'Return policy', 'Size guide'].map(t => (
                  <div key={t} style={{ background: isDark ? '#1a1a1a' : '#fff', borderRadius: 10, padding: 12 }}>
                    <Collapsible title={t}>
                      <div style={{ marginTop: 8 }}>
                        <ThemedText>Tap the chevron to reveal and collapse this section.</ThemedText>
                      </div>
                    </Collapsible>
                  </div>
                ))}
              </div>
            </PhonePreview>
          }
        />

        {/* ── IconSymbol gallery ── */}
        <DocCard
          title="IconSymbol — RN Icon Set"
          description="SF Symbols on iOS · Material Icons on Android/web. Click any icon to copy its name for use in IconSymbol, BottomBar, Sidebar, and Collapsible."
          props={[
            { name: 'name',   type: 'string',  default: undefined, desc: 'SF Symbol name — auto-mapped to Material Icons on Android/web', required: true },
            { name: 'size',   type: 'number',  default: '24', desc: 'Icon size in dp' },
            { name: 'color',  type: 'string',  default: undefined, desc: 'Stroke/fill color', required: true },
            { name: 'weight', type: 'SymbolWeight', default: '"regular"', desc: 'iOS SF Symbol weight (bold, semibold, etc.)' },
          ]}
          code={`import { IconSymbol } from '@otaga/rn-ui-kit';\n\n// SF Symbols on iOS, Material Icons on Android\n<IconSymbol name="house.fill"      size={28} color="#0F4D3C" />\n<IconSymbol name="magnifyingglass" size={28} color="#0F4D3C" />\n<IconSymbol name="bag"             size={28} color="#0F4D3C" />\n<IconSymbol name="gearshape"       size={28} color="#0F4D3C" weight="bold" />`}
          span={2}
          preview={<IconGallery />}
        />
      </div>
    </section>
  );
}
