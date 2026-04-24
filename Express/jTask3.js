// Write node.js script to print “Welcome to Home Page” with two links
// containing two pages named as “About Us” and “Contact Us” on
// home page of server. If user request for About Us page it should
// display “Welcome to LJ University” in bold font-style with blue
// color and if user request for Contact Us page it should display
// “Email:abc@ljinstitutes.edu.in” in italic font-style with red color if
// any other request is requested it shows “Page not found” message in
// plaintext.

var http = require('http');
var fs =  require('fs');
var Server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1> Home Page</h1><ul><li><a href='/about'>About us</a></li><li><a href='/Contact'>Concte us</a></li></ul>")
        res.end()
    }
    else if(req.url == '/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write("<h1 style='font-weight: bold; color:blue'>Wlcome to LJ University</h1>")
        res.end();
    }
    else if(req.url == '/Contact'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write("<h1 style='font-style: italic; color:red'>Email:abc@ljinstitutes.edu.in</h1>")
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.write("<h1>Page not find </h1>")
        res.end("\n Plase check Url");
    }
})
Server.listen(5051);
console.log('Thank You')