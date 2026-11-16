
// creating an http server
let http = require ('http');

let server = http.createServer((req,res)=>{
    console.log("hey i am connected");
    res.end("ok you are running now");
});



server.listen (3000, ()=>{
    console.log("the current server is running at 3000 port");
});

console.log("hey this is my first server");