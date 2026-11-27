const express = require ("express");

const app = express();

//using middleware
app.use(express.json());

let notes = [
    {
        id: 1,
        title: "Learn JavaScript",
        content: "Revise JavaScript fundamentals"
    },
    {
        id: 2,
        title: "Learn Express.js",
        content: "Practice creating REST APIs"
    },
    {
        id: 3,
        title: "Practice DSA",
        content: "Solve 3 array problems"
    },
    {
        id: 4,
        title: "Learn Node.js",
        content: "Understand modules and the HTTP server"
    },
    {
        id: 5,
        title: "Learn SQL",
        content: "Practice joins and subqueries"
    },
    {
        id: 6,
        title: "Build Notes API",
        content: "Implement CRUD operations using Express"
    },
    {
        id: 7,
        title: "Practice Git",
        content: "Learn Git commands and GitHub"
    },
    {
        id: 8,
        title: "Learn Middleware",
        content: "Understand how Express middleware works"
    },
    {
        id: 9,
        title: "Learn Databases",
        content: "Connect a database to a Node.js application"
    },
    {
        id: 10,
        title: "Build Backend Project",
        content: "Create and test a complete REST API"
    }
];


//  Build Your CRUD APIs get, post, put, delete

// 1. GET /notes — Fetch all notes
app.get("/notes",(req,res)=>{

    return res.status(200).json ({
        message: "user fetched successfully",
        notes,
    });

    });




 // 2. GET /notes/:id — Fetch a particular note
    app.get ("/notes/:id", (req,res)=>{

        const id = Number(req.params.id);

        // finding notes
        const note  = notes.find((note)=>{
           return  note.id === id;
        })

        // if note not exist
        if (!note) {
            return res.status(404).json ({
                message: "note not found",
            });
        }

        // if note exist
        return res.status(200).json ({
            message: "note found",
            note:note,
        });
});





// POST /notes — Create a new note
// Receive a title and content from Postman.
// Generate a unique ID, create a note object, and add it to the array.
// Return the newly created note with status 201.


app.post("/newNotes",(req,res)=>{


    const {title, content} = req.body || {}; 
    // js checks data from left to right first check req.body if data find then req.body extract it and if not found then it is empty.

    // check if title or content is missing

    if (!title || !content)  {
        return res.status(400).json ({
            message : "valid title and contnet are required",
        });
    }

    // Generating a new id
    const newId = notes.length >0 ? Math.max(...notes.map(note=>note.id)) +1 :1 ;

    const newNote = {
        id : newId,
        title,
        content,
        // we dont need to write    
        //  title: req.body.title,
        // content : req.body.content, as we have already extracted this
    };

    notes.push(newNote);


    return res.status(201).json ({
        message: "user created successfully",
        note: newNote,

    });

});



// PUT /notes/:id — Update a note
// Find a note using its ID.
// Replace its title and content with the new values received from Postman.
// Return the updated note.

app.put("/notes/updates/:id", (req,res)=>{

    // get the id
    const id = Number(req.params.id);

    const note = notes.find((note)=> note.id ===id);
    
    if (!note) {
        return res.status(404).json ({
            message : "Note not found",
        });
    }

    // update the content acc. to that notes
    note.title = req.body.title;
    note.content = req.body.content;

    res.status(200).json({
        message: "Note updated successfully",
        note: note,
    })


});




// 5 . DELETE /notes/:id — Delete a note
// Find the note by ID and remove it from the array.
// Return a success message. If the note doesn't exist, return 404.

app.delete("/notes/delete/:id",(req,res)=>{

    const id = Number(req.params.id);

    const index = notes.findIndex((note)=> note.id === id);

    if (index === -1) {
        return res.status(404).json({
           message: "note not found",
        });
    }

    notes.splice(index,1); // it should be notes not note bcz splice is a function of array

    return res.status(200).json({
        message: "user deleted successfully",
     
    });
});

app.use(express.static("public"));

module.exports = app; // exporting the app intance