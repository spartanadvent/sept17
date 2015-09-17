#Gamestore Inventory JS App -
#### v.003

##User Interface Design Reference
<http://geekwise.github.io/geekwise.js.edc.sept09/user_interface_design_reference.html>


##Todo
* <s>Add touchstart event for mobile tap</s>
* <s>Change the load state for the `Add Item` to have the background state.</s>
* <s>Remove all logic from html</s>
* <s>mouse out on list to hide minus</s>
* <s>touchstart>tap>near minus>hide minus</s>
* style>readable background>Dark/light text>oam display>light/dark text.
* <s>Check if game is already in the list</s>
* touchstart > touchswipe
* Borders, change, colors, css
* <s>converting functions to new and normal layout</s>

![sept16 whiteboard](http://i.imgur.com/dyyejPLm.jpg)
![sept16 whiteboard](http://i.imgur.com/0R0lqTVm.jpg)

##Future Features To Add
* Feature Name: Swipe to delete
	* find native JS via MDN
	* <https://developer.mozilla.org/en-US/docs/Web/API/Touch_events>

> find a function or native JS example
> to allow a swipe to delete the inventory item.

#Bugs
* multi-popups on swipe 
* when space, it adds <li>
* imput box, cut off on mobile size device

#Fixed Bugs
* trim white space For "ADDNEWGAME" (--SORRY--)c(SORRY)
* prevent empty & null values for "ADD GAME" 
* adjusted the imput box for mobile so would not be cut off


##Reference Code For Event Listner
```
element.addEventListener(<event-name>, <callback>, <use-capture>);
```
# sept13
