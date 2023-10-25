const fs=require ('fs')

fs.readFile('myFile/input.txt','utf-8',(err,data)=>{
    if(err)
        console.log("Some thing have wrong!")
    else{
        const outputText=`Hello node js 2\n${data}\nFile wroted ${new Date()}`
        fs.writeFile('myFile/ouput2.txt',outputText,err=>{
            if(err){
                console.log("Somet thing have wrong!")
            }
            else{
                console.log("File Wroted");
            }
        })
    }
})

