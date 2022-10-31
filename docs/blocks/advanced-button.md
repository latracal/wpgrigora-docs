---
description: Advanced Button
---
# Advanced Button

### Examples 

![Types of Button](/img/tutorial/ButtonTypes.webp)


After Turning on Blocks from Grigora's Kit Dashboard.

We can use Advanced Button Block in Site Editor/Blog/Page from Toggle Block Inserter.

Insert Advanced Button from listed Blocks.

Once Button is inserted, select the Advanced Button.

After selecting Advanced Button , Go to block settings, in block settings we see Geenral, Styles and Advanced of settings and we'll be exploring them one by one.

## General 

**Size**: Size changes buttons text size by Dragging Slider Back and Forth.
- Minimum Value  0px 
- Maximum Value  100px 
- Default Value  16px 

**Padding** : Using padding we can add space around buttons text. Padding can be added mixed or individually using text input. Value entered uses pixels as its unit.

**Icon** : Firstly select icon by clicking on Select Icon.
- **Size** : Size of the icon can be changed using Text input. Value entered uses pixels as its unit.
- **Positon** : Position of the icon can be changed from left to right.
- **Icon Padding** : Using Icon Padding we can add space around icon. Padding can be added mixed or individually using text input. Value entered uses pixels as its unit.
- **Icon Color** : After Toggling on icon color button, color can be applied to the icon normaly and On-hover using Color Palatte and Color Picker. 

## Styles

### Color 
*(Colors can be applied normal and On-hover)*

**Text**: Text changes color of text in button. We get two options to choose colors i.e. ColorPicker and Color Palette.   

**Background**: Background changes Background color of button and we get two options to choose colors i.e. ColorPicker and Color Palette.  

**Gradient**: Gradient background can be added to the background by toggling on gradient button. Multiple control points can be added and also we can set its type i.e. linear(angle can also be defined) or radial.

### Typography

**Size** : Size changes button font size by Dragging Slider Back and Forth.
- Minimum Value  0px 
- Maximum Value  100px 
- Default Value  16px 

**Line Height** : Line Height adds the space between lines by Dragging Slider Back and Forth.
- Minimum Value 10px 
- Maximum Value 300px 
- Default Value 10px 

**Letter Spacing** : Letter Spacing adds the space between letters by Dragging Slider Back and Forth.  
- Minimum Value 0px 
- Maximum Value 150px
- Default Value 0px 

**Word Spacing** : Word Spacing adds the space between words by Dragging Slider Back and Forth.
- Minimum Value 0px 
- Maximum Value 150px
- Default Value 0px 

**Transform** :  Transform font to Uppercase (All Letters Capital), Lowercase (All letters small) and Capitalize (First letter of word is capital).

**Style** : Text can be styled in a variety of ways here.

**Decoration** : Text decoration applies decoration to text like Overline(Adds line above text), Line Through(Adds line through text), Underline(Adds line Below text), Underline OverLine(Adds line Above and Below text).

**Weight** : Weight adds text weights ranging from 100 to 900.

**Font Family** : Google fonts can be applied to buttons text

*(Note: We can reset the modified value to default by clicking reset button.)*

## Advanced

### Animation
*(Works on-hover)*

**Attention Seekers** : Animations can be set here from listed animations with transition time using range slider.
- Minimum Value 0 sec
- Maximum Value 5 sec
- Default Value 1 sec

### On Scroll Animations

**Animation** : Animations can be set here from listed animations with Delay(using text box) and Transition Time(Using range slider)
- Minimum Value 0 sec
- Maximum Value 5 sec
- Default Value 1 sec

### Border
*(Border can be applied normal and On-hover)*

**Width** :Adds a border to button and it can be applied in three different styles: solid, dashed, and dotted where width of the border can be modified. By clicking on Unlink sides we can apply border to any particular side. The colour of the border can also be changed using the colour picker.
- Minimum value is 0px. 
- Maximum value is 100px.
- Default value is 0px. 

**Radius** : Under Radius we can change border radius. By clicking on Unlink sides we can change radius of any particular side. 
- Minimum value is 0px. 
- Maximum value is 100px.
- Default value is 4px.

### Box Shadow 
*(Box Shadow can be applied normal and On-hover)*

Box Shadow casts a shadow across the Button.

- **Color** : Box shadow color can be changed using the Colorpicker or Color Palette.

- **Blur** : Box shadow can be blurred with Blur effect. Value entered uses pixels as its unit.

- **Horizontal** : Box shadow can be applied Horizontally. Value entered uses pixels as its unit.

- **Vertical** : Box shadow can be applied  Vertically. Value entered uses pixels as its unit.

- **Spread** : Box Shadow can be spreaded. Value entered uses pixels as its unit.

### Transform
*(Transform can be applied normal and On-hover)*

**Perspective** : 

**Rotate** : Button can be rotated in the x, y, and z axis.

**Skew** : Skew tilts the button in x axis and y axis.

**Offset** : Offset moves the button in the x and y axis.

**Scale** : Button's scale can be increased or decreased using Scale.

### Text Shadow

**Color** :In text shadow we can change Text Color using Color Picker or Color Palette.

**Blur** : Text shadow can be blurred with Blur effect. Value entered uses pixels as its unit.

**Horizontal** : Text shadow can be applied Horizontally. Value entered uses pixels as its unit.

**Vertical** : Text shadow can be applied Vertically. Value entered uses pixels as its unit.

<!-- ### Motion Animations

#### On Mouse Movement 

**2D Movement** : To apply 2D on mouse movement click on edit icon(Here Button will move in X and Y axis).
- **Direction** : Here two directions can be selected Same or Opposite.
- **Displacement**: In displacement we can set buttons movement using range slider.
    - Minimum value is 0. 
    - Maximum value is 100.
    - Default value is 35.

**3D Movement** : To apply 3D on mouse movement click on edit icon(Here Button will move in X, Y and Z axis).
- **Direction** : Here two directions can be selected Same or Opposite.
- **Displacement**: In displacement we can set buttons movement using range slider.
    - Minimum value is 0. 
    - Maximum value is 100.
    - Default value is 20.

#### On Scroll Movement 

**Vertical Movement**  : To apply vertical on scroll movement click on edit icon.
- **From Viewport** :  -->

### Sticky 
*(The Sticky effect only applies on the preview or the live page, not in the Block Editor.)*

**Sticky** :  Here we get three options : None, Top and Bottom.

**Offset** : Here buttons offset position is defined using text input. Or else parent container can also be specified to target the custom closest parent.

**Keep inside Column** : By toggling on Keep inside Column button will stay inside its parent block.

*(Sticky effect can be disabled on Desktop, Tablet and Mobile by toggling on disable button)*

### Responsive 
*(The visiblity will only work in the preview or the live page, and not in Block Editor)*

By switching on hide setting, buttons can be made invisible on desktop, tablet and mobile devices, respectively.

### Position

**Static** : By default, every element has a static Position, therefore the element will follow the usual page flow. If a left/right/top/bottom/z-index is set, the element will have no impact.

**Relative** : An element specified with the position attribute relative is positioned in relation to its default position. A relatively-positioned element will be moved from its default position if the top, right, bottom, left and z-index properties are changed.

**Absolute** : Absolute positions an element relative to its parent, affecting the layout around it.. The top, right, bottom, left, and z index properties provide offsets from the contained block's boundaries.

**Fixed** : When an element has position: fixed;, it is placed relative to the viewport, meaning it always remains in the same spot regardless of how far the page is scrolled.The element's position can be adjusted using the top, right, bottom, left, and z index attributes.

**Sticky** : A mix of fixed and relative position is sticky positioning. When the element reaches a predetermined threshold, it is considered as fixed positioned; before to that, it is treated as relative positioned. 