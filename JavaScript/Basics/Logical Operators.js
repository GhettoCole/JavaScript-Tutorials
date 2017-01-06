// Logical/ Boolean Operators evaluate the expression and return true or false

/*
AND 	OR 		NOT
&&		||		!

- The && Returns true, if both operands are true
- The || Returns true, if one of the operands is true
- The ! Returns true, if the operand is false, and false, if the operand is true
*/


// Conditional (Ternary) Operator
/* variable = (condition) ? value1 : value2
*/

var age = 17;
var isAdult = (age < 18) ? "Too young": "Old enough";
/* If the variable age is a value below 18, the value of the variable isAdult will be Too young
Otherwise the value of isAdult will be Old enough */

var name = "Given";
var checkHim = (name === "Given") ? "Authentic" : "Unauthorised";
