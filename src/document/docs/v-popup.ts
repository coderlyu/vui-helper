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
    name: "overlay",
    description: "是否显示遮罩层",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "position",
    description: "弹出位置",
    type: "string",
    value: "center/top/bottom/right/left",
    default: "center",
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
    name: "round",
    description: "是否显示圆角",
    type: "boolean",
    value: "—",
    default: "false",
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
    name: "close-on-click-overlay",
    description: "是否在点击遮罩层后关闭",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "closeable",
    description: "是否显示关闭图标",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "close-icon",
    description: "关闭图标名称或图片链接",
    type: "string",
    value: "—",
    default: "cross",
  },
  {
    name: "close-icon-position",
    description: "关闭图标位置",
    type: "string",
    value: "top-right/top-left/bottom-left/bottom-right",
    default: "top-right",
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
  {
    name: "before-close",
    description:
      "关闭前的回调函数；调用done()后关闭; 调用done(false)后阻止关闭",
    type: "function: (done) => done(false)",
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
    name: "click",
    description: "点击弹出层时触发",
    parameter: "event: Event",
  },
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
  {
    name: "click-overlay",
    description: "点击遮罩层时触发",
    parameter: "—",
  },
];

export const document: UIDocument = { attributes, events };

export default document;
