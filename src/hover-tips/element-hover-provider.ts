import {
  HoverProvider,
  TextDocument,
  Position,
  CancellationToken,
  ProviderResult,
  Hover,
  MarkdownString,
  Range,
} from "vscode";
import { toKebabCase } from "../utils";
import { VuiDocument, UIDocument } from "../document";
import { HoverDocumentGenerator } from "../utils/document-generator";

export interface TagObject {
  text: string;
  offset: number;
}
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
    const tag: TagObject | undefined = this.getTag();
    console.log(tag);
    if (!/^v/.test(tag?.text || "")) {
      // 如果不是element的标签(V|v开头) 则返回 null 表示没有hover
      return null;
    }
    const attr = this.getAttr();
    const range = this.getHoverRange(attr);
    return this.getHoverInstance(tag, attr, range);
  }
  /**
   * 获取Hover实例
   *
   * @param tag 标签
   * @param attr 属性
   * @param range 区域
   */
  getHoverInstance(tag: TagObject | undefined, attr: string, range: Range) {
    const kebabCaseTag = toKebabCase(tag?.text);
    const kebabCaseAttr = toKebabCase(attr);

    return this.createHoverInstance(kebabCaseTag, kebabCaseAttr, range);
  }
  /**
   * 创建Hover实例
   *
   * @param tag 标签
   * @param attr 属性
   * @param range 范围
   */
  createHoverInstance(tag: string, attr: string, range: Range): null | Hover {
    let document = VuiDocument;
    if (tag === attr) {
      attr = "";
    }
    if (Object.prototype.hasOwnProperty.call(document, tag)) {
      const tagDocument = document[tag];
      const hoverMarkdownStrings: MarkdownString[] = [];
      Object.keys(tagDocument).forEach((key: string) => {
        const hoverMarkdownString: MarkdownString =
          HoverDocumentGenerator.getInstance().generate<UIDocument>(
            tagDocument,
            key,
            tag,
            attr
          );
        if (hoverMarkdownString) {
          hoverMarkdownStrings.push(hoverMarkdownString);
        }
      });
      return new Hover(hoverMarkdownStrings, range);
    } else {
      return null;
    }
  }
  /**
   * 获取高亮范围
   * @param attr 属性名称
   */
  getHoverRange(attr: string): Range {
    const line = this._document.lineAt(this._position.line).text;
    const start = line.indexOf(attr);
    const end = start + attr.length;
    const range = new Range(
      this._position.line,
      start,
      this._position.line,
      end
    );
    return range;
  }
  /**
   * 获取属性
   */
  getAttr(): string {
    const txt = this.getTextAfterPosition(this._position);
    let end = txt.length;
    let start = txt.lastIndexOf(" ", this._position.character) + 1;
    let parsedTxt = this._document.getText(
      new Range(this._position.line, start, this._position.line, end)
    );
    return this.matchAttr(this.attrReg, parsedTxt);
  }
  /**
   * 匹配标签
   *
   * @param reg 匹配模式
   * @param txt 待匹配字符
   */
  matchAttr(reg: RegExp, txt: string): string {
    let match: RegExpExecArray | null;
    match = reg.exec(txt);
    if (!/"[^"]*"/.test(txt) && match) {
      return match[1];
    }
    return "";
  }
  /**
   * 获取标签
   */
  getTag(): TagObject | undefined {
    let line = this._position.line;
    let tag: TagObject | string | undefined;
    let txt = this.getTextAfterPosition(this._position); // 获取 从 0 开始到光标内容

    // 向前搜索 最多十行 搜索标签
    while (this._position.line - line < 10 && line >= 0) {
      if (line !== this._position.line) {
        txt = this._document.lineAt(line).text;
      }
      tag = this.matchTag(this.tagReg, txt, line);
      if (tag === "break") {
        return undefined;
      }
      if (tag) {
        return <TagObject>tag;
      }
      line--;
    }
    return undefined;
  }
  /**
   * 获取当前位置直到单词结束的内容
   *
   * @param position 文档位置
   */
  getTextAfterPosition(position: Position): string {
    const wordRange = this._document.getWordRangeAtPosition(position);
    const start = new Position(position.line, 0); // 开始下标, 从 0 开始
    let endIndex = (wordRange?.end || position).character; // 结束下标
    const text = this._document.lineAt(position).text; // 获取当前行的文本
    while (endIndex < text.length && /[\w-]/.test(text.charAt(endIndex))) {
      // 查找 endIndex 开始是否有 v-（等开头的）
      endIndex++;
    }
    const end = new Position(position.line, endIndex);
    const range = new Range(start, end);
    return this._document.getText(range); // 获取到从 0 开始到 end 的内容 比如： v-empty
  }
  /**
   * 匹配标签
   * @param reg 匹配模式串
   * @param txt 待匹配字符
   * @param line 匹配行
   */
  matchTag(
    reg: RegExp,
    txt: string,
    line: number
  ): TagObject | string | undefined {
    let match: RegExpExecArray | null;
    let arr: TagObject[] = [];

    if (
      /<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) ||
      (this._position.line === line &&
        (/^\s*[^<]+\s*>[^</>]*$/.test(txt) ||
          /[^<>]*<$/.test(txt[txt.length - 1])))
    ) {
      // 匹配 </v-empty> 结束标签的，直接break
      return "break";
    }
    while ((match = reg.exec(txt))) {
      // 匹配 <v-*
      arr.push({
        text: match[1],
        offset: this._document.offsetAt(new Position(line, match.index)),
      });
    }
    return arr.pop();
  }
}
