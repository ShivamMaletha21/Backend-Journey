// creating http server
let http = require ('http');

let server = createServer((req,res)=>{

    res.end("ok the current server is now running");

});

server.listen(3000,()=>{
    "now server is running";

});