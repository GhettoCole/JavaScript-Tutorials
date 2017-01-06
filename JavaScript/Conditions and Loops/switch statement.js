/* 
The is used to perform different actions based off on different conditions

Syntax
switch(expression){
	case n1:
	 statements
	 break;
	case n2:
	 statements
	 break;
	default:
	 statements
}
The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associate block of code is executed.

*/

var day = 2;
switch (day){
	case 1: // can have as many case statements as needed
	 document.write("Monday");
	 break;
	case 2:
	 document.write("Tuesday","<br>");
	 break;
	case 3:
	 document.write("Wednesday");
	 break;
	default:
	 document.write("Another day");
} // Outputs "Tuesday"

// The break keyword - it breaks out of a switch block if a condition is met

// The default keyword - specifies the code to run if there is no case match

var color = "yellow";
switch(color){
	case "blue":
	document.write("This is blue");
	break;
	case "green":
	document.write("This is green");
	break;
	case "orange":
	document.write("This is orange");
	break;
	case "red":
	document.write("This is red");
	break;

	default:
	document.write("Color no found");
}