const mongoose =require("mongoose")

const BookSchema=new mongoose.Schema({
name:{type:String,required:true},
title:{type:String,required:true},
price:{type:Number,required:true},
category:{type:String,required:true},
images:{type:String,required:true},
})

module.exports=mongoose.model("Book",BookSchema)