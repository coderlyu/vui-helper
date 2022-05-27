import { DocumentAttribute, UIDocument } from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "column-num",
    description: "列数",
    type: "number/string",
    value: "—",
    default: "4",
  },
  {
    name: "icon-size",
    description: "图标大小，默认单位为px",
    type: "number/string",
    value: "—",
    default: "28px",
  },
  {
    name: "gutter",
    description: "格子之间的间距，默认单位为px",
    type: "number/string",
    value: "—",
    default: "0",
  },
  {
    name: "border",
    description: "是否显示边框",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "center",
    description: "是否将格子内容居中显示",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "square",
    description: "是否将格子固定为正方形",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "clickable",
    description: "是否开启格子点击反馈",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "direction",
    description: "格子内容排列的方向",
    type: "string",
    value: "vertical/horizontal",
    default: "vertical",
  },
];

export const document: UIDocument = { attributes };

export default document;
