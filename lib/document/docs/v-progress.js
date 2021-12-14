"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.attributes = void 0;
exports.attributes = [
    {
        name: "percentage",
        description: "进度百分比",
        type: "number/string",
        value: "—",
        default: "0",
    },
    {
        name: "stroke-width",
        description: "进度条粗细，默认单位为px",
        type: "number/string",
        value: "—",
        default: "4px",
    },
    {
        name: "color",
        description: "进度条颜色",
        type: "string",
        value: "—",
        default: "#1989fa",
    },
    {
        name: "track-color",
        description: "轨道颜色",
        type: "string",
        value: "—",
        default: "#e5e5e5",
    },
    {
        name: "pivot-text",
        description: "进度文字内容",
        type: "string",
        value: "—",
        default: "百分比",
    },
    {
        name: "pivot-color",
        description: "进度文字背景色",
        type: "string",
        value: "—",
        default: "同进度条颜色",
    },
    {
        name: "text-color",
        description: "进度文字颜色",
        type: "string",
        value: "—",
        default: "white",
    },
    {
        name: "inactive",
        description: "是否置灰",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "show-pivot",
        description: "是否显示进度文字",
        type: "boolean",
        value: "—",
        default: "true",
    },
];
exports.document = { attributes: exports.attributes };
exports.default = exports.document;
//# sourceMappingURL=v-progress.js.map