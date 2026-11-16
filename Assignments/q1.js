const EventEmitter = require("events");

const schoolBell = new EventEmitter();

// classStart event
schoolBell.on("classStart", () => {
    console.log("Class started!");
});

// classEnd event
schoolBell.on("classEnd", () => {
    console.log("Class ended!");
});

// Emit events
schoolBell.emit("classStart");
schoolBell.emit("classEnd");

// Event Loop demonstration
setTimeout(() => {
    console.log("Ring bell - setTimeout");
}, 0);

setImmediate(() => {
    console.log("Ring bell - setImmediate");
});

process.nextTick(() => {
    console.log("Ring bell - process.nextTick");
});

console.log("End of main program");

// Class started!
// Class ended!
// End of main program
// Ring bell - process.nextTick
// Ring bell - setTimeout
// Ring bell - setImmediate