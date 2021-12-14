"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "index-list",
        description: "索引字符列表",
        type: "string[]/number[]",
        value: "—",
        default: "A-Z",
    },
    {
        name: "z-index",
        description: "z-index 层级",
        type: "number/string",
        value: "—",
        default: "1",
    },
    {
        name: "sticky",
        description: "是否开启锚点自动吸顶",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "sticky-offset-top",
        description: "锚点自动吸顶时与顶部的距离",
        type: "number",
        value: "—",
        default: "0",
    },
    {
        name: "highlight-color",
        description: "索引字符高亮颜色",
        type: "string",
        value: "—",
        default: "#07c160",
    },
];
exports.events = [
    {
        name: "select",
        description: "点击索引栏的字符时触发",
        parameter: "index: number/string",
    },
    {
        name: "change",
        description: "当前高亮的索引字符变化时触发",
        parameter: "index: number/string",
    },
];
exports.document = { attributes: exports.attributes, events: exports.events };
exports.default = exports.document;
