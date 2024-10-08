const mongoose=require("mongoose")


const connectdb=async()=>{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb COnnected SucessFully");
}

module.exports=connectdb;