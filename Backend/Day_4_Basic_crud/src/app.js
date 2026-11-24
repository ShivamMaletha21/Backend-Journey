let express =  require ("express");

let app = express();

app.use (express.json());
// creating empty array
let users = [];

// creating api
app.post ("/get-users" ,(req, res)=> {
    
    users.push(...req.body);

    return res.status(201).json ({
        message: "user created successfully",
    });

});


// read
app.get ("/users", (req, res) => {

    return res.status(200).json ( {
        
        message : "User fetched successfully",
        users,
    });
});

// update only age (use patch for single value)
app.patch ("/users/update/:index", (req,res)=>{

    // destructuring idex value and age
    let {index} = req.params; // we get index for the url that we type in postman
    let {age} = req.body; // we get age that we type in postman body will saves here

 users[index].age = age; // 
 
 return res.send ("ok");

});

// update whole data (using put)
app.put ("/users/update/:index", (req,res)=>{

    let {index} = req.params;
    users [index] = req.body; 

    return res.send ("user updated successfully");

});

module.exports = app;

// note
//  (Square brackets): Used to access an array element using its index.
// {} (Curly braces): Used to define objects, blocks of code, and destructuring.