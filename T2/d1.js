var express = require('express');
var app = express();

app.get('/', function (req, res) {
    // res.set('Content-Type', 'text/html');
    // res.type('text/html');
    res.setHeader('Content-Type', 'text/html');

    res.send('<h1>Hello World!</h1>');
})
app.listen(3003,() => {console.log('Server is running at http://localhost:3003');})
