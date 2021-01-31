In addition to chaining selectors to select elements, CSS also supports selecting elements that are nested within other HTML elements. For instance, consider the following HTML:

```html
<ul class='main-list'>
  <li> ... </li>
  <li> ... </li>
  <li> ... </li>
</ul>
```

The nested `<li>` elements are selected with the following CSS:

```css
.main-list li {

}
```

In the example above, `.main-list` selects the `.main-list` element (the unordered list element). The nested `<li>` are selected by adding `li` to the selector, separated by a space, resulting in `.main-list li` as the final selector (note the space in the selector).

Selecting elements in this way can make our selectors even more specific by making sure they appear in the context we expect.