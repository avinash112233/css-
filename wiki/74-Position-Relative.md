One way to modify the default position of an element is by setting its `position` property to `relative`.

This value allows you to position an element relative to its default static position on the web page.
```css
.box-bottom {
  background-color: DeepSkyBlue;
  position: relative;
}
```

Although the code in the example above instructs the browser to expect a relative positioning of the div, it does not specify where the div should be positioned on the page.
```css
.box-bottom {
  background-color: DeepSkyBlue;
  position: relative;
  top: 20px;
  left: 50px;
}
```

In the example above, the `<div>` has been positioned using two of the four *offset* properties. The valid offset properties are:

1. `top` - moves the element down.
2. `bottom` - moves the element up.
3. `left` - moves the element right.
4. `right` - moves the element left.
In the example above, the `<div>` will be moved down 20 pixels and to the right 50 pixels from its default static position. The image below displays the new position of the box. The dotted line represents where the statically positioned (default) box was positioned.

![element position](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/relative.png)

Units for offset properties can be specified in pixels, ems, or percentages. Note that offset properties will not work if the value of the element’s `position` property is the default `static`.