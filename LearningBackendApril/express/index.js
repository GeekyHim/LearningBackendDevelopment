const express = require('express')
console.log(typeof express) 
// typeof express is function 

const app = express();
// app object bna liye using express() method
// this app is the MVP 
// iska raaj chelga 

// Starting express server

// start listeming/ working on port 8000
app.listen(8000, ()=> {
    console.log("Server Started on port 8000, Localhost")
})


// request response cycle

app.get("/", (req,res)=>{
    res.send("Hello from express")
})
