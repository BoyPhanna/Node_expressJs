const express=require('express')
const path=require('path')
const router=express.Router()


router.get("/",(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname,"../templates/index.html"))
})

router.get("/product1",(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname,"../templates/product1.html"))
})

router.get("/product2",(req,res)=>{
    res.send("Hello product express")
})

module.exports = router 
