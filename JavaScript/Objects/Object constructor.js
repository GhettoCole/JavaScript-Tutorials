// The object constructor

var persona = {
  name : "Given",
  age : 17,
  favColor : "Blue"
}
var name = persona.name;
var age = persona.age;
var color = persona.favColor;
document.write("<br/>");
document.write("My name is " + name);
document.write(" and my favorite color is " + color);

/*
The standard way to create an object type is to use an object constructor function

Object - containers for named values

Constructor - Function that is written to be used with the new operator to initiliaze a newly created object


*/

function person(name, age, color){
  this.name = name;
  this.age = age;
  this.favColor = color;
}

// The above function(person) is an object constructor.
// Which takes parameters and assigns them to the object properties.

/*
The this keyword refers to the current object
The value of *this* keyword cannot be changed
*/
function given(name, age, nickname){
  this.name = name;
  this.age = age;
  this.nickname = nickname;
  this.changeName = function name(name){
    this.name = name;
  }
}

var given = new given('Given', 17, 'GhettoCole');
document.write('<br/> Name: ', given.name);
document.write('<br/> Age: ', given.age);
document.write('<br/> Nickname: ', given.nickname);
given.changeName('Lebogang');
document.write('<br/> Another name: ', given.name);

// Use the new keyword to create new objects of the same type


var p1 = new person("GhettoCole",17,"Green");
var p2 = new person("Goitse",10,"Red");
document.write("<br/>");

document.write(p1.age);
document.write("<br/>");
document.write(p2.name);

document.write("<br/>");

function person(name, age){
  this.name = name;
  this.age = age;
}
var given = new person("GhettoCole",17);
var Seth = new person("Goitse", 11);
