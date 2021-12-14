"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "span",
        description: "列元素宽度",
        type: "number/string",
        value: "—",
        default: "—",
    },
    {
        name: "offset",
        description: "列元素偏移距离",
        type: "number/string",
        value: "—",
        default: "—",
    },
    {
        name: "tag",
        description: "自定义元素标签",
        type: "string",
        value: "—",
        default: "div",
    },
];
exports.events = [
    {
        name: "click",
        description: "点击时触发",
        parameter: "event: Event",
    },
];
exports.document = { attributes: exports.attributes, events: exports.events };
exports.default = exports.document;
