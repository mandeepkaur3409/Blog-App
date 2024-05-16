import express from "express" 
import mongoose from "mongoose"

 const app= express()

 mongoose.connect("mongodb+srv://user2002:user2002@cluster0.rlawphu.mongodb.net/ ").then(()=>{
    console.log("database connected")

 }).catch((err)=>{
    console.log(err)
 })

 app.listen(9000,()=>{
    console.log("server is running")
 })