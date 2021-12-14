"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "value",
        description: "当前进度百分比",
        type: "number/array",
        value: "—",
        default: "0",
    },
    {
        name: "max",
        description: "最大值",
        type: "number/string",
        value: "—",
        default: "100",
    },
    {
        name: "min",
        description: "最小值",
        type: "number/string",
        value: "—",
        default: "0",
    },
    {
        name: "step",
        description: "步长",
        type: "number/string",
        value: "—",
        default: "1",
    },
    {
        name: "bar-height",
        description: "进度条高度，默认单位为px",
        type: "number/string",
        value: "—",
        default: "2px",
    },
    {
        name: "button-size",
        description: "滑块按钮大小，默认单位为px",
        type: "number/string",
        value: "—",
        default: "24px",
    },
    {
        name: "active-color",
        description: "进度条激活态颜色",
        type: "string",
        value: "—",
        default: "#1989fa",
    },
    {
        name: "inactive-color",
        description: "进度条非激活态颜色",
        type: "string",
        value: "—",
        default: "#e5e5e5",
    },
    {
        name: "range",
        description: "是否开启双滑块模式",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "disabled",
        description: "是否禁用滑块",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "vertical",
        description: "是否垂直展示",
        type: "boolean",
        value: "—",
        default: "false",
    },
];
exports.events = [
    {
        name: "input",
        description: "进度变化时实时触发",
        parameter: "value: 当前进度",
    },
    {
        name: "change",
        description: "进度变化且结束拖动后触发",
        parameter: "value: 当前进度",
    },
    {
        name: "drag-start",
        description: "进度变化时实时触发",
        parameter: "—",
    },
    {
        name: "drag-end",
        description: "进度变化时实时触发",
        parameter: "—",
    },
];
exports.slots = [
    { name: "button", description: "自定义滑动按钮" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots };
exports.default = exports.document;
//# sourceMappingURL=v-slider.js.map