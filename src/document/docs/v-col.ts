import { DocumentEvent, DocumentAttribute, UIDocument } from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "span",
    description: "列元素宽度",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "offset",
    description: "列元素偏移距离",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "tag",
    description: "自定义元素标签",
    type: "string",
    value: "—",
    default: "div",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "click",
    description: "点击时触发",
    parameter: "event: Event",
  },
];

export const document: UIDocument = { attributes, events };

export default document;
