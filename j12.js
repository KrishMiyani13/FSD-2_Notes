var u = require("url");
var ps=require("fs");
process.noDeprecation = true
var addr = "http://localhost:8080/default.html?year=2025&month=feb";

var q = u.parse(addr, false);

var qdata = JSON.stringify(q.query)

ps.writeFile('url.txt',qdata,(err)=>{
    console.log(qdata +'   Is Written')
})
