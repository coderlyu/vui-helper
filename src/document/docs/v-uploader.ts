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
    description: "已上传的文件列表",
    type: "FileListItem[]",
    value: "—",
    default: "—",
  },
  {
    name: "accept",
    description: "允许上传的文件类型",
    type: "string",
    value: "—",
    default: "image/*",
  },
  {
    name: "name",
    description: "标识符，可以在回调函数的第二项参数中获取",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "preview-size",
    description: "预览图和上传区域的尺寸，默认单位为px",
    type: "number/string",
    value: "—",
    default: "80px",
  },
  {
    name: "preview-image",
    description: "是否在上传完成后展示预览图",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "preview-full-image",
    description: "是否在点击预览图后展示全屏图片预览",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "preview-options",
    description: "全屏图片预览的配置项，可选值见 ImagePreview",
    type: "object",
    value: "—",
    default: "—",
  },
  {
    name: "multiple",
    description: "是否开启图片多选，部分安卓机型不支持",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "disabled",
    description: "是否禁用文件上传",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "deletable",
    description: "是否展示删除按钮",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "show-upload",
    description: "是否展示上传区域",
    type: "boolean",
    value: "—",
    default: "true",
  },
  {
    name: "lazy-load",
    description: "是否开启图片懒加载，须配合 Lazyload 组件使用",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "capture",
    description: "图片选取模式，可选值为 camera (直接调起摄像头)",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "upload-error",
    description: "上传失败的回调函数",
    type: "Function",
    value: "—",
    default: "—",
  },
  {
    name: "upload-success",
    description: "上传成功的回调函数",
    type: "Function",
    value: "—",
    default: "—",
  },
  {
    name: "upload-progress",
    description: "上传进度的回调函数",
    type: "Function",
    value: "—",
    default: "—",
  },
  {
    name: "upload-complete",
    description: "所有文件上传完成之后的回调函数",
    type: "Function",
    value: "—",
    default: "—",
  },
  {
    name: "before-read",
    description:
      "文件读取前的回调函数，返回 false 可终止文件读取，支持返回Promise",
    type: "Function",
    value: "—",
    default: "—",
  },
  {
    name: "after-read",
    description:
      "文件读取后的回调函数，可关闭自动上传，通过该方法自定义上传，支持返回Promise",
    type: "Function",
    value: "—",
    default: "—",
  },
  {
    name: "before-upload",
    description: "文件上传前的回调，可修改上传状态",
    type: "Function",
    value: "—",
    default: "—",
  },
  {
    name: "before-delete",
    description:
      "文件删除前的回调函数，返回 false 可终止文件读取，支持返回Promise",
    type: "Function",
    value: "—",
    default: "—",
  },
  {
    name: "max-size",
    description: "文件大小限制，单位为 byte",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "max-count",
    description: "文件上传数量限制",
    type: "number/string",
    value: "—",
    default: "—",
  },
  {
    name: "result-type",
    description: "文件读取结果类型",
    type: "string",
    value: "dataUrl/file/text",
    default: "dataUrl",
  },
  {
    name: "upload-text",
    description: "上传区域文字提示",
    type: "string",
    value: "—",
    default: "—",
  },
  {
    name: "image-fit",
    description: "预览图裁剪模式，可选值见 Image 组件",
    type: "string",
    value: "—",
    default: "cover",
  },
  {
    name: "upload-icon",
    description: "上传区域图标名称或图片链接",
    type: "string",
    value: "—",
    default: "photograph",
  },
  {
    name: "params",
    description: "透传到 wduploader 的参数",
    type: "Object",
    value: "—",
    default: "{}",
  },
];

export const events: DocumentEvent[] = [
  {
    name: "oversize",
    description: "文件大小超过限制时触发",
    parameter: "—",
  },
  {
    name: "click-preview",
    description: "点击预览图时触发",
    parameter: "—",
  },
  {
    name: "close-preview",
    description: "关闭全屏图片预览时触发",
    parameter: "—",
  },
  {
    name: "delete",
    description: "删除文件预览时触发",
    parameter: "—",
  },
  {
    name: "manualUpload",
    description: "手动上传调用函数",
    parameter: "Function",
  },
];

export const methods: DocumentMethod[] = [
  {
    name: "closeImagePreview",
    description: "关闭全屏的图片预览",
    parameter: "—",
  },
  {
    name: "chooseFile",
    description:
      "主动调起文件选择，由于浏览器安全限制，只有在用户触发操作的上下文中调用才有效",
    parameter: "—",
  },
];

export const slots: DocumentSlot[] = [
  { name: "default", description: "自定义上传区域" },
  { name: "preview-cover", description: "自定义覆盖在预览区域上方的内容" },
];

export const document: UIDocument = { attributes, events, slots, methods };

export default document;