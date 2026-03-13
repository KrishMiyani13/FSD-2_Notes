var pm = require('path')
path = pm.dirname('D:/LJ/abc.html');
console.log(path)
path = pm.basename('D:/LJ/abc.html');
console.log(path)
path = pm.extname('D:/LJ/abc.html');
console.log(path)
path = pm.parse('D:/LJ/abc.html')
console.log(path)
if (path.ext == ".txt"){
    console.log("Text Document")
}
else{
    console.log("Not a Text Document")
}