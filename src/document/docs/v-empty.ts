import {
  DocumentSlot,
  DocumentEvent,
  DocumentAttribute,
  UIDocument,
} from "../index";

export const attributes: DocumentAttribute[] = [
  {
    name: "image",
    description: "图片类型，支持传入图片 URL",
    type: "string",
    value: "error/network/nocontent/cart/order/coupons",
    default: "nocontent",
  },
  {
    name: "width",
    description: "图片宽度，默认单位为px",
    type: "number/string",
    value: "—",
    default: "150",
  },
  {
    name: "height",
    description: "图片高度，默认单位为 px",
    type: "number/string",
    value: "—",
    default: "150",
  },
  {
    name: "description",
    description: "图片下方的描述文字",
    type: "string",
    value: "—",
    default: "—",
  },
];

export const events: DocumentEvent[] = [];

export const slots: DocumentSlot[] = [
  { name: "default", description: "自定义底部内容" },
  { name: "image", description: "自定义图标" },
  { name: "description", description: "自定义描述文字" },
];

export const document: UIDocument = { attributes, events, slots };

export default document;
