import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
  DocumentMethod,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "value",
    description: "密码值",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "info",
    description: "输入框下方文字提示",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "error-info",
    description: "输入框下方错误提示",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "length",
    description: "密码最大长度",
    type: "number/string",
    value: "—",
    default: "6",
  },
  {
    name: "gutter",
    description: "输入框格子之间的间距，如 20px 2em，默认单位为px",
    type: "number/string",
    value: "—",
    default: "0",
  },
  {
    name: "mask",
    description: "是否隐藏密码内容",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "focused",
    description: "是否已聚焦，聚焦时会显示光标",
    type: "boolean",
    value: "—",
    default: "false",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "focus",
    description: "输入框聚焦时触发",
    parameter: "—",
  },
];

export const document: UIDocument = { attributes, events };

export default document;
