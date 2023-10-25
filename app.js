let connect=true
url1="www.phanna1.com"
url2="www.phanna2.com"
url3="www.phanna3.com"
url4="www.phanna4.com"
function download(url){
    return new Promise(
        function(resolve,reject){
            console.log("Downloading......");
            setTimeout(
                ()=>{
                    if(connect){
                        resolve("Download "+url+" complete");
                    }
                    else{
                        reject("Faild")
                    }
                }
            ,1000)
        }

    )
}
async function start(){
    console.log(await download(url1))
    console.log(await download(url2))
    console.log(await download(url3))

}

start()
