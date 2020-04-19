// Require dependencies
const express = require("express");
const path = require("path");

// Set up the Express app
const app = express();
const PORT = 3001;

// Include body parser for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





// Start server for listening
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})