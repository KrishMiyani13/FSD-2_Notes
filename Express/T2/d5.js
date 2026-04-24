var express=require("express")
var app=express()
app.get("/data",(req,res)=>{
    var name=req.query.name
    var age=req.query.age
    
    res.send("Name :"+name+"Age :"+age)
})
app.listen(5420)