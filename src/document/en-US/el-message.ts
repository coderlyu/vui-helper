import { ElDocument } from "../";
import { DocumentMethod } from "../";

export const methods: DocumentMethod[] = [
  { name: "close", description: "close the Message", parameter: "" },
];

export const document: ElDocument = { methods };

export default document;
