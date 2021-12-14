"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.attributes = void 0;
exports.attributes = [
    {
        name: "v-model",
        description: "当前进度",
        type: "number",
        value: "—",
        default: "—",
    },
    {
        name: "rate",
        description: "目标进度",
        type: "number/string",
        value: "—",
        default: "100",
    },
    {
        name: "size",
        description: "圆环直径，默认单位为 px",
        type: "number/string",
        value: "—",
        default: "100px",
    },
    {
        name: "color",
        description: "进度条颜色，传入对象格式可以定义渐变色",
        type: "string/object",
        value: "—",
        default: "#1989fa",
    },
    {
        name: "layer-color",
        description: "轨道颜色",
        type: "string",
        value: "—",
        default: "white",
    },
    {
        name: "fill",
        description: "填充颜色",
        type: "string",
        value: "—",
        default: "none",
    },
    {
        name: "speed",
        description: "动画速度（单位为 rate/s）",
        type: "number/string",
        value: "—",
        default: "0",
    },
    {
        name: "text",
        description: "文字",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "stroke-width",
        description: "进度条宽度",
        type: "number/string",
        value: "—",
        default: "40",
    },
    {
        name: "stroke-linecap",
        description: "进度条端点的形状",
        type: "string",
        value: "round/sqaure/butt",
        default: "round",
    },
    {
        name: "clockwise",
        description: "是否顺时针增加",
        type: "boolean",
        value: "—",
        default: "true",
    },
];
exports.slots = [
    { name: "default", description: "自定义文字内容" },
];
exports.document = { attributes: exports.attributes, slots: exports.slots };
exports.default = exports.document;
//# sourceMappingURL=v-circle.js.map