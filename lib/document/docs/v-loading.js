"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.attributes = void 0;
exports.attributes = [
    {
        name: "show",
        description: "是否展示 loading",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "color",
        description: "颜色",
        type: "string",
        value: "—",
        default: "#ff1f50",
    },
    {
        name: "type",
        description: "类型",
        type: "string",
        value: "circular/spinner",
        default: "circular",
    },
    {
        name: "size",
        description: "加载图标大小，默认单位为px",
        type: "number/string",
        value: "—",
        default: "30px",
    },
    {
        name: "text-size",
        description: "文字大小，默认单位为px",
        type: "number/string",
        value: "—",
        default: "14px",
    },
    {
        name: "text-color",
        description: "文字大小，默认单位为px",
        type: "number/string",
        value: "—",
        default: "14px",
    },
    {
        name: "vertical",
        description: "是否垂直排列图标和文字内容",
        type: "boolean",
        value: "—",
        default: "false",
    },
];
exports.slots = [
    { name: "default", description: "加载文案" },
    {
        name: "wrapper",
        description: "loading 组件会成为该 slot 内容的容器，loading 覆盖在 slot 上",
    },
];
exports.document = { attributes: exports.attributes, slots: exports.slots };
exports.default = exports.document;
//# sourceMappingURL=v-loading.js.map