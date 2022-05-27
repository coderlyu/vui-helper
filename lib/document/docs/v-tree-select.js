"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "items",
        description: "分类显示所需的数据",
        type: "Item[]",
        value: "—",
        default: "[]",
    },
    {
        name: "height",
        description: "高度，默认单位为px",
        type: "number/string",
        value: "—",
        default: "300",
    },
    {
        name: "main-active-index",
        description: "左侧选中项的索引",
        type: "number/string",
        value: "—",
        default: "0",
    },
    {
        name: "active-id",
        description: "右侧选中项的 id，支持传入数组",
        type: "number/string(number/string)[]",
        value: "—",
        default: "0",
    },
    {
        name: "max",
        description: "右侧项最大选中个数",
        type: "number/string",
        value: "—",
        default: "Infinity",
    },
    {
        name: "selected-icon",
        description: "自定义右侧栏选中状态的图标",
        type: "string",
        value: "—",
        default: "success",
    },
];
exports.events = [
    {
        name: "click-nav",
        description: "点击左侧导航时触发",
        parameter: "index：被点击的导航的索引",
    },
    {
        name: "click-item",
        description: "点击右侧选择项时触发",
        parameter: "data: 该点击项的数据",
    },
];
exports.slots = [
    { name: "content", description: "自定义右侧区域内容" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots };
exports.default = exports.document;
