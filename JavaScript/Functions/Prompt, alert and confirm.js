/*
Alert Box
- An alert box is used when you want  to ensure that information
gets through the user.

The alert function takes in a single parameter, which is text displayed in the pop up box

*/

/*
A prompt box - used for user input before  entering the page

The prompt() method takes in two parameters:
- The label, which you want to display in the text box
- The default string, to display in the text box (optional)
*/

var user = prompt("Please enter your name: ");
alert(user);
/*
A Confirm box is used to have a user verify and accept something.
*/

var result = confirm("Do you want to leave this page? ");
if (result == true){
	alert("Thanks for visiting!");
}
else{
	alert("Thanks for staying with us!");
}
