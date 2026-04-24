var express = require('express');
var app = express();
var cp = require('cookie-parser');

app.use(cp());

app.get('/cookie', function(req, res) {
    res.cookie('name', 'express');
    res.cookie('age', 3);
    res.cookie('1D','2',{maxAge:2000});// Method 1: Set cookie with maxAge (expires after 2 seconds)
    res.clearCookie('age');
    res.cookie('2D','3',{expires:new Date(Date.now()+2000)}); // Method 2: Set cookie with expires (expires after 2 seconds)
    res.send(req.cookies);``
});
app.listen(3000, function() {
    console.log('Server is running on port http://localhost:3000');
});