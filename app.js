const express=require('express')
const app=express()
const path=require('path')
app.get("/",(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname,"templates/index.html"))
})

app.get("/product1",(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname,"templates/product1.html"))
})

app.get("/product",(req,res)=>{
    res.send("Hello product express")
})

app.listen(8080,()=>{
    console.log("Run server port : 8080")
})