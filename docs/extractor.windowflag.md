<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [extractor](./extractor.md) &gt; [WindowFlag](./extractor.windowflag.md)

## WindowFlag type

窗口的标记位 \| value \| description \| \| \-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\--- \| \| 'threadAlone' \| 指定该标记的窗口在单独的线程绘制 \| \| 'handleAlone' \| 指定该标记的窗口在自己的更新函数中处理事件，未指定的窗口在所有窗口更新前统一处理事件 \| \| 'autoChaneResolution' \| 指定该标记的窗口由windowmanager动态调整分辨率，未设置的窗口仅在进出全屏状态时由windowmanager强制修改分辨率 \| \| 'popup' \| 弹窗，无边框和标题栏，需要应用控制窗口关闭，显示在其他窗口前方，可在全屏状态下显示交互 \|  { 'threadAlone'\|'handleAlone'\|'autoChaneResolution'\|'popup' } WindowFlag  module:WindowManager

<b>Signature:</b>

```typescript
export type WindowFlag  = 'threadAlone'|'handleAlone'|'autoChaneResolution'|'popup';
```