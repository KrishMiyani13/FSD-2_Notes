//3. then redirect to /admin page and clear the cookie which is set for the last name display the remianing set cookie value on this page 
//use post to store cookie

var express=require("express")
var app=express()
var cp=require("cookie-parser")
app.use(cp())
app.use(express.static(__dirname,{index:"c1.html"}))
app.use(express.urlencoded())
app.post('/next',(req,res)=>{
    res.cookie("Fname",req.body.f)
    res.cookie("Lname",req.body.l)
    res.cookie("Password",req.body.p)
    res.redirect("/admin")
})
app.get('/admin',(req,res)=>{
    res.clearCookie("Lname")
    res.write("Welcome: "+req.cookies.Fname)
    res.write("Lname: "+req.cookies.Lname)
    res.write("Password: "+req.cookies.Password)
    res.send()
})
app.listen(3117)