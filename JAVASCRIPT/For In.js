The For In Loop
The JavaScript for in statement loops through the properties of an Object:

Syntax
for (key in object) {
  // code block to be executed
}
Example
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}