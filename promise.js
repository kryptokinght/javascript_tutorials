//concept of javaScript promises shown here

//basic structure of a promise

let cleanTheRoomPromise = new Promise(function(resolve, reject) {

	/*
	perform some task here, like cleaning the room
	then after room cleaned, update roomCleaned
	*/
	let roomCleaned = false;
	if(roomCleaned)
		resolve("Room Cleaned!");
	else
		reject("Room not cleaned!");
});

//now we will call the promise
cleanTheRoomPromise.then(function(fromResolve) {
	console.log(fromResolve);
}).catch(function(fromReject) {
	console.log(fromReject);
});
/*
the above call to the promise will result in the output 'Room Cleaned!'.
if roomCleanded is changed to flase, the output will be 'Room not cleaned!' 
*/

//********************************Chaining of promises****************************
//here we return a promise from a function instead of directly using a promise object
//also we will directly resolving the promise instead of running a task and chekcing wether to reject or resolve.
let cleanRoom = function() {
	return new Promise(function(resolve, reject) {
		resolve("Cleaned the room");
	});
};

let removeGrabage = function(p) {
	return new Promise(function(resolve, reject) {
		resolve(p + " grabage removed fail");
	});
};

let winIceCream = function(p) {
	return new Promise(function(resolve, reject) {
		resolve(p + " Icecream won");
	});
};

//now chaining the promises
cleanRoom().then(function(result) {
	return removeGrabage(result);
}).then(function(result) {
	return winIceCream(result);
}).then(function(result) {
	console.log("Promises chaining " + result);
}).catch(function(rejectResult) {
	console.log("Reject: " + rejectResult);
}); //here we havent used catch though we can use it if any one of the promises returns reject

//****************************Running all promises simultaneously*********************
Promise.all([cleanRoom(), removeGrabage(), winIceCream()]).then(function() {
	console.log("ALl finished!!");
}).catch(function() {
	console.log("Rejected!!");
});

//****************************Anyone of the promises get executed first********************
Promise.race([cleanRoom(), removeGrabage(), winIceCream()]).then(function(result) {
	console.log("Promise: " + result + " finised!");
}).catch(function() {
	console.log("Rejected!!");
});