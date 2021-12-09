import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
  DocumentMethod,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "autoplay",
    description: "自动轮播间隔，单位为 ms",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "duration",
    description: "动画时长，单位为 ms",
    type: "number/string",
    value: "—",
    default: "500",
  },
  {
    name: "initial-swipe",
    description: "初始位置索引值",
    type: "number/string",
    value: "—",
    default: "0",
  },
  {
    name: "width",
    description: "滑块宽度，单位为px",
    type: "number/string",
    value: "—",
    default: "auto",
  },
  {
    name: "height",
    description: "滑块高度，单位为px",
    type: "number/string",
    value: "—",
    default: "auto",
  },
  {
    name: "loop",
    description: "是否开启循环播放",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "show-indicators",
    description: "是否显示指示器",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "vertical",
    description: "是否为纵向滚动",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "touchable",
    description: "是否可以通过手势滑动",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "stop-propagation",
    description: "是否阻止滑动事件冒泡",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "lazy-render",
    description: "是否延迟渲染未展示的轮播",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "indicator-color",
    description: "指示器颜色",
    type: "string",
    value: "—",
    default: "#1989fa",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "change",
    description: "每一页轮播结束后触发",
    parameter: "index, 当前页的索引",
  },
];

export const methods: DocumentMethod[] = [
  {
    name: "prev",
    description: "切换到上一轮播",
    parameter: "—",
  },
  {
    name: "next",
    description: "切换到下一轮播",
    parameter: "—",
  },
  {
    name: "swipeTo",
    description: "切换到指定位置",
    parameter: "index: number, options: Options",
  },
  {
    name: "resize",
    description: "外层元素大小变化后，可以调用此方法来触发重绘",
    parameter: "—",
  },
];

export const slots: DocumentSlot[] = [
  { name: "default", description: "轮播内容" },
  { name: "indicator", description: "自定义指示器" },
];

export const document: UIDocument = { attributes, events, slots, methods };

export default document;
