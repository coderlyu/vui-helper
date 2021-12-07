import * as vscode from "vscode";
import {
  TextDocument,
  Position,
  CancellationToken,
  ProviderResult,
  Hover,
} from "vscode";
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
  // let hover = vscode.languages.registerHoverProvider(
  //   [
  //     {
  //       scheme: "file",
  //       language: "vue",
  //     },
  //   ],
  //   {
  //     provideHover(
  //       document: TextDocument,
  //       position: Position,
  //       token: CancellationToken
  //     ): ProviderResult<Hover> {
  //       console.log(document, position, token);
  //       return new Hover("Hover Content");
  //     },
  //   }
  // );
  context.subscriptions.push(hover);
  context.subscriptions.push(disposable);
}

export function deactivate() {}

export default {
  activate,
  deactivate,
};
