"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementCompletionProvider = void 0;
const vscode_1 = require("vscode");
const document_1 = require("../document");
class ElementCompletionProvider {
    constructor() {
        this.tagReg = /<([\w-]+)\s*/g;
        this.attrReg = /(?:\(|\s*)([\w-]+)=['"][^'"]*/;
        this.tagStartReg = /<([\w-]*)$/;
        this.pugTagStartReg = /^\s*[\w-]*$/;
    }
    /**
     * 提供自动完成提示
     *
     * @param document 文档
     * @param position 位置
     * @param token token
     * @param context 上下文
     */
    provideCompletionItems(document, position, token, context) {
        this._document = document;
        this._position = position;
        this.token = token;
        let tag = this.getPreTag();
        let attr = this.getPreAttr();
        if (!tag || !/^[V|v]/.test(tag.text || "")) {
            // 如果不是元素的标签(V|v开头) 则返回 null 表示没有 hover
            return null;
        }
        else if (this.isAttrValueStart(tag, attr)) {
            // 如果是属性值的开始
            return this.getAttrValueCompletionItems(tag.text, attr);
        }
        else if (this.isEventStart(tag)) {
            // 优先判定事件
            return this.getEventCompletionItems(tag.text);
        }
        else if (this.isAttrStart(tag)) {
            // 判断属性
            return this.getAttrCompletionItems(tag.text);
        }
        else if (this.isTagStart()) {
            // 判断标签
            return this.getTagCompletionItems(tag.text);
        }
        return null;
    }
    /**
     * 获取前置标签
     */
    getPreTag() {
        let line = this._position.line;
        let tag;
        let txt = this.getTextBeforePosition(this._position);
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
     * 获取前置属性
     */
    getPreAttr() {
        let txt = this.getTextBeforePosition(this._position).replace(/"[^'"]*(\s*)[^'"]*$/, "");
        let end = this._position.character;
        let start = txt.lastIndexOf(" ", end) + 1;
        let parsedTxt = this._document.getText(new vscode_1.Range(this._position.line, start, this._position.line, end));
        return this.matchAttr(this.attrReg, parsedTxt);
    }
    /**
     * 匹配属性
     *
     * @param reg 匹配模式
     * @param txt 匹配文本
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
     * 匹配标签
     * @param reg 匹配模式
     * @param txt 匹配文本
     * @param line 当前行
     */
    matchTag(reg, txt, line) {
        let match;
        let arr = [];
        if (/<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) ||
            (this._position.line === line &&
                (/^\s*[^<]+\s*>[^</>]*$/.test(txt) ||
                    /[^<>]*<$/.test(txt[txt.length - 1])))) {
            return "break";
        }
        while ((match = reg.exec(txt))) {
            arr.push({
                text: match[1],
                offset: this._document.offsetAt(new vscode_1.Position(line, match.index)),
            });
        }
        return arr.pop();
    }
    /**
     * 获取当前位置之前的字符串
     *
     * @param position 位置
     */
    getTextBeforePosition(position) {
        var start = new vscode_1.Position(position.line, 0);
        var range = new vscode_1.Range(start, position);
        return this._document.getText(range);
    }
    /**
     * 是否位属性值的开始
     * @param tag 标签
     * @param attr 属性
     */
    isAttrValueStart(tag, attr) {
        return !!tag && !!attr;
    }
    /**
     * 是否位属性的开始
     * @param tag 标签
     */
    isAttrStart(tag) {
        const preText = this.getTextBeforePosition(this._position);
        return tag && / :?[\w-]*$/.test(preText);
    }
    /**
     * 是否为方法的开始
     * @param tag 标签
     */
    isEventStart(tag) {
        const preText = this.getTextBeforePosition(this._position);
        return tag && / @[\w-]*$/.test(preText);
    }
    /**
     * 获取属性值
     *
     * @param tag 标签
     * @param attr 属性
     */
    getAttrValues(tag, attr) {
        const document = document_1.VUIDocument;
        const attributes = document[tag].attributes || [];
        const attribute = attributes.find((attribute) => attribute.name === attr);
        if (!attribute) {
            return [];
        }
        const values = attribute.value.split(/[,/\\]/).map((item) => item.trim());
        return values;
    }
    /**
     * 获取属性值的提示信息
     *
     * @param tag 标签
     * @param attr 属性
     */
    getAttrValueCompletionItems(tag, attr) {
        let completionItems = [];
        const values = this.getAttrValues(tag, attr);
        values.forEach((value) => {
            if (/\w+/.test(value)) {
                completionItems.push({
                    label: `${value}`,
                    sortText: `0${value}`,
                    detail: `${tag}-${attr}`,
                    kind: vscode_1.CompletionItemKind.Value,
                    insertText: value,
                });
            }
        });
        return completionItems;
    }
    /**
     * 获取事件名称提示
     *
     * @param tag 标签
     */
    getEventCompletionItems(tag) {
        var _a;
        let completionItems = [];
        const document = document_1.VUIDocument;
        const preText = this.getTextBeforePosition(this._position);
        const prefix = preText.replace(/.*@([\w-]*)$/, "$1");
        const events = ((_a = document[tag]) === null || _a === void 0 ? void 0 : _a.events) || [];
        const likeTag = events.filter((evnet) => evnet.name.includes(prefix));
        likeTag.forEach((event) => {
            const start = preText.lastIndexOf("@") + 1;
            const end = start + prefix.length;
            const startPos = new vscode_1.Position(this._position.line, start);
            const endPos = new vscode_1.Position(this._position.line, end);
            const range = new vscode_1.Range(startPos, endPos);
            completionItems.push({
                label: `${event.name}`,
                sortText: `0${event.name}`,
                detail: `${tag} Event`,
                documentation: event.description,
                kind: vscode_1.CompletionItemKind.Value,
                insertText: event.name,
                range,
            });
        });
        return completionItems;
    }
    /**
     * 获取属性的提示信息
     *
     * @param tag 标签
     */
    getAttrCompletionItems(tag) {
        let completionItems = [];
        const document = document_1.VUIDocument;
        const preText = this.getTextBeforePosition(this._position);
        const prefix = preText.replace(/.*[\s@:]/g, "");
        const attributes = document[tag].attributes || [];
        const likeTag = attributes.filter((attribute) => attribute.name.includes(prefix));
        likeTag.forEach((attribute) => {
            const start = Math.max(preText.lastIndexOf(" "), preText.lastIndexOf(":")) + 1;
            const end = start + prefix.length;
            const startPos = new vscode_1.Position(this._position.line, start);
            const endPos = new vscode_1.Position(this._position.line, end);
            const range = new vscode_1.Range(startPos, endPos);
            completionItems.push({
                label: `${attribute.name}`,
                sortText: `0${attribute.name}`,
                detail: `${tag} Attribute`,
                documentation: attribute.description,
                kind: vscode_1.CompletionItemKind.Value,
                insertText: attribute.name,
                range,
            });
        });
        return completionItems;
    }
    /**
     * 是否位标签的开始
     */
    isTagStart() {
        let txt = this.getTextBeforePosition(this._position);
        return this.tagStartReg.test(txt);
    }
    /**
     * 获取标签提示
     */
    getTagCompletionItems(tag) {
        let completionItems = [];
        const preText = this.getTextBeforePosition(this._position);
        const document = document_1.VUIDocument;
        Object.keys(document).forEach((key) => {
            const start = preText.lastIndexOf("<") + 1;
            const end = preText.length - start + 1;
            const startPos = new vscode_1.Position(this._position.line, start);
            const endPos = new vscode_1.Position(this._position.line, end);
            const range = new vscode_1.Range(startPos, endPos);
            completionItems.push({
                label: `${key}`,
                sortText: `0${key}`,
                detail: "VUI Tag",
                kind: vscode_1.CompletionItemKind.Value,
                insertText: new vscode_1.SnippetString()
                    .appendText(`${key}`)
                    .appendTabstop()
                    .appendText(">")
                    .appendTabstop()
                    .appendText(`</${key}>`),
                range,
            });
        });
        return completionItems;
    }
}
exports.ElementCompletionProvider = ElementCompletionProvider;
//# sourceMappingURL=index.js.map