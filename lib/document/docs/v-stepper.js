"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "v-model",
        description: "当前输入的值",
        type: "number/string",
        value: "—",
        default: "—",
    },
    {
        name: "min",
        description: "最小值",
        type: "number/string",
        value: "—",
        default: "1",
    },
    {
        name: "max",
        description: "最大值",
        type: "number/string",
        value: "—",
        default: "—",
    },
    {
        name: "default-value",
        description: "初始值，当 v-model 为空时生效",
        type: "number/string",
        value: "—",
        default: "1",
    },
    {
        name: "step",
        description: "步长，每次点击时改变的值",
        type: "number/string",
        value: "—",
        default: "1",
    },
    {
        name: "name",
        description: "标识符，可以在change事件回调参数中获取",
        type: "number/string",
        value: "—",
        default: "—",
    },
    {
        name: "input-width",
        description: "输入框宽度，默认单位为px",
        type: "number/string",
        value: "—",
        default: "32px",
    },
    {
        name: "button-size",
        description: "按钮大小以及输入框高度，默认单位为px",
        type: "number/string",
        value: "—",
        default: "28px",
    },
    {
        name: "decimal-length",
        description: "固定显示的小数位数",
        type: "number/string",
        value: "—",
        default: "—",
    },
    {
        name: "theme",
        description: "样式风格",
        type: "string",
        value: "round/border",
        default: "—",
    },
    {
        name: "placeholder",
        description: "输入框占位提示文字",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "integer",
        description: "是否只允许输入整数",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "disabled",
        description: "是否禁用步进器",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "disable-plus",
        description: "是否禁用增加按钮",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "disable-minus",
        description: "是否禁用减少按钮",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "disable-input",
        description: "是否禁用输入框",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "async-change",
        description: "是否开启异步变更，开启后需要手动控制输入值",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "show-plus",
        description: "是否显示增加按钮",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "show-minus",
        description: "是否显示减少按钮",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "long-press",
        description: "是否开启长按手势",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "allow-empty",
        description: "是否允许输入的值为空",
        type: "boolean",
        value: "—",
        default: "false",
    },
];
exports.events = [
    {
        name: "change",
        description: "当绑定值变化时触发的事件",
        parameter: "value: string, detail: { name: string }",
    },
    {
        name: "overlimit",
        description: "点击不可用的按钮时触发",
        parameter: "—",
    },
    {
        name: "plus",
        description: "点击增加按钮时触发",
        parameter: "—",
    },
    {
        name: "minus",
        description: "点击减少按钮时触发",
        parameter: "—",
    },
    {
        name: "focus",
        description: "输入框聚焦时触发",
        parameter: "event: Event",
    },
    {
        name: "blur",
        description: "输入框失焦时触发",
        parameter: "event: Event",
    },
];
exports.document = { attributes: exports.attributes, events: exports.events };
exports.default = exports.document;
//# sourceMappingURL=v-stepper.js.map