/*
There are 4 ways you can create objects in JavaScript:
1.Factory function
2.Using Constructors
3.prototypes
4.
*/
(function () {

	//* *************1. Creating objects in javaScript using factory function***************
	const peopleFactory = function (name, age, sex) {
		const temp = {};
		temp.name = name;
		temp.age = age;
		temp.sex = sex;

		temp.display = () => {
			console.log(`${name} is a dick ${age}${sex}`);
		}

		return temp;
	}

	const person1 = peopleFactory('John', 23, 'm');
	const person2 = peopleFactory('Johnna', 23, 'f');

	person1.display();
	person2.display();

	//* *************2. Creating objects in javaScript using constructors***************

	/* So we will create objects of a type shape with properties like area and weight and methods 
	getWeight().
	*/
	// constructor
	function Shape(area = 0.0, weight = 0.0) {
		this.area = area;
		this.weight = weight;
		this.getWeight = () => weight;
		this.getArea = () => area;
	}
	// another way to add method to a constructor, it is used when a function is common to all objects
	// this method is added to the prototype, not the object created by the constructor.
	Shape.prototype.display = function () {  // this format of writing functions does not work '() =>'
		console.log(`Area: ${this.area}`);
		console.log(`Weight: ${this.weight}`);
	};

	// objects
	const s1 = new Shape(100, 20);
	const s2 = new Shape(500);
	console.log(s1.display());
	console.log(s2);

}());


//* *************3. Creating objects in javaScript using prototypes***************


//* *************4. Creating objects in javaScript using constructors***************
function tit() {
	let sex;
	let flag = 0; const shit = true;
	if (shit) {
		sex = setTimeout(() => {
			while (flag < 100) {
				flag++;
				console.log(flag);
			}
			return flag;
		}, 2000);
		console.log(sex);
	}
	else {
		flag = "poop";
	}
	return sex;
}

console.log(tit());