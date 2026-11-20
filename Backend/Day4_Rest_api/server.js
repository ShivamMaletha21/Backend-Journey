//  creating http server using Rest api
let express = require('express');

let app = express();

let users = [

    {
    name:"Shivam",
    age: 22,
    },

        {
    name:"Akash",
    age: 20,
    },

        {
    name:"Rajat",
    age: 19,
    },
        {
    name:"Karan",
    age: 24,
    }
]

app.get ('/users', (req,res)=>{
    return  res.status(200).json({
        message: "user fetched",
        users:users,
    })
}),

app.post ('/getusers',(req,res)=>{
    return res.send("ok");
})

let port = 3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
