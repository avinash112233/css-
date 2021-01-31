If you’ve ever used a formatted word processor, chances are that you probably also used a feature that allowed you change the font you were typing in. Font refers to the technical term typeface, or *font family*.

To change the typeface of text on your web page, you can use the `font-family` property.
```css
h1 {
  font-family: Garamond;
}
```

In the example above, the font family for all main heading elements has been set to `Garamond`.

When setting typefaces on a web page, keep the following points in mind:

1. The font specified in a stylesheet must be installed on a user’s computer in order for that font to display when a user visits the web page.
2. The default typeface for all HTML elements is `Times New Roman`. You may be familiar with this typeface if you have ever used a formatted word processor. If no `font-family` attribute is defined, the page will appear in `Times New Roman`.
3. It’s a good practice to limit the number of typefaces used on a web page to 2 or 3. This helps the page load faster in some cases and is usually a good design decision.
4. When the name of a typeface consists of more than one word, it’s a best practice to enclose the typeface’s name in quotes, like so:
```css
h1 {
  font-family: "Courier New";
}
```
