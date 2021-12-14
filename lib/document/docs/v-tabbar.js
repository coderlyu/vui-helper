"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "v-model",
        description: "当前选中标签的名称或索引值",
        type: "number/string",
        value: "—",
        default: "0",
    },
    {
        name: "fixed",
        description: "是否固定在底部",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "border",
        description: "是否显示外边框",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "z-index",
        description: "元素 z-index",
        type: "number/string",
        value: "—",
        default: "1",
    },
    {
        name: "active-color",
        description: "选中标签的颜色",
        type: "string",
        value: "—",
        default: "#1989fa",
    },
    {
        name: "inactive-color",
        description: "未选中标签的颜色",
        type: "string",
        value: "—",
        default: "#7d7e80",
    },
    {
        name: "route",
        description: "是否开启路由模式",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "placeholder",
        description: "固定在底部时，是否在标签位置生成一个等高的占位元素",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "safe-area-inset-bottom",
        description: "是否开启底部安全区适配，设置 fixed 时默认开启",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "before-change",
        description: "切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise",
        type: "(name)=>boolean/Promise",
        value: "—",
        default: "—",
    },
];
exports.events = [
    {
        name: "change",
        description: "切换标签时触发",
        parameter: "active: 当前选中标签的名称或索引值",
    },
];
exports.document = { attributes: exports.attributes, events: exports.events };
exports.default = exports.document;
//# sourceMappingURL=v-tabbar.js.map