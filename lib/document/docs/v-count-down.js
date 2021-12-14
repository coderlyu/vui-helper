"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.methods = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "time",
        description: "倒计时时长，单位毫秒",
        type: "number/string",
        value: "—",
        default: "0",
    },
    {
        name: "format",
        description: "时间格式",
        type: "string",
        value: "—",
        default: "HH:mm:ss",
    },
    {
        name: "auto-start",
        description: "是否自动开始倒计时",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "millisecond",
        description: "是否开启毫秒级渲染",
        type: "boolean",
        value: "—",
        default: "false",
    },
];
exports.events = [
    {
        name: "finish",
        description: "倒计时结束时触发",
        parameter: "—",
    },
    {
        name: "change",
        description: "倒计时变化时触发",
        parameter: "timeData: TimeData",
    },
];
exports.methods = [
    {
        name: "start",
        description: "开始倒计时",
        parameter: "—",
    },
    {
        name: "pause",
        description: "暂停倒计时",
        parameter: "—",
    },
    {
        name: "reset",
        description: "重设倒计时，若auto-start为true，重设后会自动开始倒计时",
        parameter: "—",
    },
];
exports.slots = [
    { name: "default", description: "自定义内容" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots, methods: exports.methods };
exports.default = exports.document;
//# sourceMappingURL=v-count-down.js.map