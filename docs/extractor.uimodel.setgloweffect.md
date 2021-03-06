<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [extractor](./extractor.md) &gt; [UIModel](./extractor.uimodel.md) &gt; [setGlowEffect](./extractor.uimodel.setgloweffect.md)

## UIModel.setGlowEffect() method

为模型添加发光区域，重复调用替换原来的效果

<b>Signature:</b>

```typescript
setGlowEffect( glowSize : number, glowColor : Color, glowType : UIModelGlowType) : void ;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  glowSize | number | 发光区域的体积相对于原始模型的倍数,0则没有效果，1为扩大0.1倍 |
|  glowColor | [Color](./extractor.color.md) | 发光区域的颜色 |
|  glowType | [UIModelGlowType](./extractor.uimodelglowtype.md) | 发光区域的类型(外发光区域和内发光区域) |

<b>Returns:</b>

void

