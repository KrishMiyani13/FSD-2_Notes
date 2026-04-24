var http = require("http");
// create a sever 
http.createServer(function(req,res){
    // step 1 : set status + header
    res.writeHead(200,{'content-Type':'text/html'});
    // step 2 : write response body
    res.write('<h1> Hello Wood </h1>');
    // step 3 : End response
    res.end();

}).listen(3120,()=>{console.log("Sever is runing at http://localhost:3120")})