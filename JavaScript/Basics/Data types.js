/*
Data Types - types of values a program can work with.

JavaScript does not define different types of numbers like, integers, floats, long and so on.
JavaScript numbers can be written with and without decimals
JavaScript numbers are always stored a double precision floating point numbers

*/

var num = 50; // integer
var price = 50.87; // floating-point number

/*

Strings - must be written within quotes, quotes inside a string must be handled
The back slash(\) escape character turns special characters into string characters

Escape characters:
\' - single quote
\" - double quote
\\ backslash
\n - newline
\r - carriage return
\t - tab
\b - backspace
\f - form feed

*/
var programmer = "Hello \'I am a JavaScript Programmer.\'";
document.write(programmer, "<br/>");

/*
Booleans - can have either one of two values, true or false

The boolean value of 0, null, undefined, empty string is false
Everything else with a "real" value is true
*/

var isActive = true;
var isHoliday = false;
