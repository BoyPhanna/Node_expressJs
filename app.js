const util= require ('./Modules/Mymodules.js')
const now= require ('./Modules/Mymodules.js').getCurentTime
const plus= require ('./Modules/Mymodules.js').add


console.log(util.getCurentTime())
console.log(util.add(50,100))
console.log(now())
console.log(plus(30,50))