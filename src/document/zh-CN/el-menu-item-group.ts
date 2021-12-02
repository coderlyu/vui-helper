import { DocumentAttribute } from "../";
import { ElDocument } from "../";

export const attributes: DocumentAttribute[] = [
  {
    name: "title",
    description: "分组标题",
    type: "string",
    value: "—",
    default: "—",
  },
];
export const document: ElDocument = { attributes };

export default document;
