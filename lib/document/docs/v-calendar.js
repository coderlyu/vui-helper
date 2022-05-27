"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.methods = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "type",
        description: "选择类型",
        type: "string",
        value: "single/multiple/range",
        default: "single",
    },
    {
        name: "title",
        description: "日历标题",
        type: "string",
        value: "—",
        default: "日期选择",
    },
    {
        name: "color",
        description: "主题色，对底部按钮和选中日期生效",
        type: "string",
        value: "—",
        default: "#ee0a24",
    },
    {
        name: "min-date",
        description: "可选择的最小日期",
        type: "Date",
        value: "—",
        default: "当前日期",
    },
    {
        name: "max-date",
        description: "可选择的最大日期",
        type: "Date",
        value: "—",
        default: "当前日期的六个月后",
    },
    {
        name: "default-date",
        description: "默认选中的日期，type 为 multiple 或 range 时为数组，传入 null 表示默认不选择",
        type: "Date/Date[]/null",
        value: "—",
        default: "今天",
    },
    {
        name: "row-height",
        description: "日期行高",
        type: "number/string",
        value: "—",
        default: "64",
    },
    {
        name: "formatter",
        description: "日期格式化函数",
        type: "(day: Day)=>Day",
        value: "—",
        default: "—",
    },
    {
        name: "poppable",
        description: "是否以弹层的形式展示日历",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "lazy-render",
        description: "是否只渲染可视区域的内容",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "show-mark",
        description: "是否显示月份背景水印",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "show-title",
        description: "是否展示日历标题",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "show-subtitle",
        description: "是否展示日历副标题（年月）",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "show-confirm",
        description: "是否展示确认按钮",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "before-close",
        description: "关闭前的回调函数；调用done()后关闭; 调用done(false)后阻止关闭",
        type: "function:(done)=>void",
        value: "—",
        default: "—",
    },
    {
        name: "readonly",
        description: "是否为只读状态，只读状态下不能选择日期",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "confirm-text",
        description: "确认按钮的文字",
        type: "string",
        value: "—",
        default: "确定",
    },
    {
        name: "confirm-disabled-text",
        description: "确认按钮处于禁用状态时的文字",
        type: "string",
        value: "—",
        default: "确定",
    },
    {
        name: "first-day-of-week",
        description: "设置周起始日",
        type: "0-6",
        value: "—",
        default: "0",
    },
];
exports.events = [
    {
        name: "select",
        description: "点击并选中任意日期时触发",
        parameter: "value:Date|Date[]",
    },
    {
        name: "confirm",
        description: "日期选择完成后触发，若show-confirm为true，则点击确认按钮后触发",
        parameter: "value:Date|Date[]",
    },
    {
        name: "open",
        description: "打开弹出层时触发",
        parameter: "—",
    },
    {
        name: "close",
        description: "关闭弹出层时触发",
        parameter: "—",
    },
    {
        name: "opened",
        description: "打开弹出层且动画结束后触发",
        parameter: "—",
    },
    {
        name: "closed",
        description: "关闭弹出层且动画结束后触发",
        parameter: "—",
    },
    {
        name: "unselect",
        description: "当日历组件的 type 为 multiple 时，取消选中日期时触发",
        parameter: "value:Date",
    },
    {
        name: "month-show",
        description: "当某个月份进入可视区域时触发",
        parameter: "{ date: Date, title: string }",
    },
];
exports.methods = [
    {
        name: "reset",
        description: "重置选中的日期到默认值",
        parameter: "—",
    },
];
exports.slots = [
    { name: "title", description: "自定义标题" },
    { name: "footer", description: "自定义底部区域内容" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots, methods: exports.methods };
exports.default = exports.document;
