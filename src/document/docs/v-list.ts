import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
  DocumentMethod,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "v-model",
    description: "是否处于加载状态，加载过程中不触发load事件",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "finished",
    description: "是否已加载完成，加载完成后不再触发load事件",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "error",
    description:
      "是否加载失败，加载失败后点击错误提示可以重新触发load事件，必须使用sync修饰符",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "offset",
    description: "滚动条与底部距离小于 offset 时触发load事件",
    type: "number/string",
    value: "—",
    default: "300",
  },
  {
    name: "loading-text",
    description: "加载过程中的提示文案",
    type: "string",
    value: "—",
    default: "加载中...",
  },
  {
    name: "finished-text",
    description: "加载完成后的提示文案",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "error-text",
    description: "加载失败后的提示文案",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "immediate-check",
    description: "是否在初始化时立即执行滚动位置检查",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "direction",
    description: "滚动触发加载的方向",
    type: "string",
    value: "up/down",
    default: "down",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "load",
    description: "滚动条与底部距离小于 offset 时触发",
    parameter: "—",
  },
];

export const methods: DocumentMethod[] = [
  {
    name: "check",
    description: "检查当前的滚动位置，若已滚动至底部，则会触发 load 事件",
    parameter: "—",
  },
];

export const slots: DocumentSlot[] = [
  { name: "default", description: "列表内容" },
  { name: "loading", description: "自定义底部加载中提示" },
  { name: "finished", description: "自定义加载完成后的提示文案" },
  { name: "error", description: "自定义加载失败后的提示文案" },
];

export const document: UIDocument = { attributes, events, slots, methods };

export default document;
