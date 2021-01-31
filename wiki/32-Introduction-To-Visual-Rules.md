In this lesson, you’ll learn the basic structure and syntax of CSS so that you can start styling web page elements.

## CSS Structure

To style an HTML element using CSS, you need to write a CSS declaration inside the body of a CSS selector.

```css
h1 {
  color: blue;
}
```

The example above selects the `<h1>` element. Inside of the selector’s body, we typed `color: blue`. This line is referred to as a CSS declaration. CSS declarations consist of a property and a *value*.

Property — the property you’d like to style of that element (i.e., size, color, etc.).

Value — the value of the property (i.e., 18px for size, blue for color, etc.).

In the example above, the property is `color` and the value is `blue`. The property and value are separated by a colon (`:`). A semicolon (`;`) should always be used at the end of a declaration.

Finally, the entire snippet of code in the example above is known as a CSS *rule* or rule set. A CSS rule consists of the selector (here, `h1`) and all declarations inside of the selector.