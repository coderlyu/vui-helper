import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "v-model",
    description: "当前页码",
    type: "number",
    value: "—",
    default: "—",
  },
  {
    name: "mode",
    description: "显示模式",
    type: "string",
    value: "multi/simple",
    default: "multi",
  },
  {
    name: "prev-text",
    description: "上一页按钮文字",
    type: "string",
    value: "—",
    default: "上一页",
  },
  {
    name: "next-text",
    description: "下一页按钮文字",
    type: "string",
    value: "—",
    default: "下一页",
  },
  {
    name: "page-count",
    description: "总页数",
    type: "number/string",
    value: "—",
    default: "根据页数计算",
  },
  {
    name: "total-items",
    description: "总记录数",
    type: "number/string",
    value: "—",
    default: "0",
  },
  {
    name: "items-per-page",
    description: "每页记录数",
    type: "number/string",
    value: "—",
    default: "10",
  },
  {
    name: "show-page-size",
    description: "显示的页码个数",
    type: "number/string",
    value: "—",
    default: "5",
  },
  {
    name: "force-ellipses",
    description: "是否显示省略号",
    type: "boolean",
    value: "—",
    default: "false",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "change",
    description: "页码改变时触发",
    parameter: "—",
  },
];

export const slots: DocumentSlot[] = [
  { name: "page", description: "自定义页码" },
  { name: "prev-text", description: "自定义上一页按钮文字" },
  { name: "next-text", description: "自定义下一页按钮文字" },
];

export const document: UIDocument = { attributes, events, slots };

export default document;
