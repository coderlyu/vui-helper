import {
  HoverProvider,
  TextDocument,
  Position,
  CancellationToken,
  ProviderResult,
  Hover,
  workspace,
  MarkdownString,
  Range,
} from "vscode";

export class ElementHoverProvier implements HoverProvider {
  private _position!: Position;
  private _document!: TextDocument;
  private _token!: CancellationToken;
  private tagReg: RegExp = /<([\w-]+)\s*/g;
  private attrReg: RegExp = /(?:\(|\s*)([\w-]+)=?/;

  provideHover(
    document: TextDocument,
    position: Position,
    token: CancellationToken
  ): ProviderResult<Hover> {
    this._document = document;
    this._position = position;
    this._token = token;
    console.log(document, position, token);
    return {
      contents: ["Hover Content"],
    };
  }
}
