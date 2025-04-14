// read from external file

const fs = require('fs')
// fs -> file system

// sync
/** 
console.log("START")

const content  = fs.readFileSync("input.txt") // byte me print ho ra

//console.log( content)
console.log("Output is " + content) // implicit way me string me typecast kar dia

console.log("END")

**/

// ASYNC

console.log("START")

fs.readFile("input.txt", (err,content)=>{
    if(err) { return console.log(err) }
    console.log("Content of File : " + content) 
    // , use karne pe concat nhi karega,  + se concat karega
})



console.log("END")

