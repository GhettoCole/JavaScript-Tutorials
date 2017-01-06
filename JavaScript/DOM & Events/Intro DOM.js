/*
DOM - Document Object Model which is a standard object model and programming interface for HTML
JavaScript can be used to manipulate the DOM of the page dynamically to add, delete and modify elements

The DOM represent a document as a tree structure
The HTML elements become interrelated nodes in the tree and all those nodes share a relation of some sort
Nodes can have child nodes, and Nodes on the same tree level are siblings

<html> has  two children - <head> and <body>
<head> has one child <title> and one parent <html>
<title> has one parent <head> and no children

<body> has two children <h1> and <a> and one parent <html>

*/

/*
There is a predefined document object in JavaScript, which can be used to access all elements on the DOM
In other words, the document object is the owner(or root) of all objects in a webpage

If the user wants to access objects in a webpage, you start with accessing the document object(always)

*/

// For example - document.body.innerHTML = "Some text";

/*
As body is an element of the DOM, we access it using the document object and change the content of the innerHTML property

innerHTML - gets or sets the content of HTML elements
The innerHTML property can be used on almost all HTML element to change its content
*/
