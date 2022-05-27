"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.attributes = void 0;
exports.attributes = [
    {
        name: "title",
        description: "标题",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "disabled",
        description: "是否禁用标签",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "dot",
        description: "是否在标题右上角显示小红点",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "badge",
        description: "图标右上角徽标的内容",
        type: "number/string",
        value: "—",
        default: "—",
    },
    {
        name: "name",
        description: "标签名称，作为匹配的标识符",
        type: "number/string",
        value: "—",
        default: "标签的索引值",
    },
    {
        name: "url",
        description: "点击后跳转的链接地址",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "to",
        description: "点击后跳转的目标路由对象，同 vue-router 的 to 属性",
        type: "string/object",
        value: "—",
        default: "—",
    },
    {
        name: "replace",
        description: "是否在跳转时替换当前页面历史",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "title-style",
        description: "自定义标题样式",
        type: "any",
        value: "—",
        default: "—",
    },
];
exports.slots = [
    { name: "default", description: "标签页内容" },
    { name: "title", description: "自定义标题" },
];
exports.document = { attributes: exports.attributes, slots: exports.slots };
exports.default = exports.document;
