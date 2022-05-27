import { MarkdownString } from "vscode";
import {
  DocumentSlot,
  DocumentScopedSlot,
  DocumentMethod,
  DocumentAttribute,
  BaseDocument,
} from "../document/index";

export class HoverDocumentGenerator {
  static instance: HoverDocumentGenerator;

  /**
   * 生成属性文档表格
   *
   * @template T type extends BaseDocument
   * @param {T} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 在标签的属性上悬停时具有
   * @return {*}  {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateAttribute<T extends BaseDocument>(
    document: T,
    tag: string,
    attribute: string
  ): MarkdownString {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString("", true);
    const attributes = document.attributes || []; // 取得属性列表
    if (attributes.length) {
      // 生成表头
      markdownString.appendMarkdown(`### ${tag} 属性 \r`);
      markdownString.appendMarkdown(
        "| 属性 | 说明 | 类型 | 可选值 | 默认值 |\r"
      );
      markdownString.appendMarkdown("|---|:-:|:-:|:-:|:-:|\r");
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      attributes.forEach((row: DocumentAttribute) => {
        markdownString.appendMarkdown(
          `|${row.name}|${row.description}|${row.type}|${row.value}|${row.default}|\r`
        );
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = attributes.find(
        (row: DocumentAttribute) => row.name === attribute
      );
      if (row) {
        markdownString.appendMarkdown(
          `|${row.name}|${row.description}|${row.type}|${row.value}|${row.default}|\r`
        );
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString("", true);
    }
    return markdownString;
  }

  /**
   * 生成方法文档表格
   *
   * @template T type extends BaseDocument
   * @param {T} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 在标签的属性上悬停时具有
   * @return {*}  {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateMethods<T extends BaseDocument>(
    document: T,
    tag: string,
    attribute: string
  ): MarkdownString {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString("", true);
    const methods = document.methods || [];
    if (methods.length) {
      markdownString.appendMarkdown(`### ${tag} 方法\r`);
      markdownString.appendMarkdown("| 方法 | 说明 | 参数 |\r");
      markdownString.appendMarkdown("|---|---|:-:|\r");
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      methods.forEach((row: DocumentMethod) => {
        markdownString.appendMarkdown(
          `|${row.name}|${row.description}|${row.parameter}|\r`
        );
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = methods.find((row: DocumentMethod) => row.name === attribute);
      if (row) {
        markdownString.appendMarkdown(
          `|${row.name}|${row.description}|${row.parameter}|\r`
        );
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString("", true);
    }
    return markdownString;
  }

  /**
   * 生成事件文档表格
   *
   * @template T type extends BaseDocument
   * @param {T} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 在标签的属性上悬停时具有
   * @return {*}  {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateEvents<T extends BaseDocument>(
    document: T,
    tag: string,
    attribute: string
  ): MarkdownString {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString("", true);
    const events = document.events || [];
    if (events.length) {
      markdownString.appendMarkdown(`### ${tag} 事件\r`);
      markdownString.appendMarkdown("| 方法 | 说明 | 参数 |\r");
      markdownString.appendMarkdown("|---|---|:-:|\r");
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      events.forEach((row: DocumentMethod) => {
        markdownString.appendMarkdown(
          `|${row.name}|${row.description}|${row.parameter}|\r`
        );
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = events.find((row: DocumentMethod) => row.name === attribute);
      if (row) {
        markdownString.appendMarkdown(
          `|${row.name}|${row.description}|${row.parameter}|\r`
        );
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString("", true);
    }
    return markdownString;
  }

  /**
   * 生成插槽文档表格
   *
   * @template T type extends BaseDocument
   * @param {T} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 在标签的属性上悬停时具有
   * @return {*}  {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateSlots<T extends BaseDocument>(
    document: T,
    tag: string,
    attribute: string
  ): MarkdownString {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString("", true);
    const slots = document.slots || [];
    if (slots.length) {
      markdownString.appendMarkdown(`### ${tag} 插槽\r`);
      markdownString.appendMarkdown("| 插槽 | 说明 |\r");
      markdownString.appendMarkdown("|---|:-:|\r");
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      slots.forEach((row: DocumentSlot) => {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`);
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = slots.find((row: DocumentSlot) => row.name === attribute);
      if (row) {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`);
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString("", true);
    }
    return markdownString;
  }

  /**
   * 生成局部插槽文档表格
   *
   * @template T type extends BaseDocument
   * @param {T} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 在标签的属性上悬停时具有
   * @return {*}  {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateScopedSlots<T extends BaseDocument>(
    document: T,
    tag: string,
    attribute: string
  ): MarkdownString {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString("", true);
    const scopedSlots = document.scopedSlots || [];
    if (scopedSlots.length) {
      markdownString.appendMarkdown(`### ${tag} 插槽\r`);
      markdownString.appendMarkdown("| 插槽 | 说明 |\r");
      markdownString.appendMarkdown("|---|---|\r");
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      scopedSlots.forEach((row: DocumentScopedSlot) => {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`);
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = scopedSlots.find(
        (row: DocumentScopedSlot) => row.name === attribute
      );
      if (row) {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`);
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString("", true);
    }
    return markdownString;
  }

  /**
   * 生成其他文档表格
   *
   * @template T type extends BaseDocument
   * @param {T} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 文档对象具体的属性值
   * @return {*}  {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateOther<T extends BaseDocument>(
    document: T,
    tag: string,
    attribute: string
  ): MarkdownString {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString("", true);
    const attributes = document.attributes || [];
    if (attributes.length) {
      markdownString.appendMarkdown(`### ${tag} ${attribute} \r`);

      const keys = Object.keys(attributes[0]);

      markdownString.appendMarkdown(`| ${keys.join("|")} |\r`);
      markdownString.appendMarkdown(`| ${keys.map(() => "---").join("|")} |\r`);
      // 遍历属性值值生成文档
      attributes.forEach((row) => {
        let str = "|";
        keys.forEach((key: string) => {
          str += `${row[key as keyof DocumentAttribute]}|`;
        });
        str += "\r";
        markdownString.appendMarkdown(str);
      });
      isUndefined = false;
    }
    if (isUndefined) {
      markdownString = new MarkdownString("", true);
    }
    return markdownString;
  }

  /**
   * 宣统提示文档生成入口
   *
   * @template T 文档类型
   * @param {T} document 文档
   * @param {string} key 属性key
   * @param {string} tag 文档标签
   * @param {string} attr 文档属性
   * @return {*}  {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  generate<T extends BaseDocument>(
    document: T,
    key: string,
    tag: string,
    attr: string
  ): MarkdownString {
    let markdownString: MarkdownString = new MarkdownString("");
    switch (key) {
      case "attributes":
        markdownString = this.generateAttribute<T>(document, tag, attr);
        break;
      case "methods":
        markdownString = this.generateMethods<T>(document, tag, attr);
        break;
      case "events":
        markdownString = this.generateEvents<T>(document, tag, attr);
        break;
      case "slots":
        markdownString = this.generateSlots<T>(document, tag, attr);
        break;
      case "scopedSlots":
        markdownString = this.generateScopedSlots<T>(document, tag, attr);
        break;
      default:
        // 生成其他文档时 属性为key
        markdownString = this.generateOther<T>(document, tag, key);
    }
    return markdownString;
  }

  static getInstance(): HoverDocumentGenerator {
    if (!this.instance) {
      this.instance = new HoverDocumentGenerator();
    }
    return this.instance;
  }
}
