// Arrays - multiple values in a single variable

var course1 = "HTML";
var course2 = "CSS";
var course3 = "JavaScript";

// An array solution if, we had multiple courses

var courses = new Array("HTML","CSS","JavaScript","C++","C","C#","Python","PHP","SQL","Java");

/*
Accessing an array
You can access an element in an array by reffering the index number written in square brackets
*/

var course = courses[0]; // HTML
courses[1] = "Perl"; // Changes the second element

// Attempting to access an index outside of the array, returns undefined
document.write("I love programming with " + courses);

for (var i = 0; i < courses.length; i++) {
  document.write("</br>" + courses[i]) // iterating through an array
}
