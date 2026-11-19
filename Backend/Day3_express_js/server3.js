// creating server using express.js

let express = require('express'); // importing express module

let app = express(); // creating app instance using express() function
// now app has methods such as app.get(), post(),put() etc which helps in creating server

app.get ('/', (req,res)=>{

    res.json ([
        {id:1, name:'Shivam'},
         {id:2, name:'Rahul'},

    ]);
});

app.get ('/users', (req,res)=>{
    res.send ("hey shivam this side");
})

app.listen(3000, () =>{
    console.log('current server is running at port 3000');
});