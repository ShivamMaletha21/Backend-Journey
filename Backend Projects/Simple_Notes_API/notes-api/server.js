// this is i am creting http server using http module
//let http1 = require ("http");

// let server = http1.createServer ((req,res)=>{

//     console.log("the server is created");
//     res.end("hey this is my server response");

// });

// server.listen(3000,()=>{
//     console.log("the server is running at port 3000");
// })

// this is using express.js

let app = require ("./src/app");

app.listen (3000, ()=>{
    console.log("server is running at port 3000");
})