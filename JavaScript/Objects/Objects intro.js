// JavaScript variables are containers for data values
// Objects are also variables, but they can contain many values
// They are written as name:value pairs with name and values separated by colons

var person = {
  name :"Given Lepita",
  age : 17,
  favColor : "Blue",
  height : 102
};

// You can access object properties in two ways
/*
objectName.propertyName

or

objectName["propertyName"]

*/

var x = person.age;
var y = person["name"];
document.write("I am " + x + " years old");
document.write("<br/>")
document.write("My name is " + y);

// JavaScript's built-length property is used to count the number of characters in a string or property

var course = {
  name : "JavaScript",
  lessons : 42,
}

document.write("<br/>" + "The length of my string is: " + course.name.length);
// Object Methods
/*
An Object Method is a property that contains a function definition
Syntax

objectName.methodName()

much like document.write(); outputs data
The function write() is actually a method of the document object

Methods are functions that are stored as object properties

*/
document.write("<br/>","JavaScript, CSS, HTML are phenomenal");
