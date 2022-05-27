import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "src",
    description: "图片链接",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "image-options",
    description: "规范 cdn 图片链接的参数对象",
    type: "ImageOptions",
    value: "—",
    default: "—",
  },
  {
    name: "fit",
    description: "图片填充模式",
    type: "string",
    value: "contain/cover/fill/none/scale-down",
    default: "fill",
  },
  {
    name: "alt",
    description: "替代文本",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "width",
    description: "宽度，默认单位为px",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "height",
    description: "高度，默认单位为px",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "radius",
    description: "圆角大小，默认单位为px",
    type: "number/string",
    value: "—",
    default: "0",
  },
  {
    name: "round",
    description: "是否显示为圆形",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "lazy-load",
    description: "是否开启图片懒加载，须配合 Lazyload 组件使用",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "show-error",
    description: "是否展示图片加载失败提示",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "show-loading",
    description: "是否展示图片加载中提示",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "error-icon",
    description: "失败时提示的图标名称或图片链接",
    type: "string",
    value: "—",
    default: "photo-fail",
  },
  {
    name: "loading-icon",
    description: "加载时提示的图标名称或图片链接",
    type: "string",
    value: "—",
    default: "photo",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "click",
    description: "点击图片时触发",
    parameter: "event: Event",
  },
  {
    name: "load",
    description: "图片加载完毕时触发",
    parameter: "—",
  },
  {
    name: "error",
    description: "图片加载失败时触发",
    parameter: "—",
  },
];

export const slots: DocumentSlot[] = [
  { name: "default", description: "自定义图片下方的内容" },
  { name: "loading", description: "自定义加载中的提示内容" },
  { name: "error", description: "自定义加载失败时的提示内容" },
];

export const document: UIDocument = { attributes, events, slots };

export default document;
