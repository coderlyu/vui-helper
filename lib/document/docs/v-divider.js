"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.attributes = void 0;
exports.attributes = [
    {
        name: "dashed",
        description: "是否使用虚线",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "hairline",
        description: "是否使用 0.5px 线",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "content-position",
        description: "内容位置",
        type: "string",
        value: "center/left/right",
        default: "center",
    },
];
exports.slots = [{ name: "default", description: "内容" }];
exports.document = { attributes: exports.attributes, slots: exports.slots };
exports.default = exports.document;
