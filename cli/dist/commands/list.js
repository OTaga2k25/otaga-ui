"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCommand = listCommand;
const picocolors_1 = __importDefault(require("picocolors"));
const registry_js_1 = require("../registry.js");
function formatColumns(slugs) {
    const col = 24;
    const cols = 3;
    const rows = [];
    for (let i = 0; i < slugs.length; i += cols) {
        const row = slugs
            .slice(i, i + cols)
            .map(s => s.padEnd(col))
            .join('');
        rows.push('  ' + row.trimEnd());
    }
    return rows.join('\n');
}
function printSection(label, pkg, slugs) {
    const header = `${picocolors_1.default.bold(picocolors_1.default.cyan(label))} — ${picocolors_1.default.gray(pkg)} ${picocolors_1.default.gray(`(${slugs.length} components)`)}`;
    const line = picocolors_1.default.gray('─'.repeat(58));
    console.log('\n' + header);
    console.log(line);
    console.log(formatColumns(slugs));
}
function listCommand(options) {
    const showRn = !options.web || options.rn;
    const showWeb = !options.rn || options.web;
    if (showRn) {
        printSection('React Native', '@otaga/rn-ui-kit', registry_js_1.RN_COMPONENTS.map(c => c.slug));
    }
    if (showWeb) {
        printSection('Web', '@otaga/web-ui-kit', registry_js_1.WEB_COMPONENTS.map(c => c.slug));
    }
    console.log('');
    console.log(picocolors_1.default.gray(`Usage: ${picocolors_1.default.cyan('npx otaga-ui add <component>')} ${picocolors_1.default.cyan('--web')} ${picocolors_1.default.gray('(omit --web for React Native)')}`));
    console.log('');
}
