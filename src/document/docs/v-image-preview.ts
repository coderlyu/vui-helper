import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "images",
    description: "需要预览的图片 URL 配置数组",
    type: "Array<string|Image>",
    value: "—",
    default: "[]",
  },
  {
    name: "image-options",
    description: "规范 cdn 图片链接的配置对象",
    type: "ImageOptions",
    value: "—",
    default: "{}",
  },
  {
    name: "start-position",
    description: "图片预览起始位置索引",
    type: "number/string",
    value: "—",
    default: "0",
  },
  {
    name: "swipe-duration",
    description: "动画时长，单位为 ms",
    type: "number/string",
    value: "—",
    default: "500",
  },
  {
    name: "show-index",
    description: "是否显示页码",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "show-indicators",
    description: "是否显示轮播指示器",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "loop",
    description: "是否开启循环播放",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "async-close",
    description: "是否开启异步关闭",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "close-on-popstate",
    description: "是否开启异步关闭",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "close",
    description: "是否开启异步关闭",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "class-name",
    description: "自定义类名",
    type: "any",
    value: "—",
    default: "—",
  },
  {
    name: "max-zoom",
    description: "手势缩放时，最大缩放比例",
    type: "number/string",
    value: "—",
    default: "3",
  },
  {
    name: "min-zoom",
    description: "手势缩放时，最小缩放比例",
    type: "number/string",
    value: "—",
    default: "1/3",
  },
  {
    name: "closeable",
    description: "是否显示关闭图标",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "close-icon",
    description: "关闭图标名称或图片链接",
    type: "string",
    value: "—",
    default: "clear",
  },
  {
    name: "close-icon-position",
    description: "关闭图标位置",
    type: "string",
    value: "top-right/top-left/bottom-left/bottom-right",
    default: "top-right",
  },
  {
    name: "get-container",
    description: "指定挂载的节点",
    type: "string/()=>Element",
    value: "—",
    default: "—",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "close",
    description: "关闭时触发",
    parameter: "{ index: 索引, url: 图片链接 }",
  },
  {
    name: "closed",
    description: "关闭且且动画结束后触发",
    parameter: "—",
  },
  {
    name: "change",
    description: "切换当前图片时触发",
    parameter: "index: 当前图片的索引",
  },
  {
    name: "scale",
    description: "缩放当前图片时触发",
    parameter: "{ index: 当前图片的索引, scale: 当前缩放的值 }",
  },
  {
    name: "swipeTo",
    description: "切换到指定位置",
    parameter: "index: number, options: Options",
  },
];

export const slots: DocumentSlot[] = [
  { name: "index", description: "自定义页码内容" },
  { name: "cover", description: "自定义覆盖在图片预览上方的内容" },
];

export const document: UIDocument = { attributes, events, slots };

export default document;
