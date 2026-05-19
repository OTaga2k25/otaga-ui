#!/usr/bin/env node
import { Command } from 'commander';
import pc from 'picocolors';
import { initCommand } from './commands/init';
import { addCommand } from './commands/add';

const program = new Command();

program
  .name('otaga-ui')
  .description('Component generator CLI for Otaga UI')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize your project and install dependencies')
  .action(initCommand);

program
  .command('add')
  .description('Add a component to your project')
  .argument('[components...]', 'the components to add')
  .action(addCommand);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
