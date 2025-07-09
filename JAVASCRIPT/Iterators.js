The Iterator Object
An Iterator is an object that provides a standard way to access elements sequentially.

An Iterator must adheres to the Iterator Protocol: It must have a next() method.

The next() Method
The next() method returns an object with two properties:

The value property holds the next value in the iteration sequence.
The done property returns false if there are more elements to iterate over, otherwise it returns true.
The For Of Loop
The JavaScript for..of statement loops through the elements of an iterable object.

Syntax
for (variable of iterable) {
  // code block to be executed
}