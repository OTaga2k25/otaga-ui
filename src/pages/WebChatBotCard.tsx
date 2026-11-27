import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { ChatBotCard } from '@otaga/web-ui-kit';

const code = `import { ChatBotCard } from '@otaga/web-ui-kit';

function Example() {
  return (
    <ChatBotCard
      placeholder="Imagine Something...✦˚"
      tags={['Create An Image', 'Analyse Data', 'More']}
      onSubmit={(value) => console.log('Submit:', value)}
      onAttach={() => console.log('Attach')}
      onGrid={() => console.log('Grid')}
      onGlobe={() => console.log('Globe')}
    />
  );
}`;

const props = [
  { name: 'placeholder', type: 'string',       default: '"Imagine Something...✦˚"', desc: 'Textarea placeholder text.' },
  { name: 'tags',        type: 'string[]',      default: '["Create An Image", ...]', desc: 'Array of quick-action tag pills shown below the card.' },
  { name: 'onSubmit',    type: '(value: string) => void', default: '—', desc: 'Called with the textarea value when the send button is clicked.' },
  { name: 'onAttach',    type: '() => void',    default: '—', desc: 'Attach/paperclip button callback.' },
  { name: 'onGrid',      type: '() => void',    default: '—', desc: 'Grid button callback.' },
  { name: 'onGlobe',     type: '() => void',    default: '—', desc: 'Globe/web button callback.' },
  { name: 'style',       type: 'CSSProperties', default: '—', desc: 'Custom styles on the outer container.' },
];

export function WebChatBotCardPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="ChatBotCard"
        description="Dark glassmorphic chat input card with gradient border glow, attach/grid/globe action buttons, animated send button, and quick-action tag pills."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 0' }}>
          <ChatBotCard
            onSubmit={v => console.log('Submit:', v)}
            onAttach={() => console.log('Attach')}
            onGrid={() => console.log('Grid')}
            onGlobe={() => console.log('Globe')}
          />
        </div>
      </LivePreview>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
