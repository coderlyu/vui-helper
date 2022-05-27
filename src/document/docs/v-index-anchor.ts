import { DocumentSlot, DocumentAttribute, UIDocument } from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "index",
    description: "索引字符",
    type: "number/string",
    value: "—",
    default: "—",
  },
];

export const slots: DocumentSlot[] = [
  { name: "default", description: "锚点位置显示内容，默认为索引字符" },
];

export const document: UIDocument = { attributes, slots };

export default document;
