
const Student= require('../model/model.js')

const getStudent=async(req,res)=>{
    try {
        const student= await Student.find()
        if(!student){
            return res.status(200).json({error:"No student in database"})
        }
        return res.status(201).json(student)
        
    } catch (error) {
        return res.status(500).json({error:"interal server error"})
        
    }

}

const addStudent= async(req,res)=>{
    try{
        const student= new Student(req.body)
        await student.save()
        return res.status(201).json(student)

    }catch(error){
        return res.status(500).json({error: "internal server error"})
    }
}

const updateStudent=async(req,res)=>{
    try {
        const id= req.params.id
        const student= await Student.findByIdAndUpdate({_id:id}, req.body, {new:true})
        return res.status(201).json(student)

        
    } catch (error) {
        return res.status(500).json({error: "internal server error"})
        
    }
}

const deleteStudent=async(req,res)=>{
    try{
        const id=req.params.id
        const student= await Student.findOneAndDelete({_id:id})
        if(!student){
            return res.status(401).json({error: "Student not found"})
        }
        return res.status(201).json(student)
        
    }
    catch(error){
        return res.status(500).json({error: "internal server error"})
    }
}

module.exports={getStudent,updateStudent,addStudent,deleteStudent}