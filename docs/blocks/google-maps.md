---
description: Google Maps
---

# Google Maps

After Turning on Blocks from Grigora's Kit Dashboard.

We can use Google Maps Block in Site Editor/Blog/Page from Toggle Block Inserter.

Insert Google Maps from listed Blocks.

Once Google Maps is inserted, select the Google Maps.

After selecting Google Maps , Go to block settings, in block settings we see Geenral, Styles and Advanced of settings and we'll be exploring them one by one.

## General

**Map Mode** : Two Map Modes are available: Place and View.

**Location** : Location can also be entered in text box.

**Zoom** : Zoom allows us to zoom in Google maps.
- Minimum Value  1
- Maximum Value  25
- Default Value  14

**Map type** : Map type provides two views normal and Satellite.

**Language** : Maps Language is selected Here.

**Custom API Key** : Google Maps Block uses Grigora's API key and is managed regularly by the admins. You don't need to add any API key to make this map work. If you still want to change the key to your API key, you can edit the text box.

## Styles

**Height** : Height of the google maps can be changed using range slider.
- Minimum Value  0
- Maximum Value  1024
- Default Value  500

**Width** : Width of the google maps can be changed using range slider.
- Minimum Value  0
- Maximum Value  1920
- Default Value  0

**Padding** : Padding can be applied to Google maps, by clicking on unlink padding can be applied to specific sides , only numbers can be entered and has pixel as unit.

**Margin** : Margin can be applied to Google maps, by clicking on unlink margin can be applied to specific sides, only numbers can be entered and has pixel as unit. 

### On Scroll Animations

**Animation** : On Scroll Animations can be set here from listed animations with Delay(using text box) and Transition Time(Using range slider)
- Minimum Value 0 sec
- Maximum Value 5 sec
- Default Value 1 sec

<!-- ### Motion Animations

#### On Mouse Movement 

**2D Movement** : To apply 2D on mouse movement click on edit icon(Here Google map will move in X and Y axis).
- **Direction** : Here two directions can be selected Same or Opposite.
- **Displacement**: In displacement we can set Google maps movement using range slider.
    - Minimum value is 0. 
    - Maximum value is 100.
    - Default value is 35.

**3D Movement** : To apply 3D on mouse movement click on edit icon(Here Google map will move in X, Y and Z axis).
- **Direction** : Here two directions can be selected Same or Opposite.
- **Displacement**: In displacement we can set Google map movement using range slider.
    - Minimum value is 0. 
    - Maximum value is 100.
    - Default value is 20.

#### On Scroll Movement 

**Vertical Movement**  : To apply vertical on scroll movement click on edit icon.
- **From Viewport** :  -->

### Sticky 
*(The Sticky effect only applies on the preview or the live page, not in the Block Editor.)*

**Sticky** :  Here we get three options : None, Top and Bottom.

**Offset** : Here Google maps offset position is defined using text input. Or else parent container can also be specified to target the custom closest parent.

**Keep inside Column** : By toggling on Keep inside Column Google map will stay inside its parent block.

*(Sticky effect can be disabled on Desktop, Tablet and Mobile by toggling on disable button)*

### Responsive 
*(The visiblity will only work in the preview or the live page, and not in Block Editor)*

By switching on hide setting, Google map can be made invisible on desktop, tablet and mobile devices, respectively.

### Position

**Static** : By default, every element has a static Position, therefore the element will follow the usual page flow. If a left/right/top/bottom/z-index is set, the element will have no impact.

**Relative** : An element specified with the position attribute relative is positioned in relation to its default position. A relatively-positioned element will be moved from its default position if the top, right, bottom, left and z-index properties are changed.

**Absolute** : Absolute positions an element relative to its parent, affecting the layout around it.. The top, right, bottom, left, and z index properties provide offsets from the contained block's boundaries.

**Fixed** : When an element has position: fixed;, it is placed relative to the viewport, meaning it always remains in the same spot regardless of how far the page is scrolled.The element's position can be adjusted using the top, right, bottom, left, and z index attributes.

**Sticky** : A mix of fixed and relative position is sticky positioning. When the element reaches a predetermined threshold, it is considered as fixed positioned; before to that, it is treated as relative positioned. 