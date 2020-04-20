// Require dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// Set up the Express app
const app = express();
const PORT = 3001;

// Include body parser for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serving static files (added this to get css and js files to load properly):
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


// ========== ROUTES ==========

// Homepage route
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

// Notes route
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname + "/public/notes.html"))
})

// API routes
// (GET) API Notes route
app.get("/api/notes", function(req, res){
    res.sendFile(__dirname + "/db/db.json");
});

// // (POST) API Notes route
app.post("/api/notes", function(req, res){
    // save the new note to a variable
    // push the new note to db.json
    // respond to client with the new note

});


// Delete request will go here




// ============================




// Start server for listening
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})