import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { CardCarousel } from '@otaga/web-ui-kit';

const DEMO_CARDS = [
  { id: 1, imageUrl: 'https://picsum.photos/id/164/400/600', title: 'Glass Tower'    },
  { id: 2, imageUrl: 'https://picsum.photos/id/179/400/600', title: 'Old Library'    },
  { id: 3, imageUrl: 'https://picsum.photos/id/225/400/600', title: 'City Streets'   },
  { id: 4, imageUrl: 'https://picsum.photos/id/250/400/600', title: 'Stone Arches'   },
  { id: 5, imageUrl: 'https://picsum.photos/id/287/400/600', title: 'Iron Bridge'    },
];

const code = `import { CardCarousel } from '@otaga/rn-ui-kit';

const cards = [
  { id: 1, imageUrl: 'https://...', title: 'Crimson Forest' },
  { id: 2, imageUrl: 'https://...', title: 'Misty Mountains' },
  { id: 3, imageUrl: 'https://...', title: 'Floating Islands' },
];

function Example() {
  return (
    <CardCarousel
      cards={cards}
      cardWidth={220}
      cardHeight={300}
      autoPlayDelay={3000}
    />
  );
}`;

const props = [
  { name: 'cards',         type: 'CarouselCard[]', default: '—',    desc: 'Array of card objects — id, imageUrl, title. Required.' },
  { name: 'cardWidth',     type: 'number',         default: '220',  desc: 'Width of each card in pixels.' },
  { name: 'cardHeight',    type: 'number',         default: '300',  desc: 'Height of each card in pixels.' },
  { name: 'autoPlayDelay', type: 'number',         default: '3000', desc: 'Milliseconds between auto-advance. Pauses on touch.' },
  { name: 'style',         type: 'ViewStyle',      default: '—',    desc: 'Custom styles on the outer container View.' },
];

export function MobileCardCarouselPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="CardCarousel"
        description="3D card carousel for React Native using PanResponder and Animated.spring. Adjacent cards scale to 80% with smooth spring physics. Supports auto-play, drag-to-swipe, and dot indicators."
        pkg="@otaga/rn-ui-kit"
      />
      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#f0f4f8', minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 0' }}>
              <div style={{ zoom: 0.72, width: '100%' }}>
                <CardCarousel cards={DEMO_CARDS} autoPlayDelay={3000} />
              </div>
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
