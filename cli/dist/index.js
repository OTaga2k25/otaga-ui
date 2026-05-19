#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const init_1 = require("./commands/init");
const add_1 = require("./commands/add");
const program = new commander_1.Command();
program
    .name('otaga-ui')
    .description('Component generator CLI for Otaga UI')
    .version('1.0.0');
program
    .command('init')
    .description('Initialize your project and install dependencies')
    .action(init_1.initCommand);
program
    .command('add')
    .description('Add a component to your project')
    .argument('[components...]', 'the components to add')
    .action(add_1.addCommand);
program.parse(process.argv);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
