Fortunately, we can reset the entire box model and specify a new one: `border-box`.
```css
* {
  box-sizing: border-box;
}
```
The code in the example above resets the box model to `border-box` for all HTML elements. This new box model avoids the dimensional issues that exist in the former box model you learned about.

In this box model, the height and width of the box will remain fixed. The border thickness and padding will be included inside of the box, which means the overall dimensions of the box do not change.

```html
<h1>Hello World</h1>
```
```css
* {
  box-sizing: border-box;
}

h1 {
  border: 1px solid black;
  height: 200px;
  width: 300px;
  padding: 10px;
}
```

In the example above, the height of the box would remain at 200 pixels and the width would remain at 300 pixels. The border thickness and padding would remain entirely inside of the box.

![border-box model](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/border-box.png)