"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "show",
        description: "是否展示遮罩层",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "z-index",
        description: "z-index 层级",
        type: "number/string",
        value: "—",
        default: "1",
    },
    {
        name: "duration",
        description: "动画时长，单位秒",
        type: "number/string",
        value: "—",
        default: "0.3",
    },
    {
        name: "class-name",
        description: "自定义类名",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "custom-style",
        description: "自定义样式",
        type: "object",
        value: "—",
        default: "—",
    },
    {
        name: "lock-scroll",
        description: "是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动",
        type: "boolean",
        value: "—",
        default: "true",
    },
];
exports.events = [
    {
        name: "click",
        description: "点击时触发",
        parameter: "event: Event",
    },
];
exports.slots = [
    { name: "default", description: "默认插槽，用于在遮罩层上方嵌入内容" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots };
exports.default = exports.document;
