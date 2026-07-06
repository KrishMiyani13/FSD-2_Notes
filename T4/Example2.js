const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/lju1234").then(
    ()=>{console.log("Success")}
).catch((error)=>{console.error(error)});

const mySchema = new mg.Schema({name:{type:String,require:true},surname:String,age:Number,active:Boolean,date: { type: Date ,default:new Date().toLocaleDateString()}})

const person = new mg.model("person",mySchema)

const createDoc = async() =>{
    try{
        const personData = [{name : "test1",surname:"XYZ1",age:"31",active:true},{name : "test2",surname:"XYZ2",age:"32",active:true}]
        const result = await person.insertMany(personData)
        console.log(result)
    }
    catch (err){
        console.log("error Occurecl"+ err)
    }
}
createDoc()