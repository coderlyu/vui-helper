"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "type",
        description: "类型",
        type: "string",
        value: "—",
        default: "default",
    },
    {
        name: "size",
        description: "尺寸",
        type: "string",
        value: "large/small/mini",
        default: "false",
    },
    {
        name: "text",
        description: "按钮文字",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "color",
        description: "按钮颜色，支持传入 linear-gradient 渐变色",
        type: "string",
        value: "—",
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
        name: "icon-position",
        description: "图标展示位置",
        type: "string",
        value: "right/left",
        default: "left",
    },
    {
        name: "tag",
        description: "按钮根节点的 HTML 标签",
        type: "string",
        value: "—",
        default: "button",
    },
    {
        name: "native-type",
        description: "原生 button 标签的 type 属性",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "block",
        description: "是否为块级元素",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "ghost",
        description: "是否为幽灵按钮",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "square",
        description: "是否为方形按钮",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "round",
        description: "是否为圆角按钮",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "circle",
        description: "是否为圆形按钮",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "disabled",
        description: "是否禁用按钮",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "hairline",
        description: "是否使用 0.5px 边框",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "loading",
        description: "是否显示为加载状态",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "loading-text",
        description: "加载状态提示文字",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "loading-type",
        description: "加载图标类型",
        type: "string",
        value: "spinner/circular",
        default: "circular",
    },
    {
        name: "loading-size",
        description: "加载图标大小",
        type: "string",
        value: "—",
        default: "20px",
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
        name: "replace",
        description: "是否在跳转时替换当前页面历史",
        type: "boolean",
        value: "—",
        default: "false",
    },
];
exports.events = [
    {
        name: "click",
        description: "点击按钮，且按钮状态不为加载或禁用时触发",
        parameter: "event: Event",
    },
    {
        name: "touchstart",
        description: "开始触摸按钮时触发",
        parameter: "event: TouchEvent",
    },
];
exports.slots = [
    { name: "default", description: "按钮内容" },
    { name: "loading", description: "自定义加载图标" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots };
exports.default = exports.document;
//# sourceMappingURL=v-button.js.map