const eve = require("events")
const ee = new eve()
var fun1 = (msg) => { console.log("msg from fun1: " + msg) }
var fun2 = (msg) => { console.log("msg from fun2: " + msg) }
ee.on("myEvent1", fun1)
ee.on("myEvent2", fun2)
ee.on("myEvent1", fun1)
ee.on("myEvent2", fun2)

// ee.removeListener('myEvent2',fun2)
// ee.removeAllListeners('myEvent1')
// ee.removeAllListeners('myEvent2')

ee.emit("myEvent1", "LJU")
ee.emit('myEvent2','LJ Univercity')