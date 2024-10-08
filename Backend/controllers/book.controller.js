const mongoose=require("mongoose")
const Book = require("../models/book.model")



exports.index=async(req,res)=>{
    try{
  const book =await Book.find();
  res.json({status:200,message:"Products fetched Successfully",book})
    }
    catch(err)
    {
        console.log(err);
    }
}