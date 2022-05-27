"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "offset-top",
        description: "吸顶时与顶部的距离，支持 px vw vh rem 单位，默认 px",
        type: "number/string",
        value: "—",
        default: "0",
    },
    {
        name: "z-index",
        description: "吸顶时的 z-index",
        type: "number/string",
        value: "—",
        default: "99",
    },
    {
        name: "container",
        description: "容器对应的 HTML 节点",
        type: "Element",
        value: "—",
        default: "—",
    },
];
exports.events = [
    {
        name: "scroll",
        description: "滚动时触发",
        parameter: "{ scrollTop: 距离顶部位置, isFixed: 是否吸顶 }",
    },
];
exports.document = { attributes: exports.attributes, events: exports.events };
exports.default = exports.document;
