"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "v-model",
        description: "当前导航项的索引",
        type: "number/string",
        value: "—",
        default: "0",
    },
];
exports.events = [
    {
        name: "change",
        description: "切换导航项时触发",
        parameter: "index: 当前导航项的索引",
    },
];
exports.document = { attributes: exports.attributes, events: exports.events };
exports.default = exports.document;
//# sourceMappingURL=v-sidebar.js.map