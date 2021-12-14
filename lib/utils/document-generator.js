"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverDocumentGenerator = void 0;
const vscode_1 = require("vscode");
class HoverDocumentGenerator {
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
    generateAttribute(document, tag, attribute) {
        let isUndefined = true; // 标记是否具有文档
        let markdownString = new vscode_1.MarkdownString("", true);
        const attributes = document.attributes || []; // 取得属性列表
        if (attributes.length) {
            // 生成表头
            markdownString.appendMarkdown(`### ${tag} 属性 \r`);
            markdownString.appendMarkdown("| 属性 | 说明 | 类型 | 可选值 | 默认值 |\r");
            markdownString.appendMarkdown("|---|:-:|:-:|:-:|:-:|\r");
        }
        if (attribute.length === 0) {
            // 属性 和标签一样 显示全部
            attributes.forEach((row) => {
                markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.type}|${row.value}|${row.default}|\r`);
                isUndefined = false;
            });
        }
        else {
            // 属性和标签不一样 显示标签下的某个属性的信息
            const row = attributes.find((row) => row.name === attribute);
            if (row) {
                markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.type}|${row.value}|${row.default}|\r`);
                isUndefined = false;
            }
        }
        if (isUndefined) {
            markdownString = new vscode_1.MarkdownString("", true);
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
    generateMethods(document, tag, attribute) {
        let isUndefined = true; // 标记是否具有文档
        let markdownString = new vscode_1.MarkdownString("", true);
        const methods = document.methods || [];
        if (methods.length) {
            markdownString.appendMarkdown(`### ${tag} 方法\r`);
            markdownString.appendMarkdown("| 方法 | 说明 | 参数 |\r");
            markdownString.appendMarkdown("|---|---|:-:|\r");
        }
        if (attribute.length === 0) {
            // 属性 和标签一样 显示全部
            methods.forEach((row) => {
                markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.parameter}|\r`);
                isUndefined = false;
            });
        }
        else {
            // 属性和标签不一样 显示标签下的某个属性的信息
            const row = methods.find((row) => row.name === attribute);
            if (row) {
                markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.parameter}|\r`);
                isUndefined = false;
            }
        }
        if (isUndefined) {
            markdownString = new vscode_1.MarkdownString("", true);
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
    generateEvents(document, tag, attribute) {
        let isUndefined = true; // 标记是否具有文档
        let markdownString = new vscode_1.MarkdownString("", true);
        const events = document.events || [];
        if (events.length) {
            markdownString.appendMarkdown(`### ${tag} 事件\r`);
            markdownString.appendMarkdown("| 方法 | 说明 | 参数 |\r");
            markdownString.appendMarkdown("|---|---|:-:|\r");
        }
        if (attribute.length === 0) {
            // 属性 和标签一样 显示全部
            events.forEach((row) => {
                markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.parameter}|\r`);
                isUndefined = false;
            });
        }
        else {
            // 属性和标签不一样 显示标签下的某个属性的信息
            const row = events.find((row) => row.name === attribute);
            if (row) {
                markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.parameter}|\r`);
                isUndefined = false;
            }
        }
        if (isUndefined) {
            markdownString = new vscode_1.MarkdownString("", true);
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
    generateSlots(document, tag, attribute) {
        let isUndefined = true; // 标记是否具有文档
        let markdownString = new vscode_1.MarkdownString("", true);
        const slots = document.slots || [];
        if (slots.length) {
            markdownString.appendMarkdown(`### ${tag} 插槽\r`);
            markdownString.appendMarkdown("| 插槽 | 说明 |\r");
            markdownString.appendMarkdown("|---|:-:|\r");
        }
        if (attribute.length === 0) {
            // 属性 和标签一样 显示全部
            slots.forEach((row) => {
                markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`);
                isUndefined = false;
            });
        }
        else {
            // 属性和标签不一样 显示标签下的某个属性的信息
            const row = slots.find((row) => row.name === attribute);
            if (row) {
                markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`);
                isUndefined = false;
            }
        }
        if (isUndefined) {
            markdownString = new vscode_1.MarkdownString("", true);
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
    generateScopedSlots(document, tag, attribute) {
        let isUndefined = true; // 标记是否具有文档
        let markdownString = new vscode_1.MarkdownString("", true);
        const scopedSlots = document.scopedSlots || [];
        if (scopedSlots.length) {
            markdownString.appendMarkdown(`### ${tag} 插槽\r`);
            markdownString.appendMarkdown("| 插槽 | 说明 |\r");
            markdownString.appendMarkdown("|---|---|\r");
        }
        if (attribute.length === 0) {
            // 属性 和标签一样 显示全部
            scopedSlots.forEach((row) => {
                markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`);
                isUndefined = false;
            });
        }
        else {
            // 属性和标签不一样 显示标签下的某个属性的信息
            const row = scopedSlots.find((row) => row.name === attribute);
            if (row) {
                markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`);
                isUndefined = false;
            }
        }
        if (isUndefined) {
            markdownString = new vscode_1.MarkdownString("", true);
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
    generateOther(document, tag, attribute) {
        let isUndefined = true; // 标记是否具有文档
        let markdownString = new vscode_1.MarkdownString("", true);
        const attributes = document.attributes || [];
        if (attributes.length) {
            markdownString.appendMarkdown(`### ${tag} ${attribute} \r`);
            const keys = Object.keys(attributes[0]);
            markdownString.appendMarkdown(`| ${keys.join("|")} |\r`);
            markdownString.appendMarkdown(`| ${keys.map(() => "---").join("|")} |\r`);
            // 遍历属性值值生成文档
            attributes.forEach((row) => {
                let str = "|";
                keys.forEach((key) => {
                    str += `${row[key]}|`;
                });
                str += "\r";
                markdownString.appendMarkdown(str);
            });
            isUndefined = false;
        }
        if (isUndefined) {
            markdownString = new vscode_1.MarkdownString("", true);
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
    generate(document, key, tag, attr) {
        let markdownString = new vscode_1.MarkdownString("");
        switch (key) {
            case "attributes":
                markdownString = this.generateAttribute(document, tag, attr);
                break;
            case "methods":
                markdownString = this.generateMethods(document, tag, attr);
                break;
            case "events":
                markdownString = this.generateEvents(document, tag, attr);
                break;
            case "slots":
                markdownString = this.generateSlots(document, tag, attr);
                break;
            case "scopedSlots":
                markdownString = this.generateScopedSlots(document, tag, attr);
                break;
            default:
                // 生成其他文档时 属性为key
                markdownString = this.generateOther(document, tag, key);
        }
        return markdownString;
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new HoverDocumentGenerator();
        }
        return this.instance;
    }
}
exports.HoverDocumentGenerator = HoverDocumentGenerator;
//# sourceMappingURL=document-generator.js.map