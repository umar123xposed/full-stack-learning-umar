const express= require("express")
const app= express()
const userRouter = require("./routes/userroutes")
const NoteRoutes = require("./routes/noteroutes")
const mongoose =require('mongoose')
const port= 5000

app.use(express.json())

app.use("/users", userRouter)
app.use("/note", NoteRoutes)


mongoose.connect("mongodb+srv://Umar123:incorrect123@cluster0.p5bx2eh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    app.listen(port, ()=>{
        console.log("server is running on port", port)
    })

}).catch((error)=>{

})
