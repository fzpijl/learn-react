<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [extractor](./extractor.md) &gt; [ScreenCapture](./extractor.screencapture.md) &gt; [emit](./extractor.screencapture.emit_2.md)

## ScreenCapture.emit() method

截屏(录屏、投屏等)申请结果回调函数,相应接口返回成功后，将会收到此回调，表示最终结果事件  module:ScreenCapture.ScreenCapture\#screenCaptureResult  module:ScreenCapture.ScreenCapture

<b>Signature:</b>

```typescript
emit(event:'screenCaptureResult',  type : ScreenCaptureEventType, identifier : number, error : ScreenCaptureError):boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  event | 'screenCaptureResult' |  |
|  type | [ScreenCaptureEventType](./extractor.screencaptureeventtype.md) |  |
|  identifier | number |  |
|  error | [ScreenCaptureError](./extractor.screencaptureerror.md) |  |

<b>Returns:</b>

boolean
