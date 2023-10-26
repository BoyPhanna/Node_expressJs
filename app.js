const http=require ('http')
const server=http.createServer((req,res)=>{
    const parthName=req.url
    console.log("url : "+parthName)
    if(parthName=="/" || parthName=="/home"){
        const myPage=`<h1 style="color: blue;">Hello Home Page phanna22</h1>`
        res.end(myPage)
    }
    if( parthName=="/product"){
        const myPage=`<h1 style="color: blue;">Hello Product</h1>`
        res.end(myPage)
    }
    else{
        res.writeHead(404)
        const myPage=`<h1 style="color: blue;">404 Not Fount</h1>`
        res.end(myPage)
    }
}).listen(3000,()=>{
    console.log("start server port 3000")
})