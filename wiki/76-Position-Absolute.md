Another way of modifying the position of an element is by setting its position to `absolute`.

When an element’s position is set to `absolute` , all other elements on the page will be *ignored* by the element and it acts like other elements are not present on the page. The element will be positioned relative to its closest positioned parent element.

```css
.box-bottom {
  background-color: DeepSkyBlue;
  position: absolute;
  top: 20px;
  left: 50px;
}
```

In the example above, the `.box-bottom` `<div>` will be moved down and right from the top left corner of the view. If offset properties weren’t specified, the top box would be entirely covered by the bottom box. Take a look at the gif below:

#

![absolute position](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/absolute.gif)
#

The bottom box in this image (colored blue) is displaced from the top left corner of its container. It is 20 pixels lower and 50 pixels to the right of the top box.

In the next exercise, we will compare the scrolling of `absolute` elements with `fixed` elements.