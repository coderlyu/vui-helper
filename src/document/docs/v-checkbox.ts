import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
  DocumentMethod,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "v-model",
    description: "是否为选中状态",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "name",
    description: "标识符",
    type: "any",
    value: "—",
    default: "—",
  },
  {
    name: "shape",
    description: "形状",
    type: "string",
    value: "square/round",
    default: "round",
  },
  {
    name: "disabled",
    description: "是否禁用复选框",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "label-disabled",
    description: "是否禁用复选框文本点击",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "label-position",
    description: "文本位置",
    type: "string",
    value: "right/left",
    default: "right",
  },
  {
    name: "icon-size",
    description: "图标大小，默认单位为px",
    type: "number/string",
    value: "—",
    default: "20px",
  },
  {
    name: "checked-color",
    description: "选中状态颜色",
    type: "string",
    value: "—",
    default: "#1989fa",
  },
  {
    name: "bind-group",
    description: "是否与复选框组绑定",
    type: "boolean",
    value: "—",
    default: "true",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "change",
    description: "当绑定值变化时触发的事件",
    parameter: "checked: boolean",
  },
  {
    name: "click",
    description: "点击复选框时触发",
    parameter: "event:Event",
  },
];

export const methods: DocumentMethod[] = [
  {
    name: "toggle",
    description: "切换选中状态，传true为选中，false为取消选中，不传参为取反",
    parameter: "checked?: boolean",
  },
];

export const slots: DocumentSlot[] = [
  { name: "default", description: "自定义文本" },
  { name: "icon", description: "自定义图标" },
];

export const document: UIDocument = { attributes, events, slots, methods };

export default document;
