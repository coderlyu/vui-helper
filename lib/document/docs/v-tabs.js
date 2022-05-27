"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.slots = exports.methods = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "v-model",
        description: "绑定当前选中标签的标识符",
        type: "number/string",
        value: "—",
        default: "0",
    },
    {
        name: "type",
        description: "样式风格类型",
        type: "string",
        value: "line/card/line",
        default: "line",
    },
    {
        name: "size",
        description: "标签大小",
        type: "string",
        value: "''/large",
        default: "—",
    },
    {
        name: "color",
        description: "标签主题色",
        type: "string",
        value: "—",
        default: "#ee0a24",
    },
    {
        name: "background",
        description: "标签栏背景色",
        type: "string",
        value: "—",
        default: "white",
    },
    {
        name: "duration",
        description: "动画时间，单位秒",
        type: "number/string",
        value: "—",
        default: "0.3",
    },
    {
        name: "line-width",
        description: "底部条宽度，默认单位 px",
        type: "number/string",
        value: "—",
        default: "24px",
    },
    {
        name: "line-height",
        description: "底部条高度，默认单位 px",
        type: "number/string",
        value: "—",
        default: "3px",
    },
    {
        name: "animated",
        description: "是否开启切换标签内容时的转场动画",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "border",
        description: "是否显示标签栏外边框，仅在 type='line' 时有效",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "ellipsis",
        description: "是否省略过长的标题文字，禁用此选项后，标签项保持左对齐，而不是等分剩余空间",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "sticky",
        description: "是否使用粘性定位布局",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "swipeable",
        description: "是否开启手势滑动切换",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "lazy-render",
        description: "是否开启延迟渲染（首次切换到标签时才触发内容渲染）",
        type: "boolean",
        value: "—",
        default: "true",
    },
    {
        name: "scrollspy",
        description: "是否开启滚动导航",
        type: "boolean",
        value: "—",
        default: "false",
    },
    {
        name: "offset-top",
        description: "粘性定位布局下与顶部的最小距离，支持 px vw rem 单位，默认 px",
        type: "number/string",
        value: "—",
        default: "0",
    },
    {
        name: "swipe-threshold",
        description: "滚动阈值，标签数量超过阈值时开始横向滚动，也可通过设置阈值小于标签数量来使标签项左对齐，而不是等分剩余空间）",
        type: "number/string",
        value: "—",
        default: "5",
    },
    {
        name: "title-active-color",
        description: "标题选中态颜色",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "title-inactive-color",
        description: "标题默认态颜色",
        type: "string",
        value: "—",
        default: "—",
    },
    {
        name: "before-change",
        description: "切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise",
        type: "(name)=>boolean/Promise",
        value: "—",
        default: "—",
    },
];
exports.events = [
    {
        name: "click",
        description: "点击标签时触发",
        parameter: "name：标识符，title：标题",
    },
    {
        name: "change",
        description: "当前激活的标签改变时触发",
        parameter: "name：标识符，title：标题",
    },
    {
        name: "disabled",
        description: "点击被禁用的标签时触发",
        parameter: "name：标识符，title：标题",
    },
    {
        name: "rendered",
        description: "标签内容首次渲染时触发（仅在开启延迟渲染后触发）",
        parameter: "name：标识符，title：标题",
    },
    {
        name: "scroll",
        description: "滚动时触发，仅在 sticky 模式下生效",
        parameter: "{ scrollTop: 距离顶部位置, isFixed: 是否吸顶 }",
    },
];
exports.methods = [
    {
        name: "resize",
        description: "外层元素大小变化后，可以调用此方法来触发重绘",
        parameter: "—",
    },
    {
        name: "scrollTo",
        description: "滚动到指定的标签页，在滚动导航模式下可用",
        parameter: "name: 标识符",
    },
];
exports.slots = [
    { name: "nav-left", description: "标题左侧内容" },
    { name: "nav-right", description: "标题右侧内容" },
];
exports.document = { attributes: exports.attributes, events: exports.events, slots: exports.slots, methods: exports.methods };
exports.default = exports.document;
