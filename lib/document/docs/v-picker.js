"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.methods = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "columns",
        description: "对象数组，配置每一列显示的数据",
        type: "Column[]",
        value: "—",
        default: "[]",
    },
    {
        name: "title",
        description: "顶部栏标题",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "confirm-button-text",
        description: "确认按钮文字",
        type: "string",
        value: "—",
        default: "确认",
    },
    {
        name: "cancel-button-text",
        description: "取消按钮文字",
        type: "string",
        value: "—",
        default: "取消",
    },
    {
        name: "value-key",
        description: "选项对象中，选项文字对应的键名",
        type: "string",
        value: "—",
        default: "text",
    },
    {
        name: "toolbar-position",
        description: "顶部栏位置",
        type: "string",
        value: "top/bottom",
        default: "top",
    },
    {
        name: "loading",
        description: "是否显示加载状态",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "readonly",
        description: "是否为只读状态，只读状态下无法切换选项",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "show-toolbar",
        description: "是否显示顶部栏",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "readonly",
        description: "是否为只读状态，只读状态下无法切换选项",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "allow-html",
        description: "是否允许选项内容中渲染 HTML",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "default-index",
        description: "单列选择时，默认选中项的索引",
        type: "number/string",
        value: "—",
        default: "0",
    },
    {
        name: "item-height",
        description: "选项高度，支持 px vw rem 单位，默认 px",
        type: "number/string",
        value: "—",
        default: "44",
    },
    {
        name: "visible-item-count",
        description: "可见的选项个数",
        type: "number/string",
        value: "—",
        default: "6",
    },
    {
        name: "swipe-duration",
        description: "快速滑动时惯性滚动的时长，单位 ms",
        type: "number/string",
        value: "—",
        default: "1000",
    },
];
exports.events = [
    {
        name: "confirm",
        description: "点击完成按钮时触发",
        parameter: "单列：选中值，选中值对应的索引; 多列：所有列选中值，所有列选中值对应的索引",
    },
    {
        name: "cancel",
        description: "点击取消按钮时触发",
        parameter: "单列：选中值，选中值对应的索引; 多列：所有列选中值，所有列选中值对应的索引",
    },
    {
        name: "change",
        description: "选项改变时触发",
        parameter: "单列：Picker 实例，选中值，选中值对应的索引; 多列：Picker 实例，所有列选中值，当前列对应的索引",
    },
];
exports.methods = [
    {
        name: "getValues",
        description: "获取所有列选中的值",
        parameter: "—",
    },
    {
        name: "setValues",
        description: "设置所有列选中的值",
        parameter: "values",
    },
    {
        name: "getIndexes",
        description: "获取所有列选中值对应的索引",
        parameter: "—",
    },
    {
        name: "setIndexes",
        description: "设置所有列选中值对应的索引",
        parameter: "indexes",
    },
    {
        name: "getColumnValue",
        description: "获取对应列选中的值",
        parameter: "columnIndex",
    },
    {
        name: "setColumnValue",
        description: "设置对应列选中的值",
        parameter: "columnIndex, value",
    },
    {
        name: "getColumnIndex",
        description: "获取对应列选中项的索引",
        parameter: "columnIndex",
    },
    {
        name: "setColumnIndex",
        description: "设置对应列选中项的索引",
        parameter: "columnIndex, optionIndex",
    },
    {
        name: "getColumnValues",
        description: "获取对应列中所有选项",
        parameter: "columnIndex",
    },
    {
        name: "setColumnValues",
        description: "设置对应列中所有选项",
        parameter: "columnIndex, values",
    },
    {
        name: "confirm",
        description: "停止惯性滚动并触发 confirm 事件",
        parameter: "—",
    },
];
exports.slots = [
    { name: "default", description: "自定义顶部栏内容" },
    { name: "title", description: "自定义标题内容" },
    { name: "columns-top", description: "自定义选项上方内容" },
    { name: "columns-bottom", description: "自定义选项下方内容" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots, methods: exports.methods };
exports.default = exports.document;
//# sourceMappingURL=v-picker.js.map