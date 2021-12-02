import { ElDocument } from "../";
import { DocumentAttribute } from "../";
import { DocumentEvent } from "../";

export const attributes: DocumentAttribute[] = [
  {
    name: "target",
    description: "the target to trigger scroll",
    type: "string",
    value: "",
    default: "",
  },
  {
    name: "visibility-height",
    description:
      "the button will not show until the scroll height reaches this value",
    type: "number",
    value: "",
    default: "200",
  },
  {
    name: "right",
    description: "right distance",
    type: "number",
    value: "",
    default: "40",
  },
  {
    name: "bottom",
    description: "bottom distance",
    type: "number",
    value: "",
    default: "40",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "click",
    description: "triggers when click",
    parameter: "click event",
  },
];

export const document: ElDocument = { attributes, events };

export default document;
