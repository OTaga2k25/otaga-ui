"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommand = addCommand;
const picocolors_1 = __importDefault(require("picocolors"));
const ora_1 = __importDefault(require("ora"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const registry_js_1 = require("../registry.js");
const BASE_URL = 'https://raw.githubusercontent.com/OTaga2k25/otaga-ui/main';
async function addCommand(components, options) {
    if (!components || components.length === 0) {
        console.log(picocolors_1.default.red('Error: Please specify a component to add.'));
        console.log(`Example: ${picocolors_1.default.cyan('npx otaga-ui add flip-card')}`);
        console.log(`         ${picocolors_1.default.cyan('npx otaga-ui add flip-card --web')}`);
        return;
    }
    const registry = options.web ? registry_js_1.WEB_COMPONENTS : registry_js_1.RN_COMPONENTS;
    const kit = options.web ? 'web-ui-kit' : 'rn-ui-kit';
    const kitLabel = options.web ? '@otaga/web-ui-kit' : '@otaga/rn-ui-kit';
    const configPath = path_1.default.join(process.cwd(), 'otaga-ui.json');
    let componentsDir = 'components/ui';
    if (fs_1.default.existsSync(configPath)) {
        const config = JSON.parse(fs_1.default.readFileSync(configPath, 'utf-8'));
        if (config.componentsDir)
            componentsDir = config.componentsDir;
    }
    else {
        console.log(picocolors_1.default.yellow('Warning: otaga-ui.json not found. Using default directory: components/ui'));
        console.log(picocolors_1.default.gray(`Run ${picocolors_1.default.cyan('npx otaga-ui init')} to configure your project.\n`));
    }
    const targetDir = path_1.default.join(process.cwd(), componentsDir);
    if (!fs_1.default.existsSync(targetDir)) {
        fs_1.default.mkdirSync(targetDir, { recursive: true });
    }
    for (const input of components) {
        const slug = input.toLowerCase();
        const match = registry.find(c => c.slug === slug);
        if (!match) {
            const closest = (0, registry_js_1.findClosest)(slug, registry);
            console.log(picocolors_1.default.red(`✖ Unknown component: ${picocolors_1.default.bold(input)} ${picocolors_1.default.gray(`(${kitLabel})`)}`));
            if (closest) {
                console.log(picocolors_1.default.yellow(`  Did you mean: ${picocolors_1.default.bold(closest.slug)}?`));
            }
            else {
                console.log(picocolors_1.default.gray(`  Run ${picocolors_1.default.cyan('npx otaga-ui list')} to see all available components.`));
            }
            continue;
        }
        const fileName = `${match.name}.tsx`;
        const spinner = (0, ora_1.default)(`Adding ${picocolors_1.default.bold(match.name)} from ${picocolors_1.default.gray(kitLabel)}...`).start();
        try {
            const url = `${BASE_URL}/${kit}/${fileName}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Fetch failed (${response.status}): ${url}`);
            }
            const content = await response.text();
            fs_1.default.writeFileSync(path_1.default.join(targetDir, fileName), content);
            spinner.succeed(`Added ${picocolors_1.default.bold(match.name)} → ${picocolors_1.default.gray(`${componentsDir}/${fileName}`)}`);
        }
        catch (error) {
            spinner.fail(`Failed to add ${match.name}`);
            console.error(picocolors_1.default.red(`  └─ ${error.message}`));
        }
    }
}
