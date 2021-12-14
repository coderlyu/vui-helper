"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "mode",
        description: "通知栏模式",
        type: "string",
        value: "closeable/ink",
        default: "''",
    },
    {
        name: "text",
        description: "通知文本内容",
        type: "string",
        value: "—",
        default: "''",
    },
    {
        name: "color",
        description: "通知文本颜色",
        type: "string",
        value: "—",
        default: "#f60",
    },
    {
        name: "background",
        description: "滚动条背景",
        type: "string",
        value: "—",
        default: "#fff7cc",
    },
    {
        name: "left-icon",
        description: "左侧图标名称或图片链接",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "delay",
        description: "动画延迟时间 (s)",
        type: "number/string",
        value: "—",
        default: "1",
    },
    {
        name: "speed",
        description: "滚动速率 (px/s)",
        type: "number/string",
        value: "—",
        default: "50",
    },
    {
        name: "scrollable",
        description: "是否开启滚动播放，内容长度溢出时默认开启",
        type: "boolean",
        value: "—",
        default: "—",
    },
    {
        name: "wrapable",
        description: "是否开启文本换行，只在禁用滚动时生效",
        type: "boolean",
        value: "—",
        default: "false",
    },
];
exports.events = [
    {
        name: "click",
        description: "点击通知栏时触发",
        parameter: "event: Event",
    },
    {
        name: "close",
        description: "关闭通知栏时触发",
        parameter: "event: Event",
    },
    {
        name: "replay",
        description: "每当滚动栏重新开始滚动时触发",
        parameter: "—",
    },
];
exports.slots = [
    { name: "default", description: "通知文本内容" },
    { name: "left-icon", description: "自定义左侧图标" },
    { name: "right-icon", description: "自定义右侧图标" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots };
exports.default = exports.document;
//# sourceMappingURL=v-notice-bar.js.map