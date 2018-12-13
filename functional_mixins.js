//prefer object composition over class inheritance.
/*
Functional mixins are a form of object composition.
You can create object without classes in JavaScript. So after creating an object
You can add features to that object like you add ingredients to an icecream.
Javascript supports dynamic object extension, you can extend an object by dynamically
adding features to it.

A factory function is a function which is not a class or constructor but returns an
object without the new keyword.
*/
/*
WHAT I'LL DO HERE:
I am going to create a number of objects which will act as ingredients that
will serve flavours/features to another object also called composite object
*/
(function() { //IIFE

	function display(icecream) {
		console.log(`
			Contents of an icecream:
			hasChocolate: ${icecream.hasChocolate()}
			hasStrawberry: ${icecream.hasStrawberry()}
			hasVanilla: ${icecream.hasVanilla()}
		`);
	}
	//some random flavour objects
	const chocolate = {
		hasChocolate: () => true
	};
	const strawberry = {
		hasStrawberry: () => true
	};
	const vanilla = {
		hasVanilla: () => true
	};

	const icecream = Object.assign({}, chocolate, strawberry, vanilla); //composite object
	//special way of outputting foramtted strings(LEARN IT)
	//console.log(` Print30: ${ 20+10 }`); OUTPUT: Print30: 30
	display(icecream);

	//**********Same icecream object using functional inheritance********

	//base object factory
	function base(chocolate, strawberry, vanilla) {
		var that = {};
		that.hasChocolate = chocolate.hasChocolate;
		that.hasVanilla = vanilla.hasVanilla;
		that.hasStrawberry = strawberry.hasStrawberry;
		return that;
	}
	var icecream2 = base(chocolate, strawberry, vanilla);
	display(icecream2);
}());
