"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "v-model",
        description: "当前输入值",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "show",
        description: "是否显示键盘",
        type: "boolean",
        value: "—",
        default: "—",
    },
    {
        name: "title",
        description: "键盘标题",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "theme",
        description: "样式风格",
        type: "string",
        value: "default/custom",
        default: "default",
    },
    {
        name: "maxlength",
        description: "输入值最大长度",
        type: "number/string",
        value: "—",
        default: "—",
    },
    {
        name: "transition",
        description: "是否开启过场动画",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "z-index",
        description: "键盘 z-index 层级",
        type: "number/string",
        value: "—",
        default: "100",
    },
    {
        name: "extra-key",
        description: "底部额外按键的内容",
        type: "string/string[]",
        value: "—",
        default: "''",
    },
    {
        name: "close-button-text",
        description: "关闭按钮文字，空则不展示",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "delete-button-text",
        description: "删除按钮文字，空则展示删除图标",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "close-button-loading",
        description: "是否将关闭按钮设置为加载中状态，仅在 theme='custom' 时有效",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "show-delete-key",
        description: "是否展示删除图标",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "hide-on-click-outside",
        description: "点击外部时是否收起键盘",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "get-container",
        description: "指定挂载的节点",
        type: "string/()=>Element",
        value: "—",
        default: "—",
    },
    {
        name: "safe-area-inset-bottom",
        description: "是否开启底部安全区适配",
        type: "boolean",
        value: "—",
        default: "true",
    },
];
exports.events = [
    {
        name: "input",
        description: "点击按键时触发",
        parameter: "key: 按键内容",
    },
    {
        name: "delete",
        description: "点击删除键时触发",
        parameter: "—",
    },
    {
        name: "close",
        description: "点击关闭按钮时触发",
        parameter: "—",
    },
    {
        name: "blur",
        description: "点击关闭按钮或非键盘区域时触发",
        parameter: "—",
    },
    {
        name: "show",
        description: "键盘完全弹出时触发",
        parameter: "—",
    },
    {
        name: "hide",
        description: "键盘完全收起时触发",
        parameter: "—",
    },
];
exports.slots = [
    { name: "delete", description: "自定义删除按键内容" },
    { name: "extra-key", description: "自定义左下角按键内容" },
    { name: "title-left", description: "自定义标题栏左侧内容" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots };
exports.default = exports.document;
