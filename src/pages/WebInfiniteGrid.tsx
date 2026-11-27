import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { InfiniteGrid, InfiniteDraggableGrid } from '@otaga/web-ui-kit';

const code = `import { InfiniteGrid, InfiniteDraggableGrid } from '@otaga/web-ui-kit';

// Option 1 — built-in fetch + fallback gallery
function Example() {
  return <InfiniteGrid style={{ height: 400 }} />;
}

// Option 2 — bring your own data
const myGallery = [
  { id: 0, thumb_src: 'https://...', title: 'Image 0' },
  { id: 1, thumb_src: 'https://...', title: 'Image 1' },
];

function ExampleCustom() {
  return (
    <InfiniteDraggableGrid
      gallery={myGallery}
      style={{ height: 400 }}
    />
  );
}`;

const gridProps = [
  { name: 'galleryUrl',       type: 'string',           default: 'cdpn.io gallery', desc: 'URL to fetch gallery JSON. Response must have shape { images: InfiniteGridItem[] }.' },
  { name: 'fallbackGallery',  type: 'InfiniteGridItem[]', default: '20 built-in images', desc: 'Gallery used while fetching or when the fetch fails.' },
  { name: 'style',            type: 'CSSProperties',    default: '—',               desc: 'Custom styles on the outer container. Use to set height.' },
];

const coreProps = [
  { name: 'gallery', type: 'InfiniteGridItem[]', default: '—',  desc: 'Array of gallery items to tile infinitely. Required.' },
  { name: 'style',   type: 'CSSProperties',      default: '—',  desc: 'Custom styles on the outer container.' },
];

export function WebInfiniteGridPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="InfiniteGrid"
        description="Infinitely draggable image grid. Images tile seamlessly in all directions with momentum physics. Drag and release — the grid coasts to a stop with damped momentum."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ height: 380, borderRadius: 12, overflow: 'hidden' }}>
          <InfiniteGrid style={{ height: 380 }} />
        </div>
      </LivePreview>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>InfiniteGrid Props</SectionTitle>
      <PropsSection rows={gridProps} />

      <SectionTitle>InfiniteDraggableGrid Props</SectionTitle>
      <PropsSection rows={coreProps} />
    </div>
  );
}
