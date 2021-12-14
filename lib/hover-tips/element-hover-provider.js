"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementHoverProvier = void 0;
const vscode_1 = require("vscode");
const utils_1 = require("../utils");
const document_1 = require("../document");
const document_generator_1 = require("../utils/document-generator");
class ElementHoverProvier {
    constructor() {
        this.tagReg = /<([\w-]+)\s*/g;
        this.attrReg = /(?:\(|\s*)([\w-]+)=?/;
    }
    provideHover(document, position, token) {
        this._document = document;
        this._position = position;
        this._token = token;
        console.log(document, position, token);
        const tag = this.getTag();
        console.log(tag);
        if (!/^v/.test((tag === null || tag === void 0 ? void 0 : tag.text) || "")) {
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
    getHoverInstance(tag, attr, range) {
        const kebabCaseTag = (0, utils_1.toKebabCase)(tag === null || tag === void 0 ? void 0 : tag.text);
        const kebabCaseAttr = (0, utils_1.toKebabCase)(attr);
        return this.createHoverInstance(kebabCaseTag, kebabCaseAttr, range);
    }
    /**
     * 创建Hover实例
     *
     * @param tag 标签
     * @param attr 属性
     * @param range 范围
     */
    createHoverInstance(tag, attr, range) {
        let document = document_1.VuiDocument;
        if (tag === attr) {
            attr = "";
        }
        if (Object.prototype.hasOwnProperty.call(document, tag)) {
            const tagDocument = document[tag];
            const hoverMarkdownStrings = [];
            Object.keys(tagDocument).forEach((key) => {
                const hoverMarkdownString = document_generator_1.HoverDocumentGenerator.getInstance().generate(tagDocument, key, tag, attr);
                if (hoverMarkdownString) {
                    hoverMarkdownStrings.push(hoverMarkdownString);
                }
            });
            return new vscode_1.Hover(hoverMarkdownStrings, range);
        }
        else {
            return null;
        }
    }
    /**
     * 获取高亮范围
     * @param attr 属性名称
     */
    getHoverRange(attr) {
        const line = this._document.lineAt(this._position.line).text;
        const start = line.indexOf(attr);
        const end = start + attr.length;
        const range = new vscode_1.Range(this._position.line, start, this._position.line, end);
        return range;
    }
    /**
     * 获取属性
     */
    getAttr() {
        const txt = this.getTextAfterPosition(this._position);
        let end = txt.length;
        let start = txt.lastIndexOf(" ", this._position.character) + 1;
        let parsedTxt = this._document.getText(new vscode_1.Range(this._position.line, start, this._position.line, end));
        return this.matchAttr(this.attrReg, parsedTxt);
    }
    /**
     * 匹配标签
     *
     * @param reg 匹配模式
     * @param txt 待匹配字符
     */
    matchAttr(reg, txt) {
        let match;
        match = reg.exec(txt);
        if (!/"[^"]*"/.test(txt) && match) {
            return match[1];
        }
        return "";
    }
    /**
     * 获取标签
     */
    getTag() {
        let line = this._position.line;
        let tag;
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
                return tag;
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
    getTextAfterPosition(position) {
        const wordRange = this._document.getWordRangeAtPosition(position);
        const start = new vscode_1.Position(position.line, 0); // 开始下标, 从 0 开始
        let endIndex = ((wordRange === null || wordRange === void 0 ? void 0 : wordRange.end) || position).character; // 结束下标
        const text = this._document.lineAt(position).text; // 获取当前行的文本
        while (endIndex < text.length && /[\w-]/.test(text.charAt(endIndex))) {
            // 查找 endIndex 开始是否有 v-（等开头的）
            endIndex++;
        }
        const end = new vscode_1.Position(position.line, endIndex);
        const range = new vscode_1.Range(start, end);
        return this._document.getText(range); // 获取到从 0 开始到 end 的内容 比如： v-empty
    }
    /**
     * 匹配标签
     * @param reg 匹配模式串
     * @param txt 待匹配字符
     * @param line 匹配行
     */
    matchTag(reg, txt, line) {
        let match;
        let arr = [];
        if (/<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) ||
            (this._position.line === line &&
                (/^\s*[^<]+\s*>[^</>]*$/.test(txt) ||
                    /[^<>]*<$/.test(txt[txt.length - 1])))) {
            // 匹配 </v-empty> 结束标签的，直接break
            return "break";
        }
        while ((match = reg.exec(txt))) {
            // 匹配 <v-*
            arr.push({
                text: match[1],
                offset: this._document.offsetAt(new vscode_1.Position(line, match.index)),
            });
        }
        return arr.pop();
    }
}
exports.ElementHoverProvier = ElementHoverProvier;
//# sourceMappingURL=element-hover-provider.js.map