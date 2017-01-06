// Loops can execute a block of code a number of times
// The for loop is commonly used to create a loop

/*
for (statement1; statement2; statement3){
	code block to be executed
}

Statement1 - is executed before the loop(code block ) start
Statement2 - defines the condition running the loop
Statement3 - is executed each time after the loop has been executed

*/
for(i=1; i<=5 ;i++){
	document.write(i + "<br/>");
}

// Statement one is option and can be ommitted if values are set before the loop starts
var a = 2
for(; a<=20; a++){
	document.write(a + "<br/>");
}

// You can initiate more than one value in statement 1, using commas to separate them.

for (i=1, text=""; i<=5; i++){
	text = i;
	document.write(i + "<br>")
}

// If statement2 returns true, the loop will start over again
// Statement 2 is optional
