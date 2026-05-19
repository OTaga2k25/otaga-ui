"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCommand = initCommand;
const prompts_1 = __importDefault(require("prompts"));
const picocolors_1 = __importDefault(require("picocolors"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
async function initCommand() {
    console.log(picocolors_1.default.bold(picocolors_1.default.cyan('\nWelcome to Otaga UI!\n')));
    const response = await (0, prompts_1.default)([
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
        console.log(picocolors_1.default.yellow('Operation cancelled.'));
        return;
    }
    const configPath = path_1.default.join(process.cwd(), 'otaga-ui.json');
    const config = {
        componentsDir: response.componentsDir,
    };
    fs_1.default.writeFileSync(configPath, JSON.stringify(config, null, 2));
    // Ensure the directory exists
    const componentsPath = path_1.default.join(process.cwd(), response.componentsDir);
    if (!fs_1.default.existsSync(componentsPath)) {
        fs_1.default.mkdirSync(componentsPath, { recursive: true });
    }
    console.log(picocolors_1.default.green(`\nSuccess! otaga-ui.json has been created.`));
    console.log(`You can now run ${picocolors_1.default.cyan('npx otaga-ui add <component>')} to add components.\n`);
}
