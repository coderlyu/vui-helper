"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.methods = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "value",
        description: "当前选中项对应的 value，可以通过v-model双向绑定",
        type: "number/string",
        value: "—",
        default: "—",
    },
    {
        name: "title",
        description: "菜单项标题",
        type: "string",
        value: "—",
        default: "当前选中项文字",
    },
    {
        name: "options",
        description: "选项数组",
        type: "Option[]",
        value: "—",
        default: "[]",
    },
    {
        name: "disabled",
        description: "是否禁用菜单",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "lazy-render",
        description: "是否在首次展开时才渲染菜单内容",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "title-class",
        description: "标题额外类名",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "get-container",
        description: "指定挂载的节点",
        type: "string/()=>Element",
        value: "—",
        default: "—",
    },
];
exports.events = [
    {
        name: "change",
        description: "点击选项导致 value 变化时触发",
        parameter: "—",
    },
    {
        name: "open",
        description: "打开菜单栏时触发",
        parameter: "—",
    },
    {
        name: "close",
        description: "关闭菜单栏时触发",
        parameter: "—",
    },
    {
        name: "opened",
        description: "打开菜单栏且动画结束后触发",
        parameter: "—",
    },
    {
        name: "closed",
        description: "关闭菜单栏且动画结束后触发",
        parameter: "—",
    },
];
exports.methods = [
    {
        name: "toggle",
        description: "切换菜单展示状态，传 true 为显示，false 为隐藏，不传参为取反",
        parameter: "show?: boolean",
    },
];
exports.slots = [
    { name: "default", description: "菜单内容" },
    { name: "title", description: "自定义标题，不支持动态渲染" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots, methods: exports.methods };
exports.default = exports.document;
//# sourceMappingURL=v-dropdown-item.js.map