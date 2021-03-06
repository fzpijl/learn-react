<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [extractor](./extractor.md) &gt; [UIImage](./extractor.uiimage.md) &gt; [createCustom](./extractor.uiimage.createcustom.md)

## UIImage.createCustom() method

创建自定义材质的图片物体

<b>Signature:</b>

```typescript
static createCustom( resourceInfos : UIResourceInfo[], depth : number, material : UIMaterial) : UIImage;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  resourceInfos | [UIResourceInfo](./extractor.uiresourceinfo.md)<!-- -->\[\] | 该对象需要使用的资源信息数组 |
|  depth | number | 创建的图片物体的厚度，厚度为0时使用平面作为基础几何体，厚度大于0时使用立方体作为基础几何体 |
|  material | [UIMaterial](./extractor.uimaterial.md) | 材质  { module:UIImage.UIImage } |

<b>Returns:</b>

[UIImage](./extractor.uiimage.md)

