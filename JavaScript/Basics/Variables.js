// Variables are containers for storing data and the value of a variable can change throughout the program 
// Use the var keyword to declare a variable

var given = "Programming is fun!"; // variable given is assigned to Programming is fun!
document.write(given, "<br/>");

// JavaScript is case-sensetive 
// The variables lastname and lastName are two different names
/*
In JavaScript, the equal sign (=) is an assignment operator rather than an equal sign

A variable can be declared without a value, for later use.
A variable declared without a value will have the value of undefined
*/

var name = "Given";
document.write(name, "<br/>"); // outputs name value of Given

// Every written "instruction" is a statement. JavaScript statements are separated by semicolons


/*
JavaScript variables are case-sensetive

Naming rules:
- Numbers are not allowed as the first characters
- The first character must be a letter, an underscore or a dollar sign and subsequent characters may be numbers and so on
- Variable names cannot contain mathematical or logical operators
- JavaScript names must not contain spaces
- Hyphens are not allowed in JavaScript, reserved for subtractions


*/

var x = 100;
document.write(X); // This will not result in any output, because of case sensetivity
document.write(x, "<br/>"); // outputs 100