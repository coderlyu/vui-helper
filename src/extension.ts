import * as vscode from "vscode";
import {
  TextDocument,
  Position,
  CancellationToken,
  ProviderResult,
  Hover,
} from "vscode";
import { ElementCompletionProvider } from "./completion";
import { ElementHoverProvider } from "./hover/provider";
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vui-helper" is now active!');
  const disposable = vscode.languages.registerCompletionItemProvider(
    [
      {
        language: "vue",
        scheme: "file",
      },
    ],
    new ElementCompletionProvider(),
    "",
    " ",
    ":",
    "<",
    '"',
    "'",
    "/",
    "@",
    "(",
    "-"
  );
  const hover = vscode.languages.registerHoverProvider(
    [
      {
        language: "vue",
        scheme: "file",
      },
    ],
    new ElementHoverProvider()
  );
  context.subscriptions.push(hover);
  context.subscriptions.push(disposable);
}

export function deactivate() {}

export default {
  activate,
  deactivate,
};
