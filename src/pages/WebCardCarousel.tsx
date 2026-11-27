import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { CardCarousel } from '@otaga/web-ui-kit';

const DEMO_CARDS = [
  { id: 1, imageUrl: 'https://picsum.photos/id/164/400/600', title: 'Glass Tower'      },
  { id: 2, imageUrl: 'https://picsum.photos/id/179/400/600', title: 'Old Library'      },
  { id: 3, imageUrl: 'https://picsum.photos/id/225/400/600', title: 'City Streets'     },
  { id: 4, imageUrl: 'https://picsum.photos/id/250/400/600', title: 'Stone Arches'     },
  { id: 5, imageUrl: 'https://picsum.photos/id/287/400/600', title: 'Iron Bridge'      },
  { id: 6, imageUrl: 'https://picsum.photos/id/317/400/600', title: 'Rooftop View'     },
  { id: 7, imageUrl: 'https://picsum.photos/id/338/400/600', title: 'Night Market'     },
  { id: 8, imageUrl: 'https://picsum.photos/id/351/400/600', title: 'Harbour Lights'   },
  { id: 9, imageUrl: 'https://picsum.photos/id/404/400/600', title: 'Spiral Staircase' },
];

const code = `import { CardCarousel } from '@otaga/web-ui-kit';

const cards = [
  { id: 1, imageUrl: 'https://...', title: 'Crimson Forest' },
  { id: 2, imageUrl: 'https://...', title: 'Misty Mountains' },
  { id: 3, imageUrl: 'https://...', title: 'Floating Islands' },
];

function Example() {
  return (
    <CardCarousel
      cards={cards}
      autoPlayDelay={3000}
    />
  );
}`;

const props = [
  { name: 'cards',         type: 'CarouselCard[]', default: '—',      desc: 'Array of card objects — id, imageUrl, title. Required.' },
  { name: 'autoPlayDelay', type: 'number',         default: '3000',    desc: 'Milliseconds between auto-advance. Pauses on hover.' },
  { name: 'style',         type: 'CSSProperties',  default: '—',       desc: 'Custom styles on the outer container.' },
];

export function WebCardCarouselPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="CardCarousel"
        description="3D card carousel with auto-play, drag-to-swipe, dot indicators, and prev/next controls. Adjacent cards scale down to 80% to create depth. Pauses on hover."
        pkg="@otaga/web-ui-kit"
      />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ margin: '0 -24px' }}>
          <CardCarousel cards={DEMO_CARDS} autoPlayDelay={3000} maxWidth={9999} />
        </div>
      </LivePreview>
      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />
      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
