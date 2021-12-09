import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "v-model",
    description: "是否显示弹窗",
    type: "boolean",
    value: "—",
    default: "—",
  },
  {
    name: "title",
    description: "标题",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "width",
    description: "弹窗宽度，默认单位为px",
    type: "number/string",
    value: "—",
    default: "320px",
  },
  {
    name: "message",
    description: "文本内容，支持通过\\n换行	",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "message-align",
    description: "内容对齐方式",
    type: "string",
    value: "center/left/right",
    default: "center",
  },
  {
    name: "theme",
    description: "样式风格",
    type: "string",
    value: "default/round-button",
    default: "default",
  },
  {
    name: "show-confirm-button",
    description: "是否展示确认按钮",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "show-cancel-button",
    description: "是否展示取消按钮",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "confirm-button-text",
    description: "确认按钮文案",
    type: "string",
    value: "—",
    default: "确认",
  },
  {
    name: "confirm-button-color",
    description: "确认按钮颜色",
    type: "string",
    value: "—",
    default: "#ee0a24",
  },
  {
    name: "cancel-button-text",
    description: "取消按钮文案",
    type: "string",
    value: "—",
    default: "取消",
  },
  {
    name: "cancel-button-color",
    description: "取消按钮颜色",
    type: "string",
    value: "—",
    default: "black",
  },
  {
    name: "overlay",
    description: "是否展示遮罩层",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "overlay-class",
    description: "自定义遮罩层类名",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "overlay-style",
    description: "自定义遮罩层样式",
    type: "object",
    value: "—",
    default: "—",
  },
  {
    name: "close-on-popstate",
    description: "是否在页面回退时自动关闭",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "close-on-click-overlay",
    description: "是否在点击遮罩层后关闭弹窗",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "lazy-render",
    description: "是否在显示弹层时才渲染节点",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "lock-scroll",
    description: "是否锁定背景滚动",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "allow-html",
    description: "是否允许 message 内容中渲染 HTML",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "before-close",
    description:
      "关闭前的回调函数，调用 done() 后关闭弹窗，调用 done(false) 阻止弹窗关闭",
    type: "(action, done)=>void",
    value: "—",
    default: "—",
  },
  {
    name: "transition",
    description: "动画类名，等价于 transtion 的name属性",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "get-container",
    description: "指定挂载的节点",
    type: "string/()=>Element",
    value: "—",
    default: "—",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "confirm",
    description: "点击确认按钮时触发",
    parameter: "—",
  },
  {
    name: "cancel",
    description: "点击取消按钮时触发",
    parameter: "—",
  },
  {
    name: "open",
    description: "打开弹窗时触发",
    parameter: "—",
  },
  {
    name: "close",
    description: "关闭弹窗时触发",
    parameter: "—",
  },
  {
    name: "opened",
    description: "打开弹窗且动画结束后触发",
    parameter: "—",
  },
  {
    name: "closed",
    description: "关闭弹窗且动画结束后触发",
    parameter: "—",
  },
];

export const slots: DocumentSlot[] = [
  { name: "default", description: "自定义内容" },
  { name: "title", description: "自定义标题" },
];

export const document: UIDocument = { attributes, events, slots };

export default document;
