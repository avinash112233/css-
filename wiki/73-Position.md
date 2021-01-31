Take a look at the *block-level* elements in the image below:

![block-level elements](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/position.png)

Block-level elements like these boxes create a *block* the full width of their parent elements, and they prevent other elements from appearing in the same horizontal space. The boxes in the image above were created with the following CSS:
```css
.boxes {
  width: 120px;
  height: 70px;
}
```

and the following HTML:
```html
<div class="boxes"></div>
<div class="boxes"></div>
```

Notice the block-level elements in the image above take up their own line of space and therefore don’t overlap each other. You can see block-level elements also consistently appear on the left side of the browser. This is the default *position* for block-level elements.

The default position of an element can be changed by setting its `position` property. The `position` property can take one of four values:

1. `static` - the default value (it does not need to be specified)
2. `relative`
3. `absolute`
4. `fixed`

In the next few exercises, you’ll learn about the values in items 2, 3, and 4 above. For now, it’s important to understand that if you favor the default position of an HTML element, you don’t need to set its `position` property.