import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "title",
    description: "内容",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "dot",
    description: "是否显示右上角小红点",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "badge",
    description: "图标右上角徽标的内容",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "info",
    description: "图标右上角徽标的内容（已废弃，请使用 badge 属性）",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "disabled",
    description: "是否禁用该项",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "url",
    description: "点击后跳转的链接地址",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "to",
    description: "点击后跳转的目标路由对象，同 vue-router 的 to 属性",
    type: "string/object",
    value: "—",
    default: "—",
  },
  {
    name: "replace",
    description: "是否在跳转时替换当前页面历史",
    type: "boolean",
    value: "—",
    default: "false",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "click",
    description: "点击时触发",
    parameter: "index: 当前导航项的索引",
  },
];

export const slots: DocumentSlot[] = [
  { name: "title", description: "自定义标题" },
];

export const document: UIDocument = { attributes, events, slots };

export default document;
