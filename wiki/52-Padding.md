The space between the contents of a box and the borders of a box is known as padding. Padding is like the space between a picture and the frame surrounding it. In CSS, you can modify this space with the `padding` property.
```css
p.content-header {
  border: 3px solid coral;
  padding: 10px;
}
```

The code in this example puts 10 pixels of space between the content of the paragraph (the text) and the borders, on all four sides.

The `padding` property is often used to expand the background color and make content look less cramped.

If you want to be more specific about the amount of padding on each side of a box’s content, you can use the following properties:

1. `padding-top`
2. `padding-right`
3. `padding-bottom`
4. `padding-left`

Each property affects the padding on only one side of the box’s content, giving you more flexibility in customization.

```css
p.content-header {
  border: 3px solid fuschia;
  padding-bottom: 10px;
}
```

In the example above, only the bottom side of the paragraph’s content will have a `padding` of 10 pixels.

Another implementation of the `padding` property lets you specify exactly how much padding there should be on each side of the content in a single declaration.

```css
p.content-header {
  border: 3px solid grey;
  padding: 6px 11px 4px 9px;
}
```

In the example above, the four values `6px 11px 4px 9px` correspond to the amount of padding in a clockwise rotation. In order, it specifies the amount of padding on the top (6 pixels), right (11 pixels), bottom (4 pixels), and left (9 pixels) sides of the content.

When using this implementation of the `padding` property, we must specify a padding value for all four sides of the element.

However, if the top and bottom values for padding will equal each other, and the left and right values for padding will also equal each other, you can use the following shortcut:
```css
p.content-header {
  padding: 5px 10px;
}
```

The first value, `5px`, sets the padding value for the top and bottom sides of the content. The second value, `10px`, sets the padding value for the left and right sides of the content.