The if Statement
Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

Syntax
if (condition) {
  //  block of code to be executed if the condition is true
}
Note that if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.

Example
Make a "Good day" greeting if the hour is less than 18:00:

if (hour < 18) {
  greeting = "Good day";
}