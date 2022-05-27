"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "size",
        description: "大小",
        type: "string",
        value: "default/medium",
        default: "default",
    },
    {
        name: "color",
        description: "标签颜色，可渐变色，为 plain 时，失效",
        type: "string",
        value: "—",
        default: "#ff1f50",
    },
    {
        name: "plain",
        description: "是否为空心样式",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "round",
        description: "是否为圆角样式",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "mark",
        description: "是否为标记样式",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "text-color",
        description: "文本颜色，优先级高于color属性",
        type: "string",
        value: "—",
        default: "white",
    },
    {
        name: "closeable",
        description: "是否为可关闭标签",
        type: "boolean",
        value: "—",
        default: "false",
    },
];
exports.events = [
    {
        name: "click",
        description: "点击时触发",
        parameter: "event: Event",
    },
    {
        name: "close",
        description: "关闭标签时触发",
        parameter: "—",
    },
];
exports.slots = [
    { name: "default", description: "标签显示内容" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots };
exports.default = exports.document;
