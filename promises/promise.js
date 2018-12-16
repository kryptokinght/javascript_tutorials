// concept of javaScript promises shown here

// basic structure of a promise

const cleanTheRoomPromise = new Promise(((resolve, reject) => {

	/*
	perform some task here, like cleaning the room
	then after room cleaned, update roomCleaned
	*/
	const roomCleaned = true;
	if (roomCleaned)
		resolve("Room Cleaned!");
	else
		reject(new Error("Room not cleaned"));
}));

// now we will call the promise
cleanTheRoomPromise.then((fromResolve) => {
	console.log(fromResolve);
}).catch((fromReject) => {
	console.log(fromReject);
});
/*
the above call to the promise will result in the output 'Room Cleaned!'.
if roomCleanded is changed to flase, the output will be 'Room not cleaned!' 
*/

//* *******************************Chaining of promises****************************
// here we return a promise from a function instead of directly using a promise object
// also we will directly resolving the promise instead of running a task and chekcing wether to reject or resolve.
const cleanRoom = () => new Promise(((resolve) => {
	resolve("Cleaned the room");
}));

const removeGrabage = (p) => new Promise(((resolve) => {
	resolve(`${p} grabage removed fail`);
}));

const winIceCream = (p) => new Promise(((resolve) => {
	resolve(`${p} Icecream won`);
}));

// now chaining the promises
cleanRoom().then((result) => removeGrabage(result)).then((result) => winIceCream(result)).then((result) => {
	console.log(`Promises chaining ${result}`);
}).catch((rejectResult) => {
	console.log(`Reject: ${rejectResult}`);
}); // here we havent used catch though we can use it if any one of the promises returns reject

//* ***************************Running all promises simultaneously*********************
Promise.all([cleanRoom(), removeGrabage(), winIceCream()]).then(() => {
	console.log("ALl finished!!");
}).catch(() => {
	console.log("Rejected!!");
});

//* ***************************Anyone of the promises get executed first********************
Promise.race([cleanRoom(), removeGrabage(), winIceCream()]).then((result) => {
	console.log(`Promise: ${result} finised!`);
}).catch(() => {
	console.log("Rejected!!");
});
