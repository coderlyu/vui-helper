import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "v-model",
    description: "是否展示气泡弹出层",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "actions",
    description: "选项列表",
    type: "Action[]",
    value: "—",
    default: "[]",
  },
  {
    name: "placement",
    description: "弹出位置",
    type: "string",
    value: "—",
    default: "bottom",
  },
  {
    name: "theme",
    description: "主题风格",
    type: "string",
    value: "light/dark",
    default: "light",
  },
  {
    name: "trigger",
    description: "触发方式",
    type: "string",
    value: "click/''",
    default: "—",
  },
  {
    name: "offset",
    description: "出现位置的偏移量",
    type: "[number, number]",
    value: "—",
    default: "[0, 8]",
  },
  {
    name: "overlay",
    description: "是否显示遮罩层",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "close-on-click-action",
    description: "是否在点击选项后关闭",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "close-on-click-outside",
    description: "是否在点击外部元素后关闭菜单",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "get-container",
    description: "指定挂载的节点",
    type: "string/()=>Element",
    value: "—",
    default: "body",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "select",
    description: "点击选项时触发",
    parameter: "—",
  },
  {
    name: "open",
    description: "打开菜单时触发",
    parameter: "—",
  },
  {
    name: "close",
    description: "关闭菜单时触发",
    parameter: "—",
  },
  {
    name: "opened",
    description: "打开菜单且动画结束后触发",
    parameter: "—",
  },
  {
    name: "closed",
    description: "关闭菜单且动画结束后触发",
    parameter: "—",
  },
];

export const slots: DocumentSlot[] = [
  { name: "default", description: "自定义菜单内容" },
  { name: "reference", description: "触发 Popover 显示的元素内容" },
];

export const document: UIDocument = { attributes, events, slots };

export default document;
