/*
The math object allows the programmer to perform mathematical operations/tasks with JavaScript

Property			Description

- E					Euler's constant
- LN2 				Natural log of the value 2
- LN10				Natural log of the value 10
- LOG2E   			The base 2 log of Euler's constant
- LOG10E 			The base 10 log of Euler's constant
- PI				Constant PI

*/

document.write("<br/>Math.PI = " + Math.PI);
document.write("<br/>Math.LN2 = " + Math.LN2);
document.write("<br/>Math.LN10 = " + Math.LN10);
document.write("<br/>Math.LOG10E = " + Math.LOG10E);
document.write("<br/>Math.LOG2E = " + Math.LOG2E);

// Math has no constructor, So there's no need to create a math object first.

/*
Math Object Methods used for calculations

Method 						Description

abs(x)						Returns the absolute value of x
acos(x)						Returns the arccosine value of x in radians
asin(x)						Returns the arcsine of x in radians
ceil(x)						Returns the  upward rounded integer of x
exp(x)						Returns the exponential value of E*
pow(x,y)					Returns the value of x to the power of y
random()					Returns a random number between 1 and 0
round(x)					Rounds to the nearest integer
sqrt(x)						Returns the square root of x
log(x)						Returns the natural logarithm(Base E) of x



*/

document.write("<br/> The square root of 64: " + Math.sqrt(64));
document.write("<br/> The natural logarithm of 25: " + Math.log(25));
document.write("<br/> Random number: " + Math.random());
document.write("<br/> Absolute value of 33 is : " + Math.abs(33));
document.write("<br/> The value of 10 to the power of 3: " + Math.pow(10,3));


// The math object
var n = prompt("Enter a number: ", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);
