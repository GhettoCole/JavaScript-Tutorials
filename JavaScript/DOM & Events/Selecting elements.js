/*
All HTML elements are Objects, and all objects have properties and methods

The document object has methods that allow a programmer to select the desired HTML element

Three most commonly used methods for selecting HTML elements

document.getElementById(id) -- finds element by id
document.getElementsByClassName(name) -- finds elements by class name
document.getElementsByTagName(name) -- finds elements by tag name



Example using the getElementById

var elem = document.getElementById("demo");
elem.innerHTML = "GhettoCole";


Selecting Elements

The getElementsByClassName() method finds all elements by class name and returns them as an array

Example using the getElementsByClassName

var arr = document.getElementsByClassName("demo");
// accessing the second element
arr[1] = "Programming is fun";

similarly the getElementsByTagName method returns all elements of the specified tag name as an array


*/

/*
Each element in the DOM has a set of properties and methods that provide information about thier relationships in the DOM

element.childNodes - returns an array of an element's child nodes
element.firstChild - returns the first child node of an element
element.lastChild - returns the last child node of an element
element.hasChildNodes - returns true if an element has any child nodes, otherwise fals
element.nextSibling - returns the next node at the same tree level
element.previousSibling - returns the last node at the same tree level
element.parentNode - returns the parent node of an element

*/

var a = document.getElementById("demo");
var arr = a.childNodes;
for (var x = 0; x < arr.length; x++;){
	arr[x].innerHTML = "I really enjoy Programming!\nPython, HTML, JavaScript, CSS, PHP and C++ are phenomenal";
}
