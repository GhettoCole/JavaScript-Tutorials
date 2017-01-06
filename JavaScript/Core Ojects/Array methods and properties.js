// Array Properties and Methods

/*
JavaScript arrays have useful built-in properties and methods

An Array's length property returns the number of its elements

*/


var courses = ["HTML","CSS",'JavaScript'];
document.write("The length of my array is: " + courses.length); // Outputs 3


// JavaScript's concat() method allows you to concatenate and join arrays to create a new one

var c1 = ["HTML","CSS","JavaScript"];
var c2 = ["C++","C","C#","Java"];
var studies = c1.concat(c2);

document.write("<br/> I am learning these programming languages: " + studies);

var skill = ["Coding"," Debugging"," Tweaking code"];
var lack = ["Concentration"," Motivation"," Goals"];

document.write("<br> I have the skills: " + skill[0] + ',' + skill[1] + ' and' + skill[2]);

document.write("<br> My weaknesses: " + lack);
