"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "v-model",
        description: "是否显示动作面板",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "actions",
        description: "面板选项列表",
        type: "Action[]",
        value: "—",
        default: "[]",
    },
    {
        name: "title",
        description: "顶部标题",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "cancel-text",
        description: "取消按钮文字",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "description",
        description: "选项上方的描述信息",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "closeable",
        description: "是否显示关闭图标",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "close-icon",
        description: "关闭图标名称或图片链接",
        type: "string",
        value: "—",
        default: "cross",
    },
    {
        name: "duration",
        description: "动画时长，单位秒",
        type: "number/string",
        value: "—",
        default: "0.3",
    },
    {
        name: "round",
        description: "是否显示圆角",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "overlay",
        description: "是否显示遮罩层",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "lock-scroll",
        description: "是否锁定背景滚动",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "lazy-render",
        description: "是否在显示弹层时才渲染节点",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "close-on-popstate",
        description: "是否在页面回退时自动关闭",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "close-on-click-action",
        description: "是否在点击选项后关闭",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "close-on-click-overlay",
        description: "是否在点击遮罩层后关闭",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "before-close",
        description: "关闭前的回调函数；调用 done()后关闭;调用 done(false)后阻止关闭",
        type: "function:(done)=>void",
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
    {
        name: "get-container",
        description: "指定挂载的节点",
        type: "string|()=>Element",
        value: "—",
        default: "—",
    },
];
exports.events = [
    {
        name: "select",
        description: "点击选项时触发，禁用或加载状态下不会触发",
        parameter: "action: Action, index: number",
    },
    {
        name: "cancel",
        description: "点击取消按钮时触发",
        parameter: "—",
    },
    {
        name: "open",
        description: "打开面板时触发",
        parameter: "—",
    },
    {
        name: "close",
        description: "关闭面板时触发",
        parameter: "—",
    },
    {
        name: "opened",
        description: "打开面板且动画结束后触发",
        parameter: "—",
    },
    {
        name: "closed",
        description: "关闭面板且动画结束后触发",
        parameter: "—",
    },
    {
        name: "click-overlay",
        description: "点击遮罩层时触发",
        parameter: "—",
    },
];
exports.slots = [
    { name: "default", description: "自定义面板的展示内容" },
    { name: "description", description: "自定义描述文案" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots };
exports.default = exports.document;
