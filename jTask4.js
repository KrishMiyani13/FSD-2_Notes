const EventEmitter = require('events')
const ee = new EventEmitter ();
ee.on('connection',function(){console.log("Connection Successfully")
    ee.emit('data-recevived');
});
ee.on('data-recevived',function(){console.log('data-recevived Successfully');})
ee.emit('connection');
console.log('Thanks')