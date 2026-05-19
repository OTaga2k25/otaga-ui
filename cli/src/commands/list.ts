import pc from 'picocolors';
import { RN_COMPONENTS, WEB_COMPONENTS } from '../registry.js';

function formatColumns(slugs: string[]): string {
  const col = 24;
  const cols = 3;
  const rows: string[] = [];
  for (let i = 0; i < slugs.length; i += cols) {
    const row = slugs
      .slice(i, i + cols)
      .map(s => s.padEnd(col))
      .join('');
    rows.push('  ' + row.trimEnd());
  }
  return rows.join('\n');
}

function printSection(label: string, pkg: string, slugs: string[]) {
  const header = `${pc.bold(pc.cyan(label))} — ${pc.gray(pkg)} ${pc.gray(`(${slugs.length} components)`)}`;
  const line = pc.gray('─'.repeat(58));
  console.log('\n' + header);
  console.log(line);
  console.log(formatColumns(slugs));
}

export function listCommand(options: { rn?: boolean; web?: boolean }) {
  const showRn = !options.web || options.rn;
  const showWeb = !options.rn || options.web;

  if (showRn) {
    printSection('React Native', '@otaga/rn-ui-kit', RN_COMPONENTS.map(c => c.slug));
  }

  if (showWeb) {
    printSection('Web', '@otaga/web-ui-kit', WEB_COMPONENTS.map(c => c.slug));
  }

  console.log('');
  console.log(pc.gray(`Usage: ${pc.cyan('npx otaga-ui add <component>')} ${pc.cyan('--web')} ${pc.gray('(omit --web for React Native)')}`));
  console.log('');
}
