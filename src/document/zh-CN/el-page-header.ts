import { ElDocument } from "../";
import { DocumentAttribute } from "../";
import { DocumentEvent } from "../";
import { DocumentSlot } from "../";

export const attributes: DocumentAttribute[] = [
  {
    name: "title",
    description: "标题",
    type: "string",
    value: "—",
    default: "返回",
  },
  {
    name: "content",
    description: "内容",
    type: "string",
    value: "—",
    default: "—",
  },
];

export const events: DocumentEvent[] = [
  { name: "back", description: "点击左侧区域触发", parameter: "—" },
];

export const slots: DocumentSlot[] = [
  { name: "title", description: "标题内容" },
  { name: "content", description: "内容" },
];

export const document: ElDocument = { attributes, events, slots };

export default document;
