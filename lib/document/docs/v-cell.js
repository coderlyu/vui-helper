"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "title",
        description: "左侧标题",
        type: "number/string",
        value: "—",
        default: "—",
    },
    {
        name: "value",
        description: "右侧内容",
        type: "number/string",
        value: "—",
        default: "—",
    },
    {
        name: "label",
        description: "标题下方的描述信息",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "size",
        description: "单元格大小，可选值为 large",
        type: "string",
        value: "large/''",
        default: "—",
    },
    {
        name: "icon",
        description: "左侧图标名称或图片链接",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "icon-prefix",
        description: "图标类名前缀，同 Icon 组件的 class-prefix 属性",
        type: "string",
        value: "—",
        default: "v-icon",
    },
    {
        name: "url",
        description: "点击后跳转的链接地址",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "to",
        description: "点击后跳转的目标路由对象，同 vue-router 的 to 属性",
        type: "string/object",
        value: "—",
        default: "—",
    },
    {
        name: "border",
        description: "是否显示内边框",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "replace",
        description: "是否在跳转时替换当前页面历史",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "clickable",
        description: "是否开启点击反馈",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "is-link",
        description: "是否展示右侧箭头并开启点击反馈",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "required",
        description: "是否显示表单必填星号",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "center",
        description: "是否使内容垂直居中",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "arrow-direction",
        description: "箭头方向",
        type: "string",
        value: "right/left/up/down",
        default: "right",
    },
    {
        name: "title-style",
        description: "左侧标题额外样式",
        type: "any",
        value: "—",
        default: "—",
    },
    {
        name: "title-class",
        description: "左侧标题额外类名",
        type: "any",
        value: "—",
        default: "—",
    },
    {
        name: "value-class",
        description: "右侧内容额外类名",
        type: "any",
        value: "—",
        default: "—",
    },
    {
        name: "label-class",
        description: "描述信息额外类名",
        type: "any",
        value: "—",
        default: "—",
    },
];
exports.events = [
    {
        name: "click",
        description: "点击单元格时触发",
        parameter: "event: Event",
    },
];
exports.slots = [
    { name: "default", description: "自定义右侧 value 的内容" },
    { name: "title", description: "自定义左侧 title 的内容" },
    { name: "label", description: "自定义标题下方 label 的内容" },
    { name: "icon", description: "自定义左侧图标" },
    { name: "right-icon", description: "自定义右侧按钮，默认为arrow" },
    { name: "extra", description: "自定义单元格最右侧的额外内容" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots };
exports.default = exports.document;
