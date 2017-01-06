// The break statement - jumps out of a loop and continues executing the code after a loop

for (i = 0; i <= 15; i++){
	if(i == 10){
		break;
	}
	document.write(i + "<br/>");
}

// The continue statement - breaks only one iteration in the loop, and continues with the next iteration

for(a = 0; a <= 20; a++){
	if (a == 10){
		continue; // The continue statement skips 10 becuase it skips that iteration of the loop
	}
	document.write(a + "<br/>");
}