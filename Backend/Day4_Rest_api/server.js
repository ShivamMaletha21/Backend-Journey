//  creating http server using Rest api
let express = require('express');

let app = express();

app.use(express.json());

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
});

app.post('/getusers',(req,res)=>{

    console.log(req.body);
    return res.send("ok shivam is here");
});



let port = 3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

console.log("just commiting anything , study from tomorrow bcz right now i am finishing my college assigment , as i have to write around 200 pages");