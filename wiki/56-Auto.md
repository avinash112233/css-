The `margin` property also lets you center content. However, you must follow a few syntax requirements. Take a look at the following example:
```css
div {
  margin: 0 auto;
}
```

In the example above, `margin: 0 auto;` will center the `div`s in their containing elements. The `0` sets the top and bottom margins to 0 pixels. The `auto` value instructs the browser to adjust the left and right margins until the element is centered within its containing element.

The `div` elements in the example above should center within an element that fills the page, but this doesn’t occur. Why?

In order to center an element, a width must be set for that element. Otherwise, the width of the div will be automatically set to the full width of its containing element, like the `<body>`, for example. It’s not possible to center an element that takes up the full width of the page.
```css
div.headline {
  width: 400px;
  margin: 0 auto;
}
```

In the example above, the width of the div is set to 400 pixels, which is less than the width of most screens. This will cause the div to center within a containing element that is greater than 400 pixels wide.