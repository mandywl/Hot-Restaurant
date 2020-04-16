// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================


// Routes
// ===========================================================

app.get("/", function(req, res) {
  res.send("Welcome to Hot Resturant!");
});

// What does this route do?
app.get("/api/make", function(req, res) {
  //return res.json(characters);
  res.send("Make a reservation");
});

// What does this route do?
app.get("/api/table", function(req, res) {

  // What does this code do?
  return res.send("View reservation");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
