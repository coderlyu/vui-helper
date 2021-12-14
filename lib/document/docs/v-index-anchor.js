"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.attributes = void 0;
exports.attributes = [
    {
        name: "index",
        description: "索引字符",
        type: "number/string",
        value: "—",
        default: "—",
    },
];
exports.slots = [
    { name: "default", description: "锚点位置显示内容，默认为索引字符" },
];
exports.document = { attributes: exports.attributes, slots: exports.slots };
exports.default = exports.document;
