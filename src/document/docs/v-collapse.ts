import { DocumentEvent, DocumentAttribute, UIDocument } from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "v-model",
    description: "当前展开面板的 name",
    type: "手风琴：number/string; 非手风琴：(number/string)[]",
    value: "—",
    default: "—",
  },
  {
    name: "accordion",
    description: "是否开启手风琴模式",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "border",
    description: "是否显示外边框",
    type: "boolean",
    value: "—",
    default: "true",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "change",
    description: "切换面板时触发",
    parameter: "activeNames: 类型与 v-model 绑定的值一致",
  },
];

export const document: UIDocument = { attributes, events };

export default document;
