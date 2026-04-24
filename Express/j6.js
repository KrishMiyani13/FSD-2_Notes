const EventEmitter = require("events");
const ee =new EventEmitter ();
ee.on('start',(start,end)=>{console.log(`Start from ${start} to ${end}`);});

ee.emit('start',1,100)