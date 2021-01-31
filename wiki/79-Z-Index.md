When boxes on a web page have a combination of different positions, the boxes (and therefore, their content) can overlap with each other, making the content difficult to read or consume.

```css
.box-top {
  background-color: Aquamarine;
}

.box-bottom {
  background-color: DeepSkyBlue;
  position: absolute;
  top: 20px;
  left: 50px;
}
```

In the example above, the `.box-bottom` `<div>` ignores the `.box-top` `<div>` and overlaps it as a user scrolls.

The `z-index` property controls how far “back” or how far “forward” an element should appear on the web page when elements overlap. This can be thought of the depth of elements, with deeper elements appearing behind shallower elements.

The `z-index` property accepts integer values. Depending on their values, the integers instruct the browser on the order in which elements should be displayed on the web page.

```css
.box-top {
  background-color: Aquamarine;
  position: relative;
  z-index: 2;
}

.box-bottom {
  background-color: DeepSkyBlue;
  position: absolute;
  top: 20px;
  left: 50px;
  z-index: 1;
}
```

In the example above, we set the `.box-top` position to relative and the z-index to 2. We changed position to `relative`, because the z-index property does not work on static elements. The z-index of `2` moves the `.box-top` element forward, because it is greater than the `.box-bottom` z-index, `1`. See the example image below:

![z-index](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/z-index.png)

In the image above, you can see the top box is moved in front of the bottom box.