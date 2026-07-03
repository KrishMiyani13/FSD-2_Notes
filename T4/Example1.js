const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/lju1234").then(
    ()=>{console.log("Success")}
).catch((error)=>{console.error(error)});

const mySchema = new mg.Schema({name:{type:String,require:true},surname:String,age:Number,active:Boolean,date: { type: Date ,default:new Date().toLocaleDateString()}})

const person = new mg.model("person",mySchema)

const createDoc = async() =>{
    try{
        const personData = new person({name : "test",surname:"XYZ",age:"30",active:true})
        const result = await personData.save()
        console.log(result)
    }
    catch (err){
        console.log("error Occurecl"+ err)
    }
}
createDoc()