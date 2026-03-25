var http = require('http');
var fs = require('fs');
var path = require('path');


var server = http.createServer(function(req, res) {
    if (req.url == '/') {
        // Home page: Show "Welcome to Log in page"
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1 style='font-size: 32px; color:blue'>Welcome to Log in page</h1><br>");
        res.write("<button><a href='/login'>Go to Login Page</a></button>");
        res.end();
    }
    else if (req.url == '/login') {
        
        fs.readFile('FSD-2_Notes-main/Chap-3/login.html', function(err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                return res.end("Error loading login page");
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if (req.url == '/gallery') {
        
        fs.readFile('FSD-2_Notes-main/Chap-3/logo192.png', function(err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                return res.end("Error loading image");
            }
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.end(data);
        });
    }
    else {
        
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write("Page not found\nPlease check the URL");
        res.end();
    }
});


server.listen(5051, function() {
    console.log('Server is running at http://localhost:5051');
}); 