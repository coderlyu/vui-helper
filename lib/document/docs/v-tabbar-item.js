"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.attributes = void 0;
exports.attributes = [
    {
        name: "name",
        description: "标签名称，作为匹配的标识符",
        type: "number/string",
        value: "—",
        default: "当前标签的索引值",
    },
    {
        name: "icon",
        description: "图标名称或图片链接",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "icon-prefix",
        description: "图标类名前缀，同 Icon 组件的 class-prefix 属性",
        type: "string",
        value: "—",
        default: "v-icon",
    },
    {
        name: "dot",
        description: "是否显示图标右上角小红点",
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
        name: "url",
        description: "点击后跳转的链接地址",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "to",
        description: "点击后跳转的目标路由对象，同 vue-router 的 to 属性",
        type: "number/object",
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
];
exports.slots = [
    { name: "icon", description: "自定义图标" },
];
exports.document = { attributes: exports.attributes, slots: exports.slots };
exports.default = exports.document;
