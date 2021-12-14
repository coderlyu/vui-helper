"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "v-model",
        description: "开关选中状态",
        type: "any",
        value: "—",
        default: "false",
    },
    {
        name: "loading",
        description: "是否为加载状态",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "disabled",
        description: "是否为禁用状态",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "size",
        description: "开关尺寸，默认单位为px",
        type: "number/string",
        value: "—",
        default: "30px",
    },
    {
        name: "active-color",
        description: "打开时的背景色",
        type: "string",
        value: "—",
        default: "#1989fa",
    },
    {
        name: "inactive-color",
        description: "关闭时的背景色",
        type: "string",
        value: "—",
        default: "white",
    },
    {
        name: "active-value",
        description: "打开时对应的值",
        type: "any",
        value: "—",
        default: "true",
    },
    {
        name: "inactive-value",
        description: "关闭时对应的值",
        type: "any",
        value: "—",
        default: "false",
    },
];
exports.events = [
    {
        name: "change",
        description: "开关状态切换时触发",
        parameter: "value: any",
    },
    {
        name: "click",
        description: "点击时触发",
        parameter: "event: Event",
    },
];
exports.document = { attributes: exports.attributes, events: exports.events };
exports.default = exports.document;
//# sourceMappingURL=v-switch.js.map