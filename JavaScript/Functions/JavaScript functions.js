/* 
JavaScript function is a block of code designed to perform a particular task
Function advantages:
Code reuse - Define a code once, and use it many times 

A JavaScript is executed when something invokes or calls
To define a JavaScript function, use the function keyword followed by the name
followed by a set of parentheses

Syntax

function name(){
	// code to be executed
} 

*/

function ghetto(){
	alert('GhettoCole is coding');
}


// Calling functions

// JavaScript allows you to call a function has many times as you want
ghetto();
document.write("<br/>");
/* Function parameters - are the names listed in a function's definition

Syntax

functionName(param1, param2, param3){
	// some code block
}

Parameters should be given names.
Which are separated by commas within parentheses

*/

function sayHello(name){
	alert("Hello " + name);
}

sayHello("GhettoCole");
document.write("<br/>");
// Function arguments are the real values passed to and recieved by the function

// Can pass in different parameter values in to a single function

function greetPerson(surname){
	alert("Well hello " + surname);
}

greetPerson("Burdash");
document.write("<br/>");
greetPerson("Validae");
document.write("<br/>");
greetPerson("VOENA");
document.write("<br/>");



/* Multiple parameters - are created by comma-separated values
Syntax

function myFunc(x, y){
	// code block
}

*/



/*
The return statement - used to return a value in a function

When JavaScript reaches a return statement, the function stops being executed
*/ 

function maths(b,a){
	document.write(b * a);
}

maths(10,10);
document.write("<br/>");

function addNumbers(a,b){
	var c = a * b;
	return c;
}
addNumbers(30,3);


function informational(name, age, place){
	document.write(name + "is " + age + " years old and lives at" + place);
}

informational("Given ", 17, " New York");

