"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.methods = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "name",
        description: "标识符，可以在事件参数中获取到",
        type: "number/string",
        value: "—",
        default: "—",
    },
    {
        name: "left-width",
        description: "指定左侧滑动区域宽度，单位为px",
        type: "number/string",
        value: "—",
        default: "auto",
    },
    {
        name: "right-width",
        description: "指定右侧滑动区域宽度，单位为px",
        type: "number/string",
        value: "—",
        default: "auto",
    },
    {
        name: "before-close",
        description: "关闭前的回调函数",
        type: "Function",
        value: "—",
        default: "—",
    },
    {
        name: "disabled",
        description: "是否禁用滑动",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "stop-propagation",
        description: "是否阻止滑动事件冒泡",
        type: "boolean",
        value: "—",
        default: "false",
    },
];
exports.events = [
    {
        name: "click",
        description: "点击时触发",
        parameter: "关闭时的点击位置 (left right cell outside)",
    },
    {
        name: "open",
        description: "打开时触发",
        parameter: "{ position: 'left' | 'right' , name: string }",
    },
    {
        name: "close",
        description: "关闭时触发",
        parameter: "{ position: string , name: string }",
    },
];
exports.methods = [
    {
        name: "open",
        description: "打开单元格侧边栏",
        parameter: "position: left/right",
    },
    {
        name: "close",
        description: "收起单元格侧边栏",
        parameter: "—",
    },
];
exports.slots = [
    { name: "default", description: "自定义显示内容" },
    { name: "left", description: "左侧滑动内容" },
    { name: "right", description: "右侧滑动内容" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots, methods: exports.methods };
exports.default = exports.document;
//# sourceMappingURL=v-swipe-cell.js.map