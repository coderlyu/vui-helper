import * as vscode from "vscode";
import { ElementHoverProvier } from "./hover-tips/element-hover-provider";
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vui-helper" is now active!');

  let disposable = vscode.commands.registerCommand(
    "vui-helper.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from vui-helper!");
    }
  );
  let hover = vscode.languages.registerHoverProvider(
    [
      {
        language: "vue",
        scheme: "file",
      },
    ],
    new ElementHoverProvier()
  );
  context.subscriptions.push(hover);
  context.subscriptions.push(disposable);
}

export function deactivate() {}
