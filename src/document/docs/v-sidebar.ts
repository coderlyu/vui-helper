import { DocumentEvent, DocumentAttribute, UIDocument } from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "v-model",
    description: "当前导航项的索引",
    type: "number/string",
    value: "—",
    default: "0",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "change",
    description: "切换导航项时触发",
    parameter: "index: 当前导航项的索引",
  },
];

export const document: UIDocument = { attributes, events };

export default document;
