const jwt=require("jsonwebtoken")
const SECRETKEY="NOTEAPI"

const  auth=(req, res, next)=>{
    let token= req.header.authorization
    try{
    if(token){
        token=token.split(' ')[1]
        
        let user=jwt.verify(token, SECRETKEY)
        req.userId=user.id
    }
    else{
        console.log(token)
        res.status(401).json({message:"unauthorized user"})
    }
    next()}
    catch(error){
        console.log(error)
        console.log(token)
        res.status(401).json({message:"unauthorized user"})

    }

}
module.exports=auth