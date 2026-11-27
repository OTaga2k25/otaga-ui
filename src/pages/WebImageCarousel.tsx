import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { ImageCarousel } from '@otaga/web-ui-kit';

const DEMO_PERSONS = [
  { name: 'Aria Rossi',   title: 'Lead Architect',    img: 'https://picsum.photos/id/64/590/640', routeId: 'web-buybutton' },
  { name: 'Leo Carter',   title: 'Creative Director', img: 'https://picsum.photos/id/91/590/640', routeId: 'web-chatbotcard' },
  { name: 'Mia Chen',     title: 'Senior Developer',  img: 'https://picsum.photos/id/177/590/640', routeId: 'web-fileupload' },
  { name: 'Kai Tanaka',   title: 'UX/UI Designer',    img: 'https://picsum.photos/id/399/590/640', routeId: 'web-brutalisttask' },
  { name: 'Zoe Williams', title: 'Project Manager',   img: 'https://picsum.photos/id/433/590/640', routeId: 'web-dock' },
];

const code = `import { ImageCarousel } from '@otaga/web-ui-kit';

const persons = [
  { name: 'Aria Rossi',   title: 'Lead Architect',    img: 'https://...', routeId: 'web-buybutton' },
  { name: 'Leo Carter',   title: 'Creative Director', img: 'https://...', routeId: 'web-chatbotcard' },
  { name: 'Mia Chen',     title: 'Senior Developer',  img: 'https://...', routeId: 'web-fileupload' },
];

function Example({ navigate }) {
  return <ImageCarousel persons={persons} onNavigate={navigate} />;
}`;

const props = [
  { name: 'persons', type: 'ImageCarouselPerson[]', default: '—', desc: 'Array of person objects — name, title, img, routeId. Required.' },
  { name: 'style',   type: 'CSSProperties',         default: '—', desc: 'Custom styles on the outer container.' },
  { name: 'onNavigate', type: '(routeId: string) => void', default: '—', desc: 'Callback invoked when clicking the standard navigation arrow on an active card.' },
  { name: 'direction', type: "'horizontal' | 'vertical'", default: "'horizontal'", desc: 'Forces the accordion layout direction. On mobile screens (<768px), this is automatically forced to vertical.' },
];

export function WebImageCarouselPage({ navigate }: { navigate?: (id: string) => void }) {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="ImageCarousel"
        description="Horizontal expanding accordion carousel. Click a panel to expand it to 48% width — it transitions from grayscale to color and reveals the name and title with a slide-up animation. Fully interactive with a clean arrow navigation link."
        pkg="@otaga/web-ui-kit"
      />
      <SectionTitle>Live Preview (Horizontal)</SectionTitle>
      <LivePreview>
        <ImageCarousel persons={DEMO_PERSONS} onNavigate={navigate} />
      </LivePreview>

      <SectionTitle>Vertical Variant</SectionTitle>
      <LivePreview>
        <ImageCarousel persons={DEMO_PERSONS} direction="vertical" onNavigate={navigate} />
      </LivePreview>
      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />
      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
