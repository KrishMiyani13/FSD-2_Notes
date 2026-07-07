var expe = require("express")
var app  = expe()

const mg = require("mongoose")
mg.connect('mongodb://127.0.0.1:27017/login').then 
mg.pluralize(null)
const mySchema = new mg.Schema({Uname:{type:String,require:true},password:{type:Number,require:true}})

const person = new mg.model('data1',mySchema)

app.use(expe.static(__dirname,{index:"form.html"}))
app.use("/process_get",async(req,res)=>{
    const personData = new person({Uname:req.query.Uname,password:req.query.password})
    await personData.save()
    res.send("Redord Insert")
})
app.listen(6001)