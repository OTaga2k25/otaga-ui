import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { BrutalistTaskCard } from '@otaga/web-ui-kit';

const code = `import { BrutalistTaskCard } from '@otaga/web-ui-kit';

const tasks = [
  { id: 't1', label: 'Complete project prototype' },
  { id: 't2', label: 'Review client feedback' },
  { id: 't3', label: 'Update documentation' },
  { id: 't4', label: 'Team meeting @ 3PM' },
];

function Example() {
  return (
    <BrutalistTaskCard
      title="TASKS"
      tasks={tasks}
      accent="SYS//TASK_MANAGER"
    />
  );
}`;

const props = [
  { name: 'title',  type: 'string',     default: '"TASKS"',             desc: 'Large text shown in the collapsed state.' },
  { name: 'tasks',  type: 'TaskItem[]', default: '6 built-in tasks',    desc: 'Array of task objects. Each needs id and label. Optional defaultChecked.' },
  { name: 'accent', type: 'string',     default: '"SYS//TASK_MANAGER"', desc: 'Monospace label shown above the card on hover.' },
  { name: 'style',  type: 'CSSProperties', default: '—',               desc: 'Custom styles on the outer container.' },
];

export function WebBrutalistTaskCardPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="BrutalistTaskCard"
        description="Industrial brutalist task card. Hover to expand — the title flies out and the todo list flips in with a 3D bounce. Click items to strike them through. Scan line, rivets, corner brackets and slab shadows included."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '48px 0 24px' }}>
          <BrutalistTaskCard />
        </div>
      </LivePreview>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
