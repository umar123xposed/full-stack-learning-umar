const express=require("express")
const { createnote, deletenote, updatenote, getnote } = require("../controller/notecontroller")
const NoteRoutes=express.Router()
const auth=require("../middleware/auth")

NoteRoutes.get("/", auth ,getnote)
NoteRoutes.post("/",auth,  createnote)
NoteRoutes.delete("/:id",auth,  deletenote)
NoteRoutes.put("/:id",auth, updatenote)


module.exports=NoteRoutes