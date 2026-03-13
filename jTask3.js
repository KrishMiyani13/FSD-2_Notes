var fs = require('fs')
fs.writeFile('help.txt','You Are creating file \n',(err)=>{
    if (err) throw err;
    console.log('File Created & data written')
    fs.appendFile("help.txt","You are appeding data",(err)=>{
        if (err) throw err;
        console.log("Data is appeded")
        fs.readFile('help.txt','utf-8',(err,data)=>{
            if (err) throw err;
            console.log('\n File Data : ')
            console.log(data)
    console.log("Thank for using my practical")
})
})
})
