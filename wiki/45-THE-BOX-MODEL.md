## Introduction to the Box Model

Browsers load HTML elements with default position values. This often leads to an unexpected and unwanted user experience, while limiting the views you can create. In this lesson you will learn about the *box model*, an important concept to understand how elements are positioned and displayed on a website.

If you have used HTML and CSS, you have unknowingly seen aspects of the box model. For example, if you have set the background color of an element, you may have noticed that the color was applied not only to the area directly behind the element, but also to the area to the right of the element. Also, if you have aligned text, you know it is aligned relative to something. What is that something?

All elements on a web page are interpreted by the browser as “living” inside of a box. This is what is meant by the box model.

For example, when you change the background color of an element, you change the background color of its entire box.

In this lesson, you’ll learn about the following aspects of the box model:

1. The dimensions of an element’s box.
2. The borders of an element’s box.
3. The paddings of an element’s box.
4. The margins of an element’s box.

Let’s begin!

**Note** : Take some time to edit the code in **The Box Model** directory which is already existed in this repository. See if you can figure out how these following properties impact an element’s display:

* height
* width
* padding
* border
* margin
* overflow

## The Box Model

The box model comprises the set of properties which define parts of an element that take up space on a web page. The model includes the content area’s size (width and height) and the element’s padding, border, and margin. The properties include:

1. Width and height — specifies the width and height of the content area.
2. Padding — specifies the amount of space between the content area and the border.
3. Border — specifies the thickness and style of the border surrounding the content area and padding.
4. Margin — specifies the amount of space between the border and the outside edge of the element.
The image to the bottom is a visual representation of the box model.

![box model](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/css/boxModel.svg)

Open the `box model image` in a new tab so you can reference the box model as you move through the lesson.


