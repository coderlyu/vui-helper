"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.attributes = void 0;
exports.attributes = [
    {
        name: "active-color",
        description: "菜单标题和选项的选中态颜色",
        type: "string",
        value: "—",
        default: "#ee0a24",
    },
    {
        name: "direction",
        description: "菜单展开方向",
        type: "string",
        value: "down/up",
        default: "down",
    },
    {
        name: "z-index",
        description: "菜单栏 z-index 层级",
        type: "number/string",
        value: "—",
        default: "10",
    },
    {
        name: "duration",
        description: "动画时长，单位秒",
        type: "number/string",
        value: "—",
        default: "0.2",
    },
    {
        name: "overlay",
        description: "是否显示遮罩层",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "close-on-click-overlay",
        description: "是否在点击遮罩层后关闭菜单",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "close-on-click-outside",
        description: "是否在点击外部元素后关闭菜单",
        type: "boolean",
        value: "—",
        default: "true",
    },
];
exports.document = { attributes: exports.attributes };
exports.default = exports.document;
