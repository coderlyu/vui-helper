"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "text",
        description: "文字",
        type: "string",
        value: "—",
        default: "—",
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
];
exports.events = [
    {
        name: "click",
        description: "点击格子时触发",
        parameter: "event: Event",
    },
];
exports.slots = [
    { name: "default", description: "自定义宫格的所有内容" },
    { name: "icon", description: "自定义图标" },
    { name: "finished", description: "自定义加载完成后的提示文案" },
    { name: "text", description: "自定义文字" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots };
exports.default = exports.document;
