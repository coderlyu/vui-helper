import { DocumentAttribute, UIDocument } from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "badge",
    description: "填充的内容",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "dot",
    description: "展示圆点",
    type: "boolean",
    value: "—",
    default: "—",
  },
];

export const document: UIDocument = { attributes };

export default document;
