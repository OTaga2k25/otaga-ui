import pc from 'picocolors';
import ora from 'ora';
import fs from 'fs';
import path from 'path';
import { RN_COMPONENTS, WEB_COMPONENTS, findClosest } from '../registry.js';

const BASE_URL = 'https://raw.githubusercontent.com/OTaga2k25/otaga-ui/main';

export async function addCommand(components: string[], options: { web?: boolean }) {
  if (!components || components.length === 0) {
    console.log(pc.red('Error: Please specify a component to add.'));
    console.log(`Example: ${pc.cyan('npx otaga-ui add flip-card')}`);
    console.log(`         ${pc.cyan('npx otaga-ui add flip-card --web')}`);
    return;
  }

  const registry = options.web ? WEB_COMPONENTS : RN_COMPONENTS;
  const kit = options.web ? 'web-ui-kit' : 'rn-ui-kit';
  const kitLabel = options.web ? '@otaga/web-ui-kit' : '@otaga/rn-ui-kit';

  const configPath = path.join(process.cwd(), 'otaga-ui.json');
  let componentsDir = 'components/ui';

  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    if (config.componentsDir) componentsDir = config.componentsDir;
  } else {
    console.log(pc.yellow('Warning: otaga-ui.json not found. Using default directory: components/ui'));
    console.log(pc.gray(`Run ${pc.cyan('npx otaga-ui init')} to configure your project.\n`));
  }

  const targetDir = path.join(process.cwd(), componentsDir);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (const input of components) {
    const slug = input.toLowerCase();
    const match = registry.find(c => c.slug === slug);

    if (!match) {
      const closest = findClosest(slug, registry);
      console.log(pc.red(`✖ Unknown component: ${pc.bold(input)} ${pc.gray(`(${kitLabel})`)}`));
      if (closest) {
        console.log(pc.yellow(`  Did you mean: ${pc.bold(closest.slug)}?`));
      } else {
        console.log(pc.gray(`  Run ${pc.cyan('npx otaga-ui list')} to see all available components.`));
      }
      continue;
    }

    const fileName = `${match.name}.tsx`;
    const spinner = ora(`Adding ${pc.bold(match.name)} from ${pc.gray(kitLabel)}...`).start();

    try {
      const url = `${BASE_URL}/${kit}/${fileName}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Fetch failed (${response.status}): ${url}`);
      }

      const content = await response.text();
      fs.writeFileSync(path.join(targetDir, fileName), content);
      spinner.succeed(`Added ${pc.bold(match.name)} → ${pc.gray(`${componentsDir}/${fileName}`)}`);
    } catch (error: any) {
      spinner.fail(`Failed to add ${match.name}`);
      console.error(pc.red(`  └─ ${error.message}`));
    }
  }
}
