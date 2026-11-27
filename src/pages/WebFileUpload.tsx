import { PageHeader, SectionTitle, PropsSection, LivePreview } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { FileUpload } from '@otaga/web-ui-kit';

const code = `import { FileUpload } from '@otaga/web-ui-kit';

function Example() {
  return (
    <FileUpload
      accept="image/*"
      multiple
      onFileChange={(files) => console.log(files)}
    />
  );
}`;

const props = [
  { name: 'onFileChange', type: '(files: FileList | null) => void', default: '—',     desc: 'Called when files are selected via browse or drag and drop.' },
  { name: 'accept',       type: 'string',                           default: '—',     desc: 'File type filter passed to the input element. e.g. "image/*" or ".pdf,.doc".' },
  { name: 'multiple',     type: 'boolean',                          default: 'false', desc: 'Allow selecting multiple files at once.' },
  { name: 'style',        type: 'CSSProperties',                    default: '—',     desc: 'Custom styles on the outer container.' },
];

export function WebFileUploadPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        category="Web UI Kit"
        title="FileUpload"
        description="Dark drag-and-drop file upload area. Highlights on drag-over, supports browse via click, and fires onFileChange with the selected FileList."
        pkg="@otaga/web-ui-kit"
      />

      <SectionTitle>Live Preview</SectionTitle>
      <LivePreview>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 0' }}>
          <FileUpload onFileChange={files => console.log('Files:', files)} />
        </div>
      </LivePreview>

      <SectionTitle>Code</SectionTitle>
      <CodeBlock code={code} lang="tsx" />

      <SectionTitle>Props</SectionTitle>
      <PropsSection rows={props} />
    </div>
  );
}
