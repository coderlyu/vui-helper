"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.methods = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "v-model",
        description: "是否处于加载状态，加载过程中不触发load事件",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "finished",
        description: "是否已加载完成，加载完成后不再触发load事件",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "error",
        description: "是否加载失败，加载失败后点击错误提示可以重新触发load事件，必须使用sync修饰符",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "offset",
        description: "滚动条与底部距离小于 offset 时触发load事件",
        type: "number/string",
        value: "—",
        default: "300",
    },
    {
        name: "loading-text",
        description: "加载过程中的提示文案",
        type: "string",
        value: "—",
        default: "加载中...",
    },
    {
        name: "finished-text",
        description: "加载完成后的提示文案",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "error-text",
        description: "加载失败后的提示文案",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "immediate-check",
        description: "是否在初始化时立即执行滚动位置检查",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "direction",
        description: "滚动触发加载的方向",
        type: "string",
        value: "up/down",
        default: "down",
    },
];
exports.events = [
    {
        name: "load",
        description: "滚动条与底部距离小于 offset 时触发",
        parameter: "—",
    },
];
exports.methods = [
    {
        name: "check",
        description: "检查当前的滚动位置，若已滚动至底部，则会触发 load 事件",
        parameter: "—",
    },
];
exports.slots = [
    { name: "default", description: "列表内容" },
    { name: "loading", description: "自定义底部加载中提示" },
    { name: "finished", description: "自定义加载完成后的提示文案" },
    { name: "error", description: "自定义加载失败后的提示文案" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots, methods: exports.methods };
exports.default = exports.document;
