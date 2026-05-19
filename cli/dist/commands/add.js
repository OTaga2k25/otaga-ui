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
// IMPORTANT: Replace this with your actual GitHub raw content URL
const BASE_URL = 'https://raw.githubusercontent.com/OTaga2k25/otaga-ui/main/packages/rn-ui-kit';
function toPascalCase(str) {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}
async function addCommand(components) {
    if (!components || components.length === 0) {
        console.log(picocolors_1.default.red('Error: Please specify a component to add.'));
        console.log(`Example: ${picocolors_1.default.cyan('npx otaga-ui add flip-card')}`);
        return;
    }
    const configPath = path_1.default.join(process.cwd(), 'otaga-ui.json');
    let componentsDir = 'components/ui';
    if (fs_1.default.existsSync(configPath)) {
        const config = JSON.parse(fs_1.default.readFileSync(configPath, 'utf-8'));
        if (config.componentsDir) {
            componentsDir = config.componentsDir;
        }
    }
    else {
        console.log(picocolors_1.default.yellow('Warning: otaga-ui.json not found. Using default directory: components/ui'));
        console.log(picocolors_1.default.gray(`Run ${picocolors_1.default.cyan('npx otaga-ui init')} to configure your project.\n`));
    }
    const targetDir = path_1.default.join(process.cwd(), componentsDir);
    if (!fs_1.default.existsSync(targetDir)) {
        fs_1.default.mkdirSync(targetDir, { recursive: true });
    }
    for (const component of components) {
        const componentName = toPascalCase(component);
        const fileName = `${componentName}.tsx`;
        const spinner = (0, ora_1.default)(`Fetching ${componentName}...`).start();
        try {
            const url = `${BASE_URL}/${fileName}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Component not found at ${url}`);
            }
            const content = await response.text();
            const filePath = path_1.default.join(targetDir, fileName);
            fs_1.default.writeFileSync(filePath, content);
            spinner.succeed(`Successfully added ${picocolors_1.default.bold(componentName)} to ${componentsDir}/${fileName}`);
        }
        catch (error) {
            spinner.fail(`Failed to add ${componentName}`);
            console.error(picocolors_1.default.red(`  └─ ${error.message}`));
        }
    }
}
