var fs = require('fs')
// synchronous
// fs.writeFileSync("Test.txt",'Hello world')
console.log("synchronous write operation completed")
console.log("Outside")

// asynchronous
fs.writeFile("test.txt",'Hello world',function(err)
    {if(err)
    {console.log("Error Genreted"+err)}
    else{console.log(err)
    console.log("asynchronous write operation completed")}})
console.log("Out Side")