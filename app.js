//  Require NPM Modules
//  Install using "npm i express body-parser"
const express = require("express");
const bodyParser = require("body-parser");

//Create new App, running express
const app = express();

//  Load the home page
app.get("/", function (req, res) {
  res.send("Home Page Loaded"); //  Replace with page content
});

//  Setup server to run on the PORT specified below
const PORT = 3000; //Change to desired port
app.listen(PORT, function () {
  console.log("Server is up and running on " + PORT);
});
