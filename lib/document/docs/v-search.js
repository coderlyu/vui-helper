"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "label",
        description: "搜索框左侧文本",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "shape",
        description: "搜索框形状",
        type: "string",
        value: "square/round",
        default: "square",
    },
    {
        name: "background",
        description: "搜索框外部背景色",
        type: "string",
        value: "—",
        default: "#f2f2f2",
    },
    {
        name: "maxlength",
        description: "输入的最大字符数",
        type: "number/string",
        value: "—",
        default: "—",
    },
    {
        name: "placeholder",
        description: "占位提示文字",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "clearable",
        description: "是否启用清除图标，点击清除图标后会清空输入框",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "clear-trigger",
        description: "显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示",
        type: "string",
        value: "—",
        default: "focus",
    },
    {
        name: "autofocus",
        description: "是否自动聚焦，iOS 系统不支持该属性",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "show-action",
        description: "是否在搜索框右侧显示取消按钮",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "action-text",
        description: "取消按钮文字",
        type: "boolean",
        value: "—",
        default: "取消",
    },
    {
        name: "disabled",
        description: "是否禁用输入框",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "readonly",
        description: "是否将输入框设为只读",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "error",
        description: "是否将输入内容标红",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "input-align",
        description: "输入框内容对齐方式",
        type: "string",
        value: "left/center/right",
        default: "left",
    },
    {
        name: "left-icon",
        description: "输入框左侧图标名称或图片链接",
        type: "string",
        value: "—",
        default: "search",
    },
    {
        name: "right-icon",
        description: "输入框右侧图标名称或图片链接",
        type: "string",
        value: "—",
        default: "—",
    },
];
exports.events = [
    {
        name: "search",
        description: "确定搜索时触发",
        parameter: "value: string (当前输入的值)",
    },
    {
        name: "input",
        description: "输入框内容变化时触发",
        parameter: "value: string (当前输入的值)",
    },
    {
        name: "focus",
        description: "输入框获得焦点时触发",
        parameter: "event: Event",
    },
    {
        name: "blur",
        description: "输入框失去焦点时触发",
        parameter: "event: Event",
    },
    {
        name: "clear",
        description: "点击清除按钮后触发",
        parameter: "event: Event",
    },
    {
        name: "cancel",
        description: "点击取消按钮时触发",
        parameter: "—",
    },
];
exports.slots = [
    { name: "left", description: "自定义左侧内容（搜索框外）" },
    {
        name: "action",
        description: "自定义右侧内容（搜索框外），设置show-action属性后展示",
    },
    { name: "label", description: "自定义左侧文本（搜索框内）" },
    { name: "left-icon", description: "自定义左侧图标（搜索框内）" },
    { name: "right-icon", description: "自定义右侧图标（搜索框内）" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots };
exports.default = exports.document;
