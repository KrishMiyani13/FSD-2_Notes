var http = require('http')
var fs  = require('fs')
var url  = require('url')
var addr = "http://localhost:6051/FSD-2_Notes-main/Chap-3/login.html"
var q = url.parse(addr,true);
http.createServer(function(req,res){
    fs.readFile('.' + q.pathname,function(err,data){
        if(err){
            res.writeHead(404,{'Conten-Type': 'text/plain'});
            res.end('File Not found');
        }
        else{
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(data);
        }
    })
}).listen(6051)