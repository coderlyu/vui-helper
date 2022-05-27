import {
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
  DocumentMethod,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "v-model",
    description: "所有选中项的标识符",
    type: "any[]",
    value: "—",
    default: "—",
  },
  {
    name: "disabled",
    description: "是否禁用所有复选框",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "max",
    description: "最大可选数，0为无限制",
    type: "number/string",
    value: "—",
    default: "0",
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
    description: "所有复选框的图标大小，默认单位为px",
    type: "number/string",
    value: "—",
    default: "20px",
  },
  {
    name: "checked-color",
    description: "所有复选框的选中状态颜色",
    type: "string",
    value: "—",
    default: "#1989fa",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "change",
    description: "当绑定值变化时触发的事件",
    parameter: "names:any[]",
  },
];

export const methods: DocumentMethod[] = [
  {
    name: "toggleAll",
    description: "切换所有复选框，传true为选中，false为取消选中，不传参为取反",
    parameter: "checked?: boolean",
  },
];

export const document: UIDocument = { attributes, events, methods };

export default document;
