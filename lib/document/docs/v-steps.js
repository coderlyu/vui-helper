"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "active",
        description: "当前步骤",
        type: "number/string",
        value: "—",
        default: "0",
    },
    {
        name: "direction",
        description: "显示方向",
        type: "string",
        value: "horizontal/vertical",
        default: "horizontal",
    },
    {
        name: "active-color",
        description: "激活状态颜色",
        type: "string",
        value: "—",
        default: "#07c160",
    },
    {
        name: "inactive-color",
        description: "未激活状态颜色",
        type: "string",
        value: "—",
        default: "#969799",
    },
    {
        name: "active-icon",
        description: "激活状态底部图标",
        type: "string",
        value: "—",
        default: "checked",
    },
    {
        name: "inactive-icon",
        description: "未激活状态底部图标",
        type: "string",
        value: "—",
        default: "—",
    },
];
exports.events = [
    {
        name: "click-step",
        description: "点击步骤的标题或图标时触发",
        parameter: "index: number",
    },
];
exports.document = { attributes: exports.attributes, events: exports.events };
exports.default = exports.document;
