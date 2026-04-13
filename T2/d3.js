var express = require('express');
var app = express();

student = {
    name: 'John Doe',
    age: 20,
    course: 'Computer Science'
}
app.get('/', function (req, res) {
    // res.set('Content-Type', 'application/json');
    // res.send(student);
    res.json(student);
})
app.listen(3007, () => { console.log('Server is running at http://localhost:3007'); })