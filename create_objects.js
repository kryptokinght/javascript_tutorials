/*
Creating objects in javaScript using constructors
*/

(function() {

/*So we will create objects of a type shape with properties like area and weight and methods 
getWeight().
*/
	//constructor
	function Shape(area = 0.0, weight = 0.0) {
		this.area = area;
		this.weight = weight;
		this.getWeight = () => weight;
		this.getArea = () => area;
	}
	//another way to add method to a constructor
	//this method is added to the prototype, not the object created by the constructor.
	Shape.prototype.display = function() {  //this format of writing functions does not work '() =>'
		console.log("Area: " + this.area);
		console.log("Weight: " + this.weight);
	};

	//objects
	var s1 = new Shape(100, 20);
	var s2 = new Shape(500);
	console.log(s1.display());
	console.log(s2);

}());