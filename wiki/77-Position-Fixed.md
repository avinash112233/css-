When an element’s position is set to `absolute`, as in the last exercise, the element will scroll with the rest of the document when a user scrolls.

We can *fix* an element to a specific position on the page (regardless of user scrolling) by setting its position to `fixed`.

```css
.box-bottom {
  background-color: DeepSkyBlue;
  position: fixed;
  top: 20px;
  left: 50px;
}
```

In the example above, the `.box-bottom` `<div>` will remain fixed to its position no matter where the user scrolls on the page, like in the image below:

#
![absolute positioning](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/fixed.gif)
#

This technique is often used for navigation bars on a web page.