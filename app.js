const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//  TODO

//  Start Server
const port = 3000;
app.listen(port, () => {
  console.log("Server stared on port " + port + "...");
});
