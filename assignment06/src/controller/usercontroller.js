
const usermodel=require('./../models/usermodel')
const bcrypt=require('bcrypt')

const jwt=require('jsonwebtoken')
const SECRETKEY="NOTEAPI"

const signin=async(req,res)=>{

    try {
        const {email,password}= req.body
        const existinguser= await  usermodel.findOne({email:email})
        if(!existinguser){
            res.status(401).json({message: "user not found"})
        }
        const matchpass=await bcrypt.compare(password, existinguser.password)
        if(!matchpass){
            res.status(401).json({message: "credentials did not match"})
        }
        const token=jwt.sign({email:existinguser.email, id:existinguser._id}, SECRETKEY)
        res.status(201).json({user:existinguser, token: token})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"something went wrong"})

    }

}
const signup= async(req,res)=>{

    try{
        const{email,password,username}=req.body

        const existinguser= await  usermodel.findOne({email:email})
        if(existinguser){
            return res.status(404).json("user already exist")
        }
        const hashpass=await bcrypt.hash(password,10)
        
        const result=await usermodel.create({
            email:email,
            password:hashpass,
            username:username
        })

        const token=jwt.sign({email:result.email, id:result._id}, SECRETKEY)
        console.log(token)
        res.status(201).json({user:result, token:token})

    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"something went wrong"})

    }

}
module.exports={signin,signup}