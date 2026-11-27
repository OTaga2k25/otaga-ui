import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { ImageSwiper } from '@otaga/web-ui-kit';

const DEMO_CARDS = [
  { id: 1, imageUrl: 'https://picsum.photos/id/37/400/600',  title: 'Golden Sunset'   },
  { id: 2, imageUrl: 'https://picsum.photos/id/57/400/600',  title: 'Purple Bloom'    },
  { id: 3, imageUrl: 'https://picsum.photos/id/10/400/600',  title: 'Forest Floor'    },
  { id: 4, imageUrl: 'https://picsum.photos/id/24/400/600',  title: 'Hidden Waterfall' },
  { id: 5, imageUrl: 'https://picsum.photos/id/48/400/600',  title: 'Blue Horizon'    },
];

const code = `import { ImageSwiper } from '@otaga/web-ui-kit';

const cards = [
  { id: 1, imageUrl: 'https://...', title: 'Crimson Forest' },
  { id: 2, imageUrl: 'https://...', title: 'Misty Mountains' },
  { id: 3, imageUrl: 'https://...', title: 'Floating Islands' },
];

function Example() {
  return (
    <ImageSwiper
      cards={cards}
      cardWidth={256}
      cardHeight={352}
    />
  );
}`;

const props = [
  { name: 'cards',      type: 'ImageSwiperCard[]', default: '—',   desc: 'Array of card objects with id, imageUrl, and title. Required.' },
  { name: 'cardWidth',  type: 'number',            default: '256',  desc: 'Width of each card in pixels.' },
  { name: 'cardHeight', type: 'number',            default: '352',  desc: 'Height of each card in pixels.' },
  { name: 'style',      type: 'CSSProperties',     default: '—',    desc: 'Custom styles applied to the outer container.' },
];

export function WebImageSwiperPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="ImageSwiper"
        description="Swipeable card stack with drag-to-dismiss gesture. Cards rotate and fade as they are dragged horizontally. Released past the threshold, the card flies out and cycles to the back of the stack."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px 0' }}>
          <ImageSwiper cards={DEMO_CARDS} cardWidth={220} cardHeight={300} />
        </div>
      </LivePreview>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
