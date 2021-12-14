"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const completion_1 = require("./completion");
const provider_1 = require("./hover/provider");
function activate(context) {
    console.log('Congratulations, your extension "vui-helper" is now active!');
    const disposable = vscode.languages.registerCompletionItemProvider([
        {
            language: "vue",
            scheme: "file",
        },
    ], new completion_1.ElementCompletionProvider(), "", " ", ":", "<", '"', "'", "/", "@", "(", "-");
    const hover = vscode.languages.registerHoverProvider([
        {
            language: "vue",
            scheme: "file",
        },
    ], new provider_1.ElementHoverProvider());
    context.subscriptions.push(hover);
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
exports.default = {
    activate,
    deactivate,
};
//# sourceMappingURL=extension.js.map