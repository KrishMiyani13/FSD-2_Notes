var u=require("url");
process.noDeprecation = true
var addr="http://localhost:8080/default.html?year=2025&month=feb";
var q=u.parse(addr,true);
console.log(q);
var qdata=q.query;
console.log(qdata.year);
console.log(qdata.month)
if(qdata.year%4==0)
{console.log("Its a leap year")
}
else{
console.log("Its not a leap year")
}