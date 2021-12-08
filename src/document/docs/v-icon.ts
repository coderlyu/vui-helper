import { DocumentEvent, DocumentAttribute, UIDocument } from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "name",
    description: "图标名称或图片链接",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "dot",
    description: "是否显示图标右上角小红点",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "badge",
    description: "图标右上角徽标的内容",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "color",
    description: "图标颜色",
    type: "string",
    value: "—",
    default: "inherit",
  },
  {
    name: "size",
    description: "图标大小，如 20px 2em，默认单位为px",
    type: "number/string",
    value: "—",
    default: "inherit",
  },
  {
    name: "class-prefix",
    description: "类名前缀，用于使用自定义图标",
    type: "string",
    value: "—",
    default: "v-icon",
  },
  {
    name: "tag",
    description: "HTML 标签",
    type: "string",
    value: "—",
    default: "i",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "click",
    description: "点击图标时触发",
    parameter: "event: Event",
  },
];

export const document: UIDocument = { attributes, events };

export default document;
