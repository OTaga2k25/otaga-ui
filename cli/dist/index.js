#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const init_js_1 = require("./commands/init.js");
const add_js_1 = require("./commands/add.js");
const list_js_1 = require("./commands/list.js");
const program = new commander_1.Command();
program
    .name('otaga-ui')
    .description('Component generator CLI for Otaga UI')
    .version('1.0.1');
program
    .command('init')
    .description('Initialize your project and configure the components directory')
    .action(init_js_1.initCommand);
program
    .command('add')
    .description('Add a component to your project')
    .argument('[components...]', 'component name(s) to add (kebab-case)')
    .option('--web', 'add from @otaga/web-ui-kit instead of @otaga/rn-ui-kit')
    .action(add_js_1.addCommand);
program
    .command('list')
    .description('List all available components')
    .option('--rn', 'show only React Native components')
    .option('--web', 'show only Web components')
    .action(list_js_1.listCommand);
program.parse(process.argv);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
