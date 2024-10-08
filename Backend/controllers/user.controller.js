const { request } = require("express");
const User = require("../models/user.model");
const bcryptjs=require("bcryptjs");
const bcrypt = require("bcryptjs/dist/bcrypt");
exports.signup = async (req, res) => { 
    console.log("Request body:", req.body); // Log the request body
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            return res.json({ message: "User already exists" });
        }
        const hashPassword=await bcryptjs.hash(password,10)

        // Create a new user
        const createUser = new User({
            name:name,
            email:email,
            password:hashPassword,
        });

        // Save the new user to the database
        await createUser.save();

        res.json({ status: 200, message: "User created successfully", user: createUser });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }

    
};


exports.login=async(req,res)=>{
    try{
  const {email,password}=req.body;
  const user=await User.findOne({email:email})
  if(!user){
    return res.json({message:"Invalid username our email",status:404,sucess:false})
  }
  const checkPassword=await bcrypt.compare(password,user.password);
  if(checkPassword){
    return res.json({message:"User logged in Successfully",sucess:true,status:200})
  }
  else{
    return res.json({message:"password is wrong",sucess:false,status:404})
  }
    }
    catch(err)
    {
        console.log(err);
    }
}

