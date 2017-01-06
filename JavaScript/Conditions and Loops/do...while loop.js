// Do...while loops - is a varient of the while loop
/*
This loop will execute the code block once, before checking if the condition is true
and then it will repeat the loop as long as the condition is true

Syntax

do {
	code block
}
while(condition);

*/

var i = 20;
do {
document.write(i + "<br/>");
	i++;
}
while(i <= 25); // The loop will be executed at once even if the condition is false
// Because the code block is executed before the condition is tested 