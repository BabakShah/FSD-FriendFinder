// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express App
var app = express();
var PORT = 3000;

var  = [ 

  {
    
  },

];

// Routes to html files
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});




// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});