const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/lju12").then(
    ()=>{console.log("Success")}
).catch((error)=>{console.error(error)});

const mySchema = new mg.Schema({name:{type:String,require:true},surname:String,age:Number,active:Boolean})

const person = new mg.model("krish",mySchema)

const createDoc = async() =>{
    try{
        const personData = new person({name : "test",surname:"XYZ",age:"30",active:true})
        const result = await personData.save()

        const result1 = await person.updateOne({name:'test'},{$set : {age:34,active:false}})
        const result2 = await person.findOne({name:'test'})

        const updatePerson = await person.findByIdAndUpdate(result2._id,{name:"lju",age:28,active:true},{new:true})
        console.log(updatePerson)
        console.log("Person",result2._id)
        console.log(result)
        console.log(result1)
    }
    catch (err){
        console.log("error Occurecl"+ err)
    }
}
createDoc()