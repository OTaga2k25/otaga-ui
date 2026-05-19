#!/usr/bin/env node
import { Command } from 'commander';
import { initCommand } from './commands/init.js';
import { addCommand } from './commands/add.js';
import { listCommand } from './commands/list.js';

const program = new Command();

program
  .name('otaga-ui')
  .description('Component generator CLI for Otaga UI')
  .version('1.0.1');

program
  .command('init')
  .description('Initialize your project and configure the components directory')
  .action(initCommand);

program
  .command('add')
  .description('Add a component to your project')
  .argument('[components...]', 'component name(s) to add (kebab-case)')
  .option('--web', 'add from @otaga/web-ui-kit instead of @otaga/rn-ui-kit')
  .action(addCommand);

program
  .command('list')
  .description('List all available components')
  .option('--rn', 'show only React Native components')
  .option('--web', 'show only Web components')
  .action(listCommand);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
