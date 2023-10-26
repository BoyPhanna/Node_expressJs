const http=require ('http')
const server=http.createServer((req,res)=>{
    res.write(`<h1 style="color: blue;">Hello phanna</h1>`)
    res.end()
}).listen(3000,()=>{
    console.log("start server port 3000")
})