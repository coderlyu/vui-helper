import { DocumentEvent, DocumentAttribute, UIDocument } from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "v-model",
    description: "当前选中项的标识符",
    type: "any",
    value: "—",
    default: "—",
  },
  {
    name: "disabled",
    description: "是否禁用所有标题文本",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "direction",
    description: "排列方向",
    type: "string",
    value: "vertical/horizontal",
    default: "vertical",
  },
  {
    name: "icon-size",
    description: "所有标题文本的图标大小，默认单位为px",
    type: "number/string",
    value: "—",
    default: "20px",
  },
  {
    name: "checked-color",
    description: "所有标题文本的选中状态颜色",
    type: "string",
    value: "—",
    default: "#1989fa",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "change",
    description: "当绑定值变化时触发的事件",
    parameter: "name: string",
  },
];

export const document: UIDocument = { attributes, events };

export default document;
