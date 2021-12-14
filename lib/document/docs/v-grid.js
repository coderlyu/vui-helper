"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.attributes = void 0;
exports.attributes = [
    {
        name: "column-num",
        description: "列数",
        type: "number/string",
        value: "—",
        default: "4",
    },
    {
        name: "icon-size",
        description: "图标大小，默认单位为px",
        type: "number/string",
        value: "—",
        default: "28px",
    },
    {
        name: "gutter",
        description: "格子之间的间距，默认单位为px",
        type: "number/string",
        value: "—",
        default: "0",
    },
    {
        name: "border",
        description: "是否显示边框",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "center",
        description: "是否将格子内容居中显示",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "square",
        description: "是否将格子固定为正方形",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "clickable",
        description: "是否开启格子点击反馈",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "direction",
        description: "格子内容排列的方向",
        type: "string",
        value: "vertical/horizontal",
        default: "vertical",
    },
];
exports.document = { attributes: exports.attributes };
exports.default = exports.document;
//# sourceMappingURL=v-grid.js.map