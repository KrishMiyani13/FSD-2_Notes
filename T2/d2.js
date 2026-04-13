var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.set('Content-Type', 'text/html');
    res.send('<h1>Hello World!!</h1>');
})
app.get('/about', function (req, res) {
    res.set('Content-Type', 'text/html');
    // res.write('<h1>About Us</h1>');
    res.send('<p>Hello from about page</p>');
})
app.listen(3005, () => { console.log('Server is running at http://localhost:3005'); })