JavaScript Array forEach()
The forEach() method calls a function (a callback function) once for each array element.

Example
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}