const http=require ('http')
const fs=require('fs')
const indexPage=fs.readFileSync(`${__dirname}/webpages/index.html`)
const productPage=fs.readFileSync(`${__dirname}/webpages/product.html`)
const server=http.createServer((req,res)=>{
    const parthName=req.url
    console.log("url : "+parthName)
    if(parthName=="/" || parthName=="/home"){
        res.end(indexPage)
    }
    if( parthName=="/product"){
        res.end(productPage)
    }
    else{
        res.writeHead(404)
        const myPage=`<h1 style="color: blue;">404 Not Fount</h1>`
        res.end(myPage)
    }
}).listen(3000,()=>{
    console.log("start server port 3000")
})