import { DocumentEvent, DocumentAttribute, UIDocument } from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "v-model",
    description: "当前分值",
    type: "number",
    value: "—",
    default: "—",
  },
  {
    name: "count",
    description: "图标总数",
    type: "number/string",
    value: "—",
    default: "5",
  },
  {
    name: "size",
    description: "图标大小，默认单位为px",
    type: "number/string",
    value: "—",
    default: "20px",
  },
  {
    name: "gutter",
    description: "图标间距，默认单位为px",
    type: "number/string",
    value: "—",
    default: "4px",
  },
  {
    name: "color",
    description: "选中时的颜色",
    type: "string",
    value: "—",
    default: "#ee0a24",
  },
  {
    name: "void-color",
    description: "未选中时的颜色",
    type: "string",
    value: "—",
    default: "#c8c9cc",
  },
  {
    name: "disabled-color",
    description: "禁用时的颜色",
    type: "string",
    value: "—",
    default: "#c8c9cc",
  },
  {
    name: "icon",
    description: "选中时的图标名称或图片链接",
    type: "string",
    value: "—",
    default: "star",
  },
  {
    name: "void-icon",
    description: "未选中时的图标名称或图片链接",
    type: "string",
    value: "—",
    default: "star-o",
  },
  {
    name: "icon-prefix",
    description: "图标类名前缀，同 Icon 组件的 class-prefix 属性",
    type: "string",
    value: "—",
    default: "v-icon",
  },
  {
    name: "allow-half",
    description: "是否允许半选",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "readonly",
    description: "是否为只读状态",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "disabled",
    description: "是否禁用评分",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "touchable",
    description: "是否可以通过滑动手势选择评分",
    type: "boolean",
    value: "—",
    default: "true",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "change",
    description: "当前分值变化时触发的事件",
    parameter: "当前分值",
  },
];

export const document: UIDocument = { attributes, events };

export default document;
