// img 
var http = require('http');
var fs =  require('fs');
http.createServer(function (req,res){
if (req.url === '/'){
    res.writeHead(200,{'content-Type':'text/html'})
    res.end('<h1>Hello</h1><img src = "logo192.png"/>')
}
else if (req.url === '/logo192.png'){
    const img = fs.readFileSync('FSD-2_Notes-main/Chap-3/logo192.png');
    res.writeHead(200,{'content-Type':'image/png'})
    res.end(img);
}
}).listen(8186);