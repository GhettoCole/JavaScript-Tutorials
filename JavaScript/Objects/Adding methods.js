// Methods - functions that are stored as object properties

/*
Use the following syntax to create an object method

methodName : function(){
  //  code lines
}

Access an object method using the following syntax

objectName.methodName()

*/


/*
A method is a function belonging to an object. It can be referrenced using *this* keyword

The *this* keyword is used as a referrence to the current object, Meaning that you can access the object properties using and methods using it

Defining methods is done inside the constructor function
*/

function person(name, age){
  this.name = name;
  this.age = age;
  this.changeName = function (name)
  {
    this.name = name;
  }
}

var p = new person("GhettoCole",21);
p.changeName("Thapelo"); // Now p.name equals to Thapelo

// The changeName method changes the object's name property to its argument

// Methods - can also the define the function outside of the constructor function and associate it with the object

function person1(name, age){
  this.name = name;
  this.age = age;
  this.yearOfBirth = bornYear; // assigned the object's yearOfBirth to the bornYear function
  // The this keyword is used to access the age property of the object
}
function bornYear(){ // Not necessary to write the function's parentheses when assigning it to an object
  return 2017 - this.age;
}

// call the method as usual
var p = new person1("GhettoCole", 18);
document.write(p.yearOfBirth());
document.write("<br/>");
// Call the method by the property name you specified in the  constructor function, rather than the function name
var p = new person1("Ghetto48", 15);
document.write(p.yearOfBirth());
