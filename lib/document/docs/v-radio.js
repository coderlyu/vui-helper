"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "name",
        description: "标识符",
        type: "any",
        value: "—",
        default: "—",
    },
    {
        name: "shape",
        description: "形状",
        type: "string",
        value: "round/square",
        default: "round",
    },
    {
        name: "disabled",
        description: "是否为禁用状态",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "label-disabled",
        description: "是否禁用文本内容点击",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "label-position",
        description: "文本位置",
        type: "string",
        value: "right/left",
        default: "right",
    },
    {
        name: "icon-size",
        description: "图标大小，默认单位为px",
        type: "number/string",
        value: "—",
        default: "20px",
    },
    {
        name: "checked-color",
        description: "选中状态颜色",
        type: "string",
        value: "—",
        default: "#1989fa",
    },
];
exports.events = [
    {
        name: "click",
        description: "点击标题文本时触发",
        parameter: "event: Event",
    },
];
exports.slots = [
    { name: "default", description: "自定义文本" },
    { name: "icon", description: "自定义图标" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots };
exports.default = exports.document;
