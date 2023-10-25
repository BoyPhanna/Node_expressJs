const fs=require ('fs')
const data=fs.readFileSync('myFile/input.txt','utf-8')

console.log(data)

const outputText=`Hello node.js\n${data}\nFile Wroted ${new Date}`
fs.writeFileSync("myFile/output.txt",outputText)
console.log("Write file complete")