"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.attributes = void 0;
exports.attributes = [
    {
        name: "title",
        description: "分组标题",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "border",
        description: "是否显示外边框",
        type: "boolean",
        value: "—",
        default: "true",
    },
];
exports.slots = [
    { name: "default", description: "默认插槽" },
    { name: "title", description: "自定义分组标题" },
];
exports.document = { attributes: exports.attributes, slots: exports.slots };
exports.default = exports.document;
