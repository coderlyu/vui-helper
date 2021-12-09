import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
  DocumentMethod,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "time",
    description: "倒计时时长，单位毫秒",
    type: "number/string",
    value: "—",
    default: "0",
  },
  {
    name: "format",
    description: "时间格式",
    type: "string",
    value: "—",
    default: "HH:mm:ss",
  },
  {
    name: "auto-start",
    description: "是否自动开始倒计时",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "millisecond",
    description: "是否开启毫秒级渲染",
    type: "boolean",
    value: "—",
    default: "false",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "finish",
    description: "倒计时结束时触发",
    parameter: "—",
  },
  {
    name: "change",
    description: "倒计时变化时触发",
    parameter: "timeData: TimeData",
  },
];

export const methods: DocumentMethod[] = [
  {
    name: "start",
    description: "开始倒计时",
    parameter: "—",
  },
  {
    name: "pause",
    description: "暂停倒计时",
    parameter: "—",
  },
  {
    name: "reset",
    description: "重设倒计时，若auto-start为true，重设后会自动开始倒计时",
    parameter: "—",
  },
];

export const slots: DocumentSlot[] = [
  { name: "default", description: "自定义内容" },
];

export const document: UIDocument = { attributes, events, slots, methods };

export default document;
