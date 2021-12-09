import { DocumentSlot, DocumentAttribute, UIDocument } from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "dashed",
    description: "是否使用虚线",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "hairline",
    description: "是否使用 0.5px 线",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "content-position",
    description: "内容位置",
    type: "string",
    value: "center/left/right",
    default: "center",
  },
];

export const slots: DocumentSlot[] = [{ name: "default", description: "内容" }];

export const document: UIDocument = { attributes, slots };

export default document;
