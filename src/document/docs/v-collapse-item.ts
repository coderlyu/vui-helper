import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
  DocumentMethod,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "name",
    description: "唯一标识符，默认为索引值",
    type: "number/string",
    value: "—",
    default: "index",
  },
  {
    name: "icon",
    description: "标题栏左侧图标名称或图片链接",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "size",
    description: "标题栏大小",
    type: "string",
    value: "large/''",
    default: "—",
  },
  {
    name: "title",
    description: "标题栏左侧内容",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "value",
    description: "标题栏右侧内容",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "label",
    description: "标题栏描述信息",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "border",
    description: "是否显示内边框",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "is-link",
    description: "是否展示标题栏右侧箭头并开启点击反馈",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "disabled",
    description: "是否禁用面板",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "title-class",
    description: "左侧标题额外类名",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "value-class",
    description: "右侧内容额外类名",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "label-class",
    description: "描述信息额外类名",
    type: "string",
    value: "—",
    default: "—",
  },
];

export const methods: DocumentMethod[] = [
  {
    name: "toggle",
    description: "切换面试展开状态，传 true 为展开，false 为收起，不传参为切换",
    parameter: "expand?: boolean",
  },
];

export const slots: DocumentSlot[] = [
  { name: "default", description: "面板内容" },
  { name: "value", description: "自定义显示内容" },
  { name: "icon", description: "自定义 icon" },
  { name: "title", description: "自定义 title" },
  { name: "right-icon", description: "自定义右侧按钮，默认是 arrow" },
];

export const document: UIDocument = { attributes, slots, methods };

export default document;
