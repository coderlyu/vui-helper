import { DocumentEvent, DocumentAttribute, UIDocument } from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "v-model",
    description: "是否显示弹出层",
    type: "boolean",
    value: "—",
    default: "false",
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
    name: "duration",
    description: "动画时长，单位秒",
    type: "number/string",
    value: "—",
    default: "0.3",
  },
  {
    name: "lock-scroll",
    description: "是否锁定背景滚动",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "lazy-render",
    description: "是否在显示弹层时才渲染节点",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "close-on-popstate",
    description: "是否在页面回退时自动关闭",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "close-icon",
    description: "关闭图标名称或图片链接",
    type: "string",
    value: "—",
    default: "close",
  },
  {
    name: "transition",
    description: "动画类名，等价于 transtion 的name属性",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "before-close",
    description:
      "关闭前的回调函数；调用 done()后关闭; 调用 done(false)后阻止关闭",
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
  {
    name: "safe-area-inset-bottom",
    description: "是否开启底部安全区适配",
    type: "boolean",
    value: "—",
    default: "false",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "open",
    description: "打开弹出层时触发",
    parameter: "—",
  },
  {
    name: "close",
    description: "关闭弹出层时触发",
    parameter: "—",
  },
  {
    name: "opened",
    description: "打开弹出层且动画结束后触发",
    parameter: "—",
  },
  {
    name: "closed",
    description: "关闭弹出层且动画结束后触发",
    parameter: "—",
  },
];

export const document: UIDocument = { attributes, events };

export default document;
