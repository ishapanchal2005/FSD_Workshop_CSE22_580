import { EventEmitter } from "node:events";

function createDomElements() { // create events by emmitter
    const emitter = new EventEmitter(); // create ,remove event by listner
    return { // return 3 events
        
        // event ->action listener lagana h -> button click add
        addEventListener(eventType, listener) { // event type , listener for diff sound
            emitter.on(eventType, listener); // listener -> call back fn
        },
        removeEventListener(eventType, listener) {
            emitter.off(eventType, listener);
        },
        dispatchEvent(event) {
            emitter.emit(event.eventType);
        }
    };
}
const button = createDomElements();
button.addEventListener('save', () => {   //name,action->call back
    console.log("saving...");
});
button.dispatchEvent({
    eventType: "save"
});
