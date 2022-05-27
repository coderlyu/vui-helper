import { DocumentSlot, DocumentAttribute, UIDocument } from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "title",
    description: "分组标题",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "border",
    description: "是否显示外边框",
    type: "boolean",
    value: "—",
    default: "true",
  },
];

export const slots: DocumentSlot[] = [
  { name: "default", description: "默认插槽" },
  { name: "title", description: "自定义分组标题" },
];

export const document: UIDocument = { attributes, slots };

export default document;
