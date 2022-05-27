import {
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
  DocumentMethod,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "type",
    description: "时间类型",
    type: "string",
    value: "datetime/date/time/year-month/month-day/datehour",
    default: "datetime",
  },
  {
    name: "title",
    description: "顶部栏标题",
    type: "string",
    value: "—",
    default: "''",
  },
  {
    name: "confirm-button-text",
    description: "确认按钮文字",
    type: "string",
    value: "—",
    default: "确认",
  },
  {
    name: "cancel-button-text",
    description: "取消按钮文字",
    type: "string",
    value: "—",
    default: "取消",
  },
  {
    name: "show-toolbar",
    description: "是否显示顶部栏",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "loading",
    description: "是否显示加载状态",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "readonly",
    description: "是否为只读状态，只读状态下无法切换选项",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "filter",
    description: "选项过滤函数",
    type: "(type,vals)=>vals",
    value: "—",
    default: "—",
  },
  {
    name: "formatter",
    description: "选项格式化函数",
    type: "(type,val)=>val",
    value: "—",
    default: "—",
  },
  {
    name: "columns-order",
    description: "自定义列排序数组",
    type: "string[]",
    value: "year/month/day/hour/minute",
    default: "—",
  },
  {
    name: "item-height",
    description: "选项高度，支持px,vw,rem单位，默认px",
    type: "number/string",
    value: "—",
    default: "44",
  },
  {
    name: "visible-item-count",
    description: "可见的选项个数",
    type: "number/string",
    value: "—",
    default: "6",
  },
  {
    name: "swipe-duration",
    description: "快速滑动时惯性滚动的时长，单位ms",
    type: "number/string",
    value: "—",
    default: "1000",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "change",
    description: "当值变化时触发的事件",
    parameter: "picker: Picker实例",
  },
  {
    name: "confirm",
    description: "点击完成按钮时触发的事件",
    parameter: "value: 当前选中的时间",
  },
  {
    name: "cancel",
    description: "点击取消按钮时触发的事件",
    parameter: "—",
  },
];

export const methods: DocumentMethod[] = [
  {
    name: "getPicker",
    description: "获取 Picker 实例，用于调用 Picker 的实例方法",
    parameter: "—",
  },
];

export const document: UIDocument = { attributes, events, methods };

export default document;
