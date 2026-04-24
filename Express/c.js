var express=require("express")
var app=express()
var cp=require("cookie-parser")
app.use(cp())
app.get('/cookie',(req,res)=>{
    res.cookie('name','express') //set cookie
    res.cookie('fname','JS')
    res.cookie('lname','Pra')
    res.cookie('id','3')
    res.send(req.cookies)
})
app.listen(3117)