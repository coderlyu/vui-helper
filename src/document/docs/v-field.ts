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
    description: "当前输入的值",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "label",
    description: "输入框左侧文本",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "name",
    description: "名称，提交表单的标识符",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "type",
    description: "输入框类型",
    type: "string",
    value: "text/tel/digit/number/textarea/password",
    default: "text",
  },
  {
    name: "size",
    description: "大小",
    type: "string",
    value: "large/''",
    default: "—",
  },
  {
    name: "maxlength",
    description: "输入的最大字符数",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "placeholder",
    description: "输入框占位提示文字",
    type: "string",
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
    name: "disabled",
    description: "是否只读",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "readonly",
    description: "是否禁用输入框",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "colon",
    description: "是否在 label 后面添加冒号",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "required",
    description: "是否显示表单必填星号",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "center",
    description: "是否使内容垂直居中",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "clearable",
    description: "是否启用清除图标，点击清除图标后会清空输入框",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "clear-trigger",
    description: "显示清除图标的时机",
    type: "string",
    value: "focus/always",
    default: "focus",
  },
  {
    name: "clickable",
    description: "是否开启点击反馈",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "is-link",
    description: "是否展示右侧箭头并开启点击反馈",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "autofocus",
    description: "是否自动聚焦，iOS 系统不支持该属性",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "show-word-limit",
    description: "是否显示字数统计，需要设置maxlength属性",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "error",
    description: "是否将输入内容标红",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "error-message",
    description: "底部错误提示文案，为空时不展示",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "formatter",
    description: "输入内容格式化函数",
    type: "Function",
    value: "—",
    default: "—",
  },
  {
    name: "format-trigger",
    description: "格式化函数触发的时机",
    type: "string",
    value: "onChange/onBlur",
    default: "onChange",
  },
  {
    name: "arrow-direction",
    description: "箭头方向",
    type: "string",
    value: "right/left/up/down",
    default: "right",
  },
  {
    name: "label-class",
    description: "左侧文本额外类名",
    type: "any",
    value: "—",
    default: "—",
  },
  {
    name: "label-width",
    description: "左侧文本宽度，默认单位为px",
    type: "number/string",
    value: "—",
    default: "6.2em",
  },
  {
    name: "label-align",
    description: "左侧文本对齐方式",
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
    name: "autosize",
    description:
      "是否自适应内容高度，只对 textarea 有效，可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px",
    type: "boolean/object",
    value: "—",
    default: "false",
  },
  {
    name: "left-icon",
    description: "左侧图标名称或图片链接",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "right-icon",
    description: "右侧图标名称或图片链接",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "icon-prefix",
    description: "图标类名前缀，同 Icon 组件的 class-prefix 属性",
    type: "string",
    value: "—",
    default: "v-icon",
  },
  {
    name: "rules",
    description: "表单校验规则，详见 Form 组件",
    type: "Rule[]",
    value: "—",
    default: "—",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "input",
    description: "输入框内容变化时触发",
    parameter: "value: string (当前输入的值) ",
  },
  {
    name: "focus",
    description: "输入框获得焦点时触发",
    parameter: "event: Event",
  },
  {
    name: "blur",
    description: "输入框失去焦点时触发",
    parameter: "event: Event",
  },
  {
    name: "clear",
    description: "点击清除按钮时触发",
    parameter: "event: Event",
  },
  {
    name: "click",
    description: "点击 Field 时触发",
    parameter: "event: Event",
  },
  {
    name: "click-input",
    description: "点击输入区域时触发",
    parameter: "event: Event",
  },
  {
    name: "click-left-icon",
    description: "点击左侧图标时触发",
    parameter: "event: Event",
  },
  {
    name: "click-right-icon",
    description: "点击右侧图标时触发",
    parameter: "event: Event",
  },
];

export const methods: DocumentMethod[] = [
  {
    name: "focus",
    description: "获取输入框焦点",
    parameter: "—",
  },
  {
    name: "blur",
    description: "取消输入框焦点",
    parameter: "—",
  },
];

export const slots: DocumentSlot[] = [
  { name: "label", description: "自定义输入框 label 标签" },
  {
    name: "input",
    description: "自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效",
  },
  { name: "left-icon", description: "自定义输入框头部图标" },
  { name: "right-icon", description: "自定义输入框尾部图标" },
  { name: "button", description: "自定义输入框尾部按钮" },
  { name: "extra", description: "自定义输入框最右侧的额外内容" },
];

export const document: UIDocument = { attributes, events, slots, methods };

export default document;
