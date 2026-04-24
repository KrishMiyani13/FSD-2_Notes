const student = [
    {name:'abc',age:30},
    {name:'xyz',age:32}
]
var ps = require('fs')
ps.writeFileSync('Student.txt',JSON.stringify(student));
data = ps.readFileSync('Student.txt','utf-8');
var b = JSON.parse(data);
console.log(b)
console.log(data)