"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.events = exports.attributes = void 0;
exports.attributes = [
    {
        name: "fit",
        description: "视频播放填充",
        type: "string",
        value: "contain/cover/node/scale-down",
        default: "contain",
    },
    {
        name: "height",
        description: "视频高度",
        type: "string/number",
        value: "—",
        default: "—",
    },
];
exports.events = [
    {
        name: "play",
        description: "播放",
        parameter: "—",
    },
    {
        name: "pause",
        description: "暂停",
        parameter: "—",
    },
    {
        name: "isPlay",
        description: "是否播放",
        parameter: "—",
    },
    {
        name: "mute",
        description: "静音/打开声音/是否静音",
        parameter: "?:boolean",
    },
    {
        name: "volume",
        description: "设置/返回声音值",
        parameter: "?: string/number",
    },
    {
        name: "rate",
        description: "设置/播放速率",
        parameter: "?: string/number",
    },
    {
        name: "duration",
        description: "获取视频时长（需要在 ready 之后调用）",
        parameter: "?: string/number",
    },
    {
        name: "currentTime",
        description: "获取当前播放时间",
        parameter: "?: string/number",
    },
    {
        name: "seek",
        description: "跳转到指定时间（单位：秒）",
        parameter: "time: number",
    },
    {
        name: "seekForward",
        description: "前进多少秒（单位：秒）",
        parameter: "time: number",
    },
    {
        name: "seekPercent",
        description: "跳转到百分比进度（百分制，0 - 100）",
        parameter: "percent: number",
    },
    {
        name: "isFullscreen",
        description: "是否全屏",
        parameter: "—",
    },
    {
        name: "fullscreen",
        description: "进入全屏",
        parameter: "—",
    },
    {
        name: "exitFullscreen",
        description: "退出全屏",
        parameter: "—",
    },
    {
        name: "reload",
        description: "加载新的视频地址",
        parameter: "src: string",
    },
    {
        name: "remove",
        description: "移除视频",
        parameter: "—",
    },
    {
        name: "on",
        description: "监听事件",
        parameter: "event: 事件名,callback: 事件回调",
    },
    {
        name: "once",
        description: "监听事件，只触发一次",
        parameter: "event: 事件名 callback: 事件回调",
    },
    {
        name: "off",
        description: "移除事件",
        parameter: "event: 事件名（event 为空，则移除所有事件）",
    },
];
exports.document = { attributes: exports.attributes, events: exports.events };
exports.default = exports.document;
//# sourceMappingURL=v-video.js.map