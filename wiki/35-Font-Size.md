Changing the typeface isn’t the only way to customize text. Often times, different sections of a web page are highlighted by modifying the *font size*.

To change the size of text on your web page, you can use the `font-size` property.
```css
p {
  font-size: 18px;
}
```
In the example above, the `font-size` of all paragraphs was set to `18px`. `px` means pixels and is a way to measure font size.

## The differences between rem, em, px, & vw/vh units

This article should hopefully help in explaining the difference between the various size units.

* **rem** :
rem units are relational to the font-size value of the HTML tag. For example, if the font size of the HTML tag is 16px (that is the default size for an html document), then 1rem unit is equal to 16px. That makes .5rem=8px, 2rem=32px, etc.

* **em** :
em units are similar to rem units, but whereas a rem unit always references the HTML tag, an em unit is relational only to it's nearest defined parent element. For example, if the div wrapper for a callout is set to font-size:20px, then any child element set to 1em would be the equivalent of 20px, .5em=10px, 2em=40px, etc.

* **vw & vh** :
the vw (view-width) and vh (view-height) units are relational to the **`viewport`**(***The viewport is the user's visible area of a web page. The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.***) size, where 100vw or vh is 100% of the viewport's width/height. For example, if a viewport is 1600px wide, and you specify something as being 2vw, that will be the equivalent of 2% of the viewport width, or 32px.

* **px** :
Pixels are defined as a single point in a graphic image, and are often tied to viewport resolution. If a viewport is 1600x900, that typically means that there are 1600px pixel columns & 900 pixel rows, with a pixel in each cell. This definition is maybe overly simple when factoring in dpi or pixel density, but can stand as reference for the most part.
