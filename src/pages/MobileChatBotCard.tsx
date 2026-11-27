import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { ChatBotCard } from '@otaga/web-ui-kit'; // Web fallback for preview

const code = `import { ChatBotCard } from '@otaga/rn-ui-kit';
import { Attach, Grid, Globe, Send } from 'lucide-react-native';

function Example() {
  return (
    <ChatBotCard
      placeholder="Imagine Something...✦˚"
      tags={['Create An Image', 'Analyse Data', 'More']}
      attachIcon={<Attach size={20} color="rgba(255,255,255,0.7)" />}
      gridIcon={<Grid size={20} color="rgba(255,255,255,0.7)" />}
      globeIcon={<Globe size={20} color="rgba(255,255,255,0.7)" />}
      sendIcon={<Send size={18} color="#fff" />}
      onSubmit={(val) => console.log('Prompt:', val)}
    />
  );
}`;

const props = [
  { name: 'placeholder', type: 'string',       default: "'Imagine Something...✦˚'", desc: 'Input placeholder text.' },
  { name: 'tags',        type: 'string[]',     default: "['Create An Image', 'Analyse Data', 'More']", desc: 'Array of suggestion tags rendered below the input card.' },
  { name: 'onSubmit',    type: '(val: string) => void', default: '—', desc: 'Callback triggered when the send button is pressed.' },
  { name: 'onAttach',    type: '() => void',   default: '—', desc: 'Optional callback for the attachment action button.' },
  { name: 'onGrid',      type: '() => void',   default: '—', desc: 'Optional callback for the grid action button.' },
  { name: 'onGlobe',     type: '() => void',   default: '—', desc: 'Optional callback for the globe action button.' },
  { name: 'attachIcon',  type: 'ReactNode',    default: '—', desc: 'Custom icon ReactNode for attachment button.' },
  { name: 'gridIcon',    type: 'ReactNode',    default: '—', desc: 'Custom icon ReactNode for grid button.' },
  { name: 'globeIcon',   type: 'ReactNode',    default: '—', desc: 'Custom icon ReactNode for globe button.' },
  { name: 'sendIcon',    type: 'ReactNode',    default: '—', desc: 'Custom icon ReactNode for the send button (defaults to text arrow).' },
];

export function MobileChatBotCardPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="ChatBotCard"
        description="A premium, glowing chat input component built for React Native. Features smooth touch animations, a gradient border envelope via expo-linear-gradient, and customizable Lucide icon slots."
        pkg="@otaga/rn-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#0a0a0a', minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px' }}>
              {/* Note: Web component rendered in mockup for demonstration */}
              <ChatBotCard style={{ width: '100%' }} />
            </div>
          </PhoneMockup>
        </div>
      </LivePreview>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
