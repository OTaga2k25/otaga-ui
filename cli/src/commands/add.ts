import pc from 'picocolors';
import ora from 'ora';
import fs from 'fs';
import path from 'path';

// IMPORTANT: Replace this with your actual GitHub raw content URL
const BASE_URL = 'https://raw.githubusercontent.com/OTaga2k25/otaga-ui/main/packages/rn-ui-kit';

function toPascalCase(str: string) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

export async function addCommand(components?: string[]) {
  if (!components || components.length === 0) {
    console.log(pc.red('Error: Please specify a component to add.'));
    console.log(`Example: ${pc.cyan('npx otaga-ui add flip-card')}`);
    return;
  }

  const configPath = path.join(process.cwd(), 'otaga-ui.json');
  let componentsDir = 'components/ui';

  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    if (config.componentsDir) {
      componentsDir = config.componentsDir;
    }
  } else {
    console.log(pc.yellow('Warning: otaga-ui.json not found. Using default directory: components/ui'));
    console.log(pc.gray(`Run ${pc.cyan('npx otaga-ui init')} to configure your project.\n`));
  }

  const targetDir = path.join(process.cwd(), componentsDir);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (const component of components) {
    const componentName = toPascalCase(component);
    const fileName = `${componentName}.tsx`;
    const spinner = ora(`Fetching ${componentName}...`).start();
    
    try {
      const url = `${BASE_URL}/${fileName}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Component not found at ${url}`);
      }
      
      const content = await response.text();
      const filePath = path.join(targetDir, fileName);
      
      fs.writeFileSync(filePath, content);
      
      spinner.succeed(`Successfully added ${pc.bold(componentName)} to ${componentsDir}/${fileName}`);
    } catch (error: any) {
      spinner.fail(`Failed to add ${componentName}`);
      console.error(pc.red(`  └─ ${error.message}`));
    }
  }
}
