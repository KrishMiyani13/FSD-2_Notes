const EventEmiter = require("events");
var ee =new EventEmiter();
var listener1 = function listener1(){console.log('Linster1 executed');}
var listener2 = function listener2(){console.log('Linster2 executed')}

ee.on('conn',listener1)
ee.on('conn',listener2)
let count = ee.listenerCount('conn')
console.log('count1 :'+count)
ee.emit('conn');

ee.removeListener('conn',listener1)
count = ee.listenerCount('conn')
console.log('counting agging : '+ count)
ee.emit('conn')

ee.removeAllListeners('conn')

count = ee.listenerCount('conn')
console.log(count)