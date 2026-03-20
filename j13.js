var u = require("url");
var ps=require("fs");
process.noDeprecation = true
var addr = "http://localhost:8080/default.html?m1=50&m2=60&m3=70";

var q = u.parse(addr, true);

var m1 = parseInt(q.query.m1)
var m2 = parseInt(q.query.m2)
var m3 = parseInt(q.query.m3)

var avg = (m1+m2+m3)/3
console.log("Avg : "+avg)