import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
  DocumentMethod,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "title",
    description: "标题",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "left-text",
    description: "左侧文案",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "right-text",
    description: "右侧文案",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "left-arrow",
    description: "是否显示左侧箭头",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "border",
    description: "是否显示下边框",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "fixed",
    description: "是否固定在顶部",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "placeholder",
    description: "固定在顶部时，是否在标签位置生成一个等高的占位元素",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "z-index",
    description: "元素 z-index",
    type: "number/string",
    value: "—",
    default: "1",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "click-left",
    description: "点击左侧按钮时触发",
    parameter: "—",
  },
  {
    name: "click-right",
    description: "点击右侧按钮时触发",
    parameter: "—",
  },
];

export const slots: DocumentSlot[] = [
  { name: "title", description: "自定义标题" },
  { name: "left", description: "自定义左侧区域内容" },
  { name: "right", description: "自定义右侧区域内容" },
];

export const document: UIDocument = { attributes, events, slots };

export default document;
