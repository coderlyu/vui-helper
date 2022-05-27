import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
  DocumentMethod,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "label-width",
    description: "表单项 label 宽度，默认单位为px",
    type: "number/string",
    value: "—",
    default: "6.2em",
  },
  {
    name: "label-align",
    description: "表单项 label 对齐方式",
    type: "string",
    value: "left/center/right",
    default: "left",
  },
  {
    name: "input-align",
    description: "输入框对齐方式",
    type: "string",
    value: "left/center/right",
    default: "left",
  },
  {
    name: "error-message-align",
    description: "错误提示文案对齐方式",
    type: "string",
    value: "left/center/right",
    default: "left",
  },
  {
    name: "validate-trigger",
    description: "表单校验触发时机，可选值为onChange、onSubmit",
    type: "string",
    value: "onBlur/onChange/onSubmit",
    default: "onBlur",
  },
  {
    name: "colon",
    description: "是否在 label 后面添加冒号",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "validate-first",
    description: "是否在某一项校验不通过时停止校验",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "scroll-to-error",
    description: "是否在提交表单且校验不通过时滚动至错误的表单项",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "show-error",
    description: "是否在校验不通过时标红输入框",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "show-error-message",
    description: "是否在校验不通过时在输入框下方展示错误提示",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "submit-on-enter",
    description: "是否在按下回车键时提交表单",
    type: "boolean",
    value: "—",
    default: "true",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "submit",
    description: "提交表单且验证通过后触发",
    parameter: "values: object",
  },
  {
    name: "failed",
    description: "提交表单且验证不通过后触发",
    parameter: "errorInfo: { values: object, errors: object[] }",
  },
];

export const methods: DocumentMethod[] = [
  {
    name: "submit",
    description: "提交表单，与点击提交按钮的效果等价",
    parameter: "—",
  },
  {
    name: "validate",
    description: "验证表单，支持传入name来验证单个表单项",
    parameter: "name?: string",
  },
  {
    name: "resetValidation",
    description: "重置表单项的验证提示，支持传入name来重置单个表单项",
    parameter: "name?: string",
  },
  {
    name: "scrollToField",
    description:
      "滚动到对应表单项的位置，默认滚动到顶部，第二个参数传 false 可滚动至底部",
    parameter: "name: string, alignToTop: boolean",
  },
];

export const slots: DocumentSlot[] = [
  { name: "default", description: "表单内容" },
];

export const document: UIDocument = { attributes, events, slots, methods };

export default document;
