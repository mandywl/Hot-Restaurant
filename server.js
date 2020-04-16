// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Data
// ===========================================================

// Routes
// ===========================================================

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend/home.html"));
});

// What does this route do?
app.get("/reservation", function (req, res) {
  //return res.json(characters);
  res.sendFile(path.join(__dirname, "./frontend/reservation.html"));
});

// What does this route do?
app.get("/table", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend/table.html"));
  // What does this code do?
});

// Listener
// ===========================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
