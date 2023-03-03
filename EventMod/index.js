//Events Module where you can create- , fire- and listen for your own events.

//The following example shows a simple EventEmitter instance with a single listener. 
//The eventEmitter.on() method is used to register listeners, 
//while the eventEmitter.emit() method is used to trigger the event.
const EventEmitter = require('events');  // we are creating class with the help of evenrs.

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

// Example 2- Create an event emitter instance and register a couple of callbacks
/*const EventEmitter = require("events");
const server = new EventEmitter(); // Event emitter instance 

server.on("SayMyName", ()=>{
    console.log("you can do it");
});

server.on("SayMyName", ()=>{
    console.log("you can do it");
});

server.on("SayMyName", ()=>{
    console.log("you can do it");
});

server.emit("SayMyName");

*/



// Example 3- Registering for the event with callback parameters


const EventEmitter = require("events");
const server = new EventEmitter();

// Here we can also use event.on in place of server.on()
server.on('connection', (sc , msg) => {
    console.log(`someone connected! ${sc} and the page is ${msg}`);
  });
  
  server.emit("connection" , 200 , "OK");
  

  // Asynchronus vs Synchronus
  //The EventEmitter calls all listeners synchronously in the order in which they were registered. 
  //This ensures the proper sequencing of events and helps avoid race conditions and logic errors.
  // When appropriate, listener functions can switch to an asynchronous mode of operation using the setImmediate() or process.nextTick() methods: