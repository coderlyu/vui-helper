"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "type",
        description: "布局方式，可选值为flex",
        type: "string",
        value: "flex",
        default: "—",
    },
    {
        name: "gutter",
        description: "列元素之间的间距（单位为 px）",
        type: "number/string",
        value: "—",
        default: "—",
    },
    {
        name: "tag",
        description: "自定义元素标签",
        type: "string",
        value: "—",
        default: "div",
    },
    {
        name: "justify",
        description: "Flex 主轴对齐方式",
        type: "string",
        value: "start/end/center/space-around/space-between",
        default: "start",
    },
    {
        name: "align",
        description: "Flex 交叉轴对齐方式",
        type: "string",
        value: "top/center/bottom",
        default: "top",
    },
];
exports.events = [
    {
        name: "click",
        description: "点击时触发",
        parameter: "event: Event",
    },
];
exports.document = { attributes: exports.attributes, events: exports.events };
exports.default = exports.document;
//# sourceMappingURL=v-row.js.map