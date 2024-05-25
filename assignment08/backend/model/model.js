const mongoose=require("mongoose")
const Schema= mongoose.Schema

const Student=new Schema({
 name:{
    type:String,
    require:[true,'name is required'],
    minlength:[3,'name must be larger than 3 characters'],
    maxlength:[100,'name must be smaller than 100 characters']
 },
 fname:{
    type:String,
    require:[true,'fname is required'],
    minlength:[3,'fname must be larger than 3 characters'],
    maxlength:[100,'fname must be smaller than 100 characters']
 },
 age: Number
    
})

module.exports=mongoose.model("Student", Student)