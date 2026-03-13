const EventEmitter = require("events");
const ee =new EventEmitter ();
ee.on('start',()=>{
    console.log("Event Started");
});
ee.emit('start')