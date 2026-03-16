const eve = require("events")
const ee = new eve()
var ps = require('fs')
var fun1 = (msg) => { ps.writeFile('help.txt',msg,(err)=>{if (err) throw err;
        console.log('file is created');}) }

var fun2 = (msg) => {ps.appendFile("help.txt",msg,(err) => {
        if (err) throw err;
        console.log('file is appended');})}
var fun3 = () => {ps.readFile("help.txt",'utf8',(err, data) => {
        if (err) throw err;
        console.log("File Content:", data);})}


ee.on('writefile',fun1)
ee.on('app',fun2)
ee.on('read',fun3)
ee.emit("writefile", "File name is help.txt")

ee.emit('app','\n This is New Line')

ee.emit('read')