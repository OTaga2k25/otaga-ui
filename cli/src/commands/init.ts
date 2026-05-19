import prompts from 'prompts';
import pc from 'picocolors';
import fs from 'fs';
import path from 'path';

export async function initCommand() {
  console.log(pc.bold(pc.cyan('\nWelcome to Otaga UI!\n')));

  const response = await prompts([
    {
      type: 'confirm',
      name: 'proceed',
      message: 'Would you like to initialize Otaga UI in the current directory?',
      initial: true
    },
    {
      type: 'text',
      name: 'componentsDir',
      message: 'Where would you like to store your components?',
      initial: 'components/ui'
    }
  ]);

  if (!response.proceed) {
    console.log(pc.yellow('Operation cancelled.'));
    return;
  }

  const configPath = path.join(process.cwd(), 'otaga-ui.json');
  const config = {
    componentsDir: response.componentsDir,
  };

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

  // Ensure the directory exists
  const componentsPath = path.join(process.cwd(), response.componentsDir);
  if (!fs.existsSync(componentsPath)) {
    fs.mkdirSync(componentsPath, { recursive: true });
  }
  
  console.log(pc.green(`\nSuccess! otaga-ui.json has been created.`));
  console.log(`You can now run ${pc.cyan('npx otaga-ui add <component>')} to add components.\n`);
}
