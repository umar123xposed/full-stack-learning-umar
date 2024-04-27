const mongoose=require('mongoose')

const NoteSchema= mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    userid:{
        type:mongoose.Types.ObjectId,
        ref:"user",
        require:true
    }
})

module.exports=mongoose.model("note", NoteSchema)