// Associative Arrays

// Named array syntax

var person = []; // empty array
person["name"] = "Given";
person["age"] = 17;

document.write('I am ' + person["age"] + " years old"); // outputs 17
document.write("<br/>" + 'Ohh I forgot say my name is ' + person["name"]); // outputs Given

/*
Person is treated as an object instead of being an array
The named indexes become properties of the person object

As the person array is treated as an object, the standard array methods will produce incorrect results
-- person.length will produce 0
*/

// JavaScipt does not support arrays with named indexes
