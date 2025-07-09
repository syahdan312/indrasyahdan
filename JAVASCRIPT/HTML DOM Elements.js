Finding HTML Elements
Often, with JavaScript, you want to manipulate HTML elements.

To do so, you have to find the elements first. There are several ways to do this:

Finding HTML elements by id
Finding HTML elements by tag name
Finding HTML elements by class name
Finding HTML elements by CSS selectors
Finding HTML elements by HTML object collections
Finding HTML Element by Id
The easiest way to find an HTML element in the DOM, is by using the element id.

This example finds the element with id="intro":

Example
const element = document.getElementById("intro");
If the element is found, the method will return the element as an object (in element).

If the element is not found, element will contain null.

Finding HTML Elements by Tag Name
This example finds all <p> elements:

Example
const element = document.getElementsByTagName("p");
This example finds the element with id="main", and then finds all <p> elements inside "main":

Example
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
