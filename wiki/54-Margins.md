So far you’ve learned about the following components of the box model: content, borders, and padding. The fourth and final component of the box model is margin.

Margin refers to the space directly outside of the box. The `margin` property is used to specify the size of this space.
```css
p {
  border: 1px solid aquamarine;
  margin: 20px;
}
```

The code in the example above will place 20 pixels of space on the outside of the paragraph’s box on all four sides. This means that other HTML elements on the page cannot come within 20 pixels of the paragraph’s border.

If you want to be even more specific about the amount of margin on each side of a box, you can use the following properties:

1. `margin-top`
2. `margin-right`
3. `margin-bottom`
4. `margin-left`

Each property affects the margin on only one side of the box, providing more flexibility in customization.

```css
p {
  border: 3px solid DarkSlateGrey;
  margin-right: 15px;
}
```

In the example above, only the right side of the paragraph’s box will have a margin of 15 pixels. It’s common to see margin values used for a specific side of an element.

What if you don’t want equal margins on all four sides of the box?

A similar implementation of the margin property is used to specify exactly how much margin there should be on each side of the box in a single declaration.

```css
p {
  margin: 6px 10px 5px 12px;
}
```

In the example above, the four values `6px 10px 5px 12px` refer to the amount of margin around the box in a clockwise rotation. In order, it specifies the amount of margin on the top (6 pixels), right (10 pixels), bottom (5 pixels), and left (12 pixels) sides of the box.

When using this implementation of the margin property, the margin value must be specified for all four sides of the box.

Just like the padding shortcut, when you’re certain that the top and bottom values for margin will equal each other, and that the left and right values for margin will also equal each other, you can use the following shortcut:
```css
p {
  margin: 6px 12px;
}
```
The first value, `6px`, sets a margin value for the top and bottom of the box. The second value, `12px`, sets a margin value for the left and right sides of the box.