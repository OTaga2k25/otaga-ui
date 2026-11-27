import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { ImageCarousel } from '@otaga/web-ui-kit';

const DEMO_PERSONS = [
  { name: 'Aria Rossi',  title: 'Lead Architect',    img: 'https://picsum.photos/id/64/590/640'  },
  { name: 'Leo Carter',  title: 'Creative Director', img: 'https://picsum.photos/id/91/590/640'  },
  { name: 'Mia Chen',    title: 'Senior Developer',  img: 'https://picsum.photos/id/177/590/640' },
  { name: 'Kai Tanaka',  title: 'UX/UI Designer',    img: 'https://picsum.photos/id/399/590/640' },
];

const code = `import { ImageCarousel } from '@otaga/rn-ui-kit';

const persons = [
  { name: 'Aria Rossi',  title: 'Lead Architect',    img: 'https://...' },
  { name: 'Leo Carter',  title: 'Creative Director', img: 'https://...' },
  { name: 'Mia Chen',    title: 'Senior Developer',  img: 'https://...' },
];

function Example() {
  return (
    <ImageCarousel persons={persons} />
  );
}`;

const props = [
  { name: 'persons', type: 'ImageCarouselPerson[]', default: '—', desc: 'Array of person objects — name, title, img. Required.' },
  { name: 'style',   type: 'ViewStyle',             default: '—', desc: 'Custom styles on the outer container View.' },
  { name: 'direction', type: "'horizontal' | 'vertical'", default: "'horizontal'", desc: 'Sets the flex direction layout of the accordion.' },
];

export function MobileImageCarouselPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="ImageCarousel"
        description="Horizontal expanding accordion for React Native. Tap a panel to expand it using Animated flex weight transition. Active panel reveals name and title with fade-in animation."
        pkg="@otaga/rn-ui-kit"
      />
      <SectionTitle>Live Preview (Horizontal)</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#111', minHeight: '100%', display: 'flex', alignItems: 'center', padding: '0 8px' }}>
              <div style={{ zoom: 0.72, width: '100%' }}>
                <ImageCarousel persons={DEMO_PERSONS} />
              </div>
            </div>
          </PhoneMockup>
        </div>
      </LivePreview>

      <SectionTitle>Vertical Variant</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#111', minHeight: '100%', display: 'flex', alignItems: 'center', padding: '0 8px' }}>
              <div style={{ zoom: 0.72, width: '100%' }}>
                <ImageCarousel persons={DEMO_PERSONS} direction="vertical" />
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
