const express =require("express")
const router=express.Router();
const bookRouter=require("./book.route")
// const controller=require("../controllers/user.controller")

router.use("/book",bookRouter)
// router.post("/signup",controoler.signup)