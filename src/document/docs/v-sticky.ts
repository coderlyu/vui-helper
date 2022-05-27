import { DocumentEvent, DocumentAttribute, UIDocument } from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "offset-top",
    description: "吸顶时与顶部的距离，支持 px vw vh rem 单位，默认 px",
    type: "number/string",
    value: "—",
    default: "0",
  },
  {
    name: "z-index",
    description: "吸顶时的 z-index",
    type: "number/string",
    value: "—",
    default: "99",
  },
  {
    name: "container",
    description: "容器对应的 HTML 节点",
    type: "Element",
    value: "—",
    default: "—",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "scroll",
    description: "滚动时触发",
    parameter: "{ scrollTop: 距离顶部位置, isFixed: 是否吸顶 }",
  },
];

export const document: UIDocument = { attributes, events };

export default document;
