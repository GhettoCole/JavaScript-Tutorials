// The date objects

/*
The setInterval() method calls a function or evaluates an expression at specified intervals(in milliseconds)
It will continue calling the function until the clearInterval() method is called or the window is closed


*/

function myAlert(){
	alert("I'm addicted to programming!");
}
// The setInterval method calls the function myAlert every 30 seconds
// setInterval(myAlert, 30000); // 30 seconds
// Write the name of the function when without the parentheses when passing it into the setInterval() method


/*
The Date Object enables the programmer to work with dates
Consisting of a year, a month, a day, an hour, a minute, a second and milliseconds

Using the new Date(), you can create a new date object with the current date and time
*/

var d = new Date(); // d stores the current date and time
document.write(d) //  --- writes the current date and time and day
// The other ways to initialize dates allow for the creation of new date objects from the specified date and time

// new Date(milliseconds)
// new Date(dateString)
// new Date(year, month, day, hours, seconds, milliseconds)

/*
JavaScript dates are calculated in milliseconds from 01 January, 1970 00:00:00 Universal Time (UTC)
One day consists of about 86, 400, 000 milliseconds
*/

var d1 = new Date(86400000);
var d2 = new Date("November 24, 2016 10:51:00");
var d3 = new Date(88,5,11,11,42,0,0); // Sat Jun 11 1988 11:42:00



/*
JavaScript counts months from 0 to 11, January being 0 and December being 11

Date objects are static, rather than dynamic, The computer time is ticking but the date objects don't change, once created
*/


// Date Methods

/*
Method 					Description

- getFullYear()			gets the year
- getMonth()			gets the month
- getDate() 			gets the day of the month
- getDay()				gets the day of the week
- getHours() 			gets the hour
- getMinutes() 			gets the minutes
- getSeconds()			gets the seconds
- getMilliseconds()		gets the milliseconds

*/

var day1 = new Date();
var hours = day1.getHours();
// Hours is equal to the current hour


// A program that prints the current time to the browser every 3 second

function printTime(){
	var d = new Date();
	var hours = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();
	document.body.innerHTML = hours + ":" + mins + ":" + secs;
}
setInterval(printTime, 1000) // for every 1 sec

/*
The innerHTML property sets or retunrs the HTML content of an element
In this case we are changing the HTML content of our document's body
This overwrites the content every 1 second, instead of printing it repeatedly to the screen
*/
