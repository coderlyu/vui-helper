import { DocumentAttribute, UIDocument } from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "row",
    description: "段落占位图行数",
    type: "number/string",
    value: "—",
    default: "0",
  },
  {
    name: "row-width",
    description: "段落占位图宽度，可传数组来设置每一行的宽度",
    type: "number/string/(number/string)[]",
    value: "—",
    default: "100%",
  },
  {
    name: "title",
    description: "是否显示标题占位图",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "avatar",
    description: "是否显示头像占位图",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "loading",
    description: "是否显示骨架屏，传 false 时会展示子组件内容",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "animate",
    description: "是否开启动画",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "round",
    description: "是否将标题和段落显示为圆角风格",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "title-width",
    description: "标题占位图宽度",
    type: "number/string",
    value: "—",
    default: "40%",
  },
  {
    name: "avatar-size",
    description: "头像占位图大小",
    type: "number/string",
    value: "—",
    default: "32px",
  },
  {
    name: "avatar-shape",
    description: "头像占位图形状",
    type: "string",
    value: "round/square",
    default: "round",
  },
];

export const document: UIDocument = { attributes };

export default document;
