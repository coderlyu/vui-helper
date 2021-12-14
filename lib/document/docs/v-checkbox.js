"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.methods = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "v-model",
        description: "是否为选中状态",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "name",
        description: "标识符",
        type: "any",
        value: "—",
        default: "—",
    },
    {
        name: "shape",
        description: "形状",
        type: "string",
        value: "square/round",
        default: "round",
    },
    {
        name: "disabled",
        description: "是否禁用复选框",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "label-disabled",
        description: "是否禁用复选框文本点击",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "label-position",
        description: "文本位置",
        type: "string",
        value: "right/left",
        default: "right",
    },
    {
        name: "icon-size",
        description: "图标大小，默认单位为px",
        type: "number/string",
        value: "—",
        default: "20px",
    },
    {
        name: "checked-color",
        description: "选中状态颜色",
        type: "string",
        value: "—",
        default: "#1989fa",
    },
    {
        name: "bind-group",
        description: "是否与复选框组绑定",
        type: "boolean",
        value: "—",
        default: "true",
    },
];
exports.events = [
    {
        name: "change",
        description: "当绑定值变化时触发的事件",
        parameter: "checked: boolean",
    },
    {
        name: "click",
        description: "点击复选框时触发",
        parameter: "event:Event",
    },
];
exports.methods = [
    {
        name: "toggle",
        description: "切换选中状态，传true为选中，false为取消选中，不传参为取反",
        parameter: "checked?: boolean",
    },
];
exports.slots = [
    { name: "default", description: "自定义文本" },
    { name: "icon", description: "自定义图标" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots, methods: exports.methods };
exports.default = exports.document;
//# sourceMappingURL=v-checkbox.js.map