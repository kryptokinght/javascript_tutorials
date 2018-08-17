const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

//create instance of EventEmiiter
const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
    console.log("Adding new listener for",event);
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.on('event1', () => {
  console.log('A');
});
console.log("Emitting!");
//myEmitter.emit('event');
