import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { PhoneMockup } from '../components/PhoneMockup';
import { BrutalistTaskCard } from '@otaga/web-ui-kit'; // Web fallback for preview

const code = `import { BrutalistTaskCard } from '@otaga/rn-ui-kit';

function Example() {
  return (
    <BrutalistTaskCard
      title="TASKS"
      accent="SYS//TASK_MANAGER"
      tasks={[
        { id: '1', label: 'Complete prototype', defaultChecked: true },
        { id: '2', label: 'Review API endpoints' },
        { id: '3', label: 'Deploy to Testflight' },
      ]}
    />
  );
}`;

const props = [
  { name: 'title',  type: 'string',     default: "'TASKS'", desc: 'Main header text for the card.' },
  { name: 'tasks',  type: 'TaskItem[]', default: '...',     desc: 'Array of task items (id, label, defaultChecked).' },
  { name: 'accent', type: 'string',     default: "'SYS//TASK_MANAGER'", desc: 'Small monospaced accent string above the card.' },
  { name: 'style',  type: 'ViewStyle',  default: '—',       desc: 'Optional wrapper styles.' },
];

export function MobileBrutalistTaskCardPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Mobile UI Kit"
        title="BrutalistTaskCard"
        description="A bold, high-contrast, brutalist-inspired interactive task list for React Native. Tap the card body to organically expand and reveal the task list using fluid Animated.spring configurations."
        pkg="@otaga/rn-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div className="phone-wrap">
          <PhoneMockup>
            <div style={{ background: '#f5f5f3', minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
              {/* Note: Web component rendered in mockup for demonstration */}
              <div style={{ zoom: 0.85 }}>
                <BrutalistTaskCard />
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
