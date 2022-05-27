import { DocumentEvent, UIDocument } from "../index";

export const events: DocumentEvent[] = [
  {
    name: "click",
    description: "点击时触发",
    parameter: "event: Event",
  },
];

export const document: UIDocument = { events };

export default document;
