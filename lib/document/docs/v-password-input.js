"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "value",
        description: "密码值",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "info",
        description: "输入框下方文字提示",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "error-info",
        description: "输入框下方错误提示",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "length",
        description: "密码最大长度",
        type: "number/string",
        value: "—",
        default: "6",
    },
    {
        name: "gutter",
        description: "输入框格子之间的间距，如 20px 2em，默认单位为px",
        type: "number/string",
        value: "—",
        default: "0",
    },
    {
        name: "mask",
        description: "是否隐藏密码内容",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "focused",
        description: "是否已聚焦，聚焦时会显示光标",
        type: "boolean",
        value: "—",
        default: "false",
    },
];
exports.events = [
    {
        name: "focus",
        description: "输入框聚焦时触发",
        parameter: "—",
    },
];
exports.document = { attributes: exports.attributes, events: exports.events };
exports.default = exports.document;
//# sourceMappingURL=v-password-input.js.map