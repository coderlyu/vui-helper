import { DocumentSlot, UIDocument } from "../index";

export const slots: DocumentSlot[] = [
  { name: "active-icon", description: "自定义激活状态图标" },
  { name: "inactive-icon", description: "自定义未激活状态图标" },
];

export const document: UIDocument = { slots };

export default document;
