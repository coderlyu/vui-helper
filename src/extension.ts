import * as vscode from "vscode";
import { ElementCompletionItemProvider } from "./completion/element-completion-item-povider";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vui-helper" is now active!');

  let disposable = vscode.commands.registerCommand(
    "vui-helper.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from vui-helper!");
    }
  );
  let doc = vscode.languages.registerCompletionItemProvider(
    [
      {
        language: "vue",
        scheme: "file",
      },
    ],
    new ElementCompletionItemProvider(),
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
  context.subscriptions.push(doc);
  context.subscriptions.push(disposable);
}

export function deactivate() {}
