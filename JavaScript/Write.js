const fs = require('fs')

// Writing in file


// SYNC

// console.log("START")
// fs.writeFileSync('output1.txt',"Hello Friends")
// console.log("END")


// ASYNC

console.log("START")

fs.writeFile('outputAsync.txt',"Hello Friends Again", err => {
    if(err) { return console.log(err) }
    
    console.log("Successfull!")
})

console.log("END")
