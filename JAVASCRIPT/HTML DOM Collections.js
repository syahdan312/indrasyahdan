The HTMLCollection Object
The getElementsByTagName() method returns an HTMLCollection object.

An HTMLCollection object is an array-like list (collection) of HTML elements.

The following code selects all <p> elements in a document:

Example
const myCollection = document.getElementsByTagName("p");
The elements in the collection can be accessed by an index number.

To access the second <p> element you can write:

myCollection[1]