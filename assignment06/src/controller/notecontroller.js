const notemodel=require("../models/notemodel")

const createnote= async (req,res)=>{
    const {title, description}=req.body
    const newnote= new notemodel({
        title: title,
        description: description,
        userId:req.userId
    })

    try {
        await newnote.save()
        res.status(201).json(newnote)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"something went wrong"})
        
    }

}

const deletenote=async(req, res)=>{
    const id = req.params.id
    try {
       const note= await notemodel.findByIdAndRemove(id)
       res.status(202).json(note) 
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"something went wrong"})
    }
    
}

const updatenote=async (req, res)=>{

    const id = req.params.id
    const {title, description}= req.body

    const newnote= {
        title: title,
        description: description,
        userId: req.userId
    }

    try {
        await notemodel.findByIdAndUpdate(id, newnote, {new: true})
        res.status(201).json(newnote)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'something went wrong'})
    }
    
}
const getnote= async(req,res)=>{

    try{
    const note= await notemodel.find({userId : req.userId})
    res.status(200).json(note)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:'something went wrong'})
    }

}

module.exports={createnote, deletenote, updatenote, getnote}