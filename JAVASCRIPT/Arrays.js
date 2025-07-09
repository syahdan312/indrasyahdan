const cars = ["Saab", "Volvo", "BMW"];
An Array is an object type designed for storing data collections.

Key characteristics of JavaScript arrays are:

Elements: An array is a list of values, known as elements.

Ordered: Array elements are ordered based on their index.

Zero indexed: The first element is at index 0, the second at index 1, and so on.

Dynamic size: Arrays can grow or shrink as elements are added or removed.

Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

Why Use Arrays?
If you have a list of items (a list of car names, for example), storing the names in single variables could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.

Creating an Array
Using an array literal is the easiest way to create a JavaScript Array.

Syntax:

const array_name = [item1, item2, ...];      
Note
It is a common practice to declare arrays with the const keyword.

Learn more about const with arrays in the chapter: JS Array Const.

Example
const cars = ["Saab", "Volvo", "BMW"];