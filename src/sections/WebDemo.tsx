import { useState, CSSProperties } from 'react';
import {
  BuyButton, CartButton, SegmentedControl,
  Collapsible, Sidebar, BottomSheet,
  ThemedText, ThemedView,
  BottomBar,
} from '@otaga/web-ui-kit';
import { DocCard, PropRow } from '../components/DocCard';
import { IconGallery } from '../components/IconGallery';
import { SectionHeader } from './Install';

const ACCENT = 'var(--primary)';

const BUY_PROPS: PropRow[] = [
  { name: 'label',    type: 'string',             default: '"Buy Now"', desc: 'Text shown on the button' },
  { name: 'color',    type: 'string',             default: '"#000"',    desc: 'Background color of the button' },
  { name: 'height',   type: 'number',             default: '62',        desc: 'Total height of the button in px' },
  { name: 'width',    type: 'number | string',    default: '"100%"',    desc: 'Width — number (px) or CSS string' },
  { name: 'onBuy',    type: '() => void',         default: undefined,   desc: 'Callback fired when swipe completes' },
];

const CART_PROPS: PropRow[] = [
  { name: 'label',       type: 'string',          default: '"Add to cart"', desc: 'Slider label text' },
  { name: 'color',       type: 'string',          default: '"#000"',        desc: 'Color of the sliding button and bag icon background' },
  { name: 'iconColor',   type: 'string',          default: '"#fff"',        desc: 'Icon and label text color' },
  { name: 'height',      type: 'number',          default: '66',            desc: 'Total height of the component in px' },
  { name: 'width',       type: 'number | string', default: '"100%"',        desc: 'Component width' },
  { name: 'onAddToCart', type: '() => void',      default: undefined,       desc: 'Fired when slider reaches the end' },
  { name: 'onBagPress',  type: '() => void',      default: undefined,       desc: 'Fired when the static bag button is tapped' },
];

const SEG_PROPS: PropRow[] = [
  { name: 'options',         type: 'string[]',       default: undefined, desc: 'List of segment labels', required: true },
  { name: 'selectedOption',  type: 'string',         default: undefined, desc: 'Currently active option', required: true },
  { name: 'onSelect',        type: '(v: string) => void', default: undefined, desc: 'Called with the selected value', required: true },
  { name: 'activeColor',     type: 'string',         default: '"#000"',  desc: 'Text color of the active segment' },
  { name: 'style',           type: 'CSSProperties',  default: undefined, desc: 'Override wrapper styles' },
];

const COLLAPSIBLE_PROPS: PropRow[] = [
  { name: 'title',    type: 'string',      default: undefined, desc: 'Header text shown at all times', required: true },
  { name: 'children', type: 'ReactNode',   default: undefined, desc: 'Content revealed on expand', required: true },
];

const THEMED_TEXT_PROPS: PropRow[] = [
  { name: 'type',     type: '"title" | "subtitle" | "default" | "link"', default: '"default"', desc: 'Visual style variant' },
  { name: 'children', type: 'ReactNode',     default: undefined, desc: 'Text content', required: true },
];

const BOTTOMBAR_PROPS: PropRow[] = [
  { name: 'tabs',                 type: 'BottomBarTab[]',  default: undefined,   desc: 'Array of {id, icon, label} objects', required: true },
  { name: 'activeTab',            type: 'string',          default: undefined,   desc: 'id of the currently active tab', required: true },
  { name: 'onTabPress',           type: '(id: string) => void', default: undefined, desc: 'Called with tab id on press', required: true },
];

const SIDEBAR_PROPS: PropRow[] = [
  { name: 'visible',   type: 'boolean',       default: undefined,  desc: 'Controls open/closed state', required: true },
  { name: 'onClose',   type: '() => void',    default: undefined,  desc: 'Called on backdrop click or Escape key', required: true },
  { name: 'items',     type: 'SidebarItem[]', default: undefined,  desc: 'Array of {id, label, icon?, onPress?}', required: true },
];

const BOTTOMSHEET_PROPS: PropRow[] = [
  { name: 'visible',      type: 'boolean',     default: 'true',    desc: 'Show/hide the sheet' },
  { name: 'snapPoints',   type: 'number[]',    default: '[300,520]',desc: 'Heights (px) the sheet snaps to' },
];

/* ─── Code examples (Simplified for brevity in the docs) ─── */
const BUY_CODE = `import { BuyButton } from '@otaga/web-ui-kit';\n\n<BuyButton label="Buy Now" color="#2A9D6A" onBuy={handleBuy} />`;
const CART_CODE = `import { CartButton } from '@otaga/web-ui-kit';\n\n<CartButton label="Add to cart" color="#2A9D6A" onAddToCart={handle} />`;
const SEG_CODE = `import { SegmentedControl } from '@otaga/web-ui-kit';\n\n<SegmentedControl options={['A','B']} selectedOption={s} onSelect={setS} />`;
const COLLAPSIBLE_CODE = `import { Collapsible } from '@otaga/web-ui-kit';\n\n<Collapsible title="Details">Content...</Collapsible>`;
const TEXT_CODE = `import { ThemedText } from '@otaga/web-ui-kit';\n\n<ThemedText type="title">Hello World</ThemedText>`;
const VIEW_CODE = `import { ThemedView } from '@otaga/web-ui-kit';\n\n<ThemedView lightColor="#eee" darkColor="#111">...</ThemedView>`;
const BAR_CODE = `import { BottomBar } from '@otaga/web-ui-kit';\n\n<BottomBar tabs={TABS} activeTab={a} onTabPress={setA} />`;
const SIDEBAR_CODE = `import { Sidebar } from '@otaga/web-ui-kit';\n\n<Sidebar visible={open} onClose={() => setO(false)} items={ITEMS} />`;
const SHEET_CODE = `import { BottomSheet } from '@otaga/web-ui-kit';\n\n<BottomSheet visible={open} onClose={() => setO(false)} snapPoints={[300, 600]} />`;
export function WebDemo() {
  const [seg, setSeg] = useState('All');
  const [sidebar, setSidebar] = useState(false);
  const [sheet, setSheet] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const TABS = [
    { id: 'home',    icon: 'house.fill',      label: 'Home'    },
    { id: 'search',  icon: 'magnifyingglass', label: 'Search'  },
    { id: 'profile', icon: 'person.fill',     label: 'Profile' },
  ];

  return (
    <section id="web" className="section-padding">
      <SectionHeader
        badge="Live Components"
        title="Explore @otaga/web-ui-kit"
        sub="A collection of highly polished React components built with performance and accessibility in mind."
      />

      <div className="grid-doc" style={{ marginTop: 48 }}>
        <DocCard
          title="BuyButton"
          description="Interactive swipe-to-confirm button for high-intent actions."
          props={BUY_PROPS}
          code={BUY_CODE}
          preview={<BuyButton label="Buy Now" color="var(--primary)" onBuy={() => {}} />}
        />

        <DocCard
          title="CartButton"
          description="A unique sliding add-to-cart component with dual action states."
          props={CART_PROPS}
          code={CART_CODE}
          preview={<CartButton label="Add to cart" color="var(--primary)" onAddToCart={() => {}} />}
        />

        <DocCard
          title="SegmentedControl"
          description="Modern tab switcher with a sliding indicator and hover effects."
          props={SEG_PROPS}
          code={SEG_CODE}
          preview={
            <div style={{ background: 'var(--surface)', padding: 20, borderRadius: 12 }}>
              <SegmentedControl
                options={['All', 'Active', 'Sold']}
                selectedOption={seg}
                onSelect={setSeg}
                activeColor="var(--primary)"
              />
            </div>
          }
        />

        <DocCard
          title="Collapsible"
          description="Accordion-style component with smooth height animations."
          props={COLLAPSIBLE_PROPS}
          code={COLLAPSIBLE_CODE}
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
              <Collapsible title="Shipping info">
                <ThemedText style={{ padding: '12px 0' }}>Estimated delivery: 3–5 business days.</ThemedText>
              </Collapsible>
              <Collapsible title="Return policy">
                <ThemedText style={{ padding: '12px 0' }}>30-day returns on all unused items.</ThemedText>
              </Collapsible>
            </div>
          }
        />

        <DocCard
          title="ThemedText"
          description="Typography system that respects OS-level dark mode settings."
          props={THEMED_TEXT_PROPS}
          code={TEXT_CODE}
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <ThemedText type="title">Title Variant</ThemedText>
              <ThemedText type="subtitle">Subtitle Variant</ThemedText>
              <ThemedText type="default">Default Body Copy</ThemedText>
              <ThemedText type="link">Link Style</ThemedText>
            </div>
          }
        />

        <DocCard
          title="BottomBar"
          description="iOS-inspired floating navigation bar for mobile-first web apps."
          props={BOTTOMBAR_PROPS}
          code={BAR_CODE}
          span={2}
          preview={
            <div style={{ position: 'relative', height: 80, width: '100%', background: 'var(--bg)', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', bottom: 10, left: 10, right: 10, height: 60, background: 'var(--surface)', borderRadius: 30, display: 'flex', justifyContent: 'space-around', alignItems: 'center', border: '1px solid var(--border)' }}>
                {TABS.map(t => (
                  <div key={t.id} onClick={() => setActiveTab(t.id)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 20, background: activeTab === t.id ? 'var(--primary)' : 'transparent', color: activeTab === t.id ? '#fff' : 'var(--text-dim)', transition: '0.2s' }}>
                    <span style={{ fontSize: 16 }}>●</span>
                    {activeTab === t.id && <span style={{ fontSize: 12, fontWeight: 700 }}>{t.label}</span>}
                  </div>
                ))}
              </div>
            </div>
          }
        />
        <DocCard
          title="Icons"
          description="A set of curated, high-quality icons that work seamlessly across web and mobile."
          props={[]}
          code={`import { Icon } from '@otaga/web-ui-kit';\n\n<Icon name="house.fill" size={24} color="#2A9D6A" />`}
          span={2}
          preview={<IconGallery />}
        />
      </div>
    </section>
  );
}
