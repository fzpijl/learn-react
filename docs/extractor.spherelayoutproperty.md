<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [extractor](./extractor.md) &gt; [SphereLayoutProperty](./extractor.spherelayoutproperty.md)

## SphereLayoutProperty class

布局SphereLayout的属性  module:ui

<b>Signature:</b>

```typescript
export class SphereLayoutProperty 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [axis](./extractor.spherelayoutproperty.axis.md) |  | [LayoutAxis](./extractor.layoutaxis.md) | 中心转轴，目前只支持X/Y轴，默认值为 yPositive  { module:UILayout.LayoutAxis } |
|  [gap](./extractor.spherelayoutproperty.gap.md) |  | [Vector2f](./extractor.vector2f.md) | 物体行列间隔，环形排列方向为弧度间隔，另一方向为平行间隔，默认值为 (0.1, 0.1)  { module:Common.Vector2f } |
|  [objOrientation](./extractor.spherelayoutproperty.objorientation.md) |  | [ObjectOrientation](./extractor.objectorientation.md) | 物体正方向，正对/背对转轴，默认值为 out  { module:UILayout.ObjectOrientation } |
|  [radius](./extractor.spherelayoutproperty.radius.md) |  | number | 圆环的半径，默认值为 2,需要保证<!-- -->&gt;<!-- -->0  { number } |
|  [trackNumber](./extractor.spherelayoutproperty.tracknumber.md) |  | number | 行/列数，默认值为 3, 需要保证<!-- -->&gt;<!-- -->0  { number } |
|  [trackSize](./extractor.spherelayoutproperty.tracksize.md) |  | number\[\] | 指定的高度/宽度数组  { number\[\] } |

