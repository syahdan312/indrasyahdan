The HTML DOM NodeList Object
A NodeList object is a list (collection) of nodes extracted from a document.

A NodeList object is almost the same as an HTMLCollection object.

Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().

All browsers return a NodeList object for the property childNodes. 

Most browsers return a NodeList object for the method querySelectorAll().

The following code selects all <p> nodes in a document:

Example
const myNodeList = document.querySelectorAll("p");
The elements in the NodeList can be accessed by an index number.

To access the second <p> node you can write:

myNodeList[1]