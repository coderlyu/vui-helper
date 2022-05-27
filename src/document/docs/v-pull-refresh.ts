import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "v-model",
    description: "是否处于加载中状态",
    type: "boolean",
    value: "—",
    default: "—",
  },
  {
    name: "wd-loading",
    description:
      "是否使用微店 app 下拉加载 注：使用该属性，下拉、释放、加载过程文案不生效",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "pulling-text",
    description: "下拉过程提示文案",
    type: "string",
    value: "—",
    default: "下拉即可刷新...",
  },
  {
    name: "loosing-text",
    description: "释放过程提示文案",
    type: "string",
    value: "—",
    default: "释放即可刷新...",
  },
  {
    name: "loading-text",
    description: "加载过程提示文案",
    type: "string",
    value: "—",
    default: "加载中...",
  },
  {
    name: "success-text",
    description: "刷新成功提示文案",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "success-duration",
    description: "刷新成功提示展示时长(ms)",
    type: "number/string",
    value: "—",
    default: "500",
  },
  {
    name: "animation-duration",
    description: "动画时长",
    type: "number/string",
    value: "—",
    default: "300",
  },
  {
    name: "head-height",
    description: "顶部内容高度",
    type: "number/string",
    value: "—",
    default: "50",
  },
  {
    name: "disabled",
    description: "是否禁用下拉刷新",
    type: "boolean",
    value: "—",
    default: "false",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "refresh",
    description: "下拉刷新时触发",
    parameter: "—",
  },
];

export const slots: DocumentSlot[] = [
  { name: "default", description: "自定义内容" },
  { name: "normal", description: "非下拉状态时顶部内容" },
  { name: "pulling", description: "下拉过程中顶部内容" },
  { name: "loosing", description: "释放过程中顶部内容" },
  { name: "loading", description: "加载过程中顶部内容" },
  { name: "success", description: "刷新成功提示内容" },
];

export const document: UIDocument = { attributes, events, slots };

export default document;
