import { ElDocument } from "../";
import { DocumentAttribute } from "../";

export const attributes: DocumentAttribute[] = [
  {
    name: "height",
    description: "height of the header",
    type: "string",
    value: "—",
    default: "60px",
  },
];

export const document: ElDocument = { attributes };

export default document;
