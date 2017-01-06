// Declaring an array by telling it how many values it will store and then add the values later

var courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JavaScript";
courses[3] = "PHP";
courses[4] = "JQuery";

// An array is a special type of object and uses numbers to access its elements
// And an object uses names to access its members

/*
JavaScript arrays are dynamic, as you can declare an array and not pass in any arguments
With the Array() constructor
*/

var studies = new Array();
studies[0] = "Computer science";
studies[1] = "Actuaral science";
studies[2] = "Astro-physics";

// Array Literal
// for simplicity, readability and execution speed, use an array literal syntax

var subjects = [" HTML"," JQuery"," JavaScript"," CSS"," C++"," C"," C#"," Java"," Perl"," Python"," SQL"," PHP"," Ruby"," Swift"," VB.NET"];
document.write("Programming languages I know " + subjects);

for (var i = 0; i < studies.length; i++) {
  document.write("</br>" + i + " --> " +studies[i]);
}
