const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url=='/hello'){
        res.end("HELLO THERE")
    }else{
        res.end("WRONG URL")
    }
})


server.listen(8000,()=>{
    console.log("Server Started")
})