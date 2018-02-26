/*
A small program to print an object's own properties, not its prototype properties
*/

function RandomObjectType(sex, age) {
	this.sex = sex;
	this.age = age;
	this.getAge = () => age;
	this.getSex = () => sex;
}

//protoype property for RandomObjectType
RandomObjectType.prototype.display = function() {
	console.log("Age: " + this.age);
	console.log("Sex: " + this.sex);
}

//creating an object
var m1 = new RandomObjectType('m', 23);
//looping through the object properties and printing it
for(var prop in m1) {
	if(m1.hasOwnProperty(prop))
		console.log(prop);
}
/*
As we see it does not logs the 'display property'
*/
/*
NOTE: to create a prototype-less object use create()
var obj = Object.create(null);
It creates an object with no prototype and properties. Later you can add it.
*/