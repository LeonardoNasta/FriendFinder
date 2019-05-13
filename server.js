var express = require("express");

//var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;

//initialize middleware.
app.use(express.json());
//body parser is now built in to express.
app.use(express.urlencoded({ extended: true }));

// Static directory
app.use(express.static('app/public'));

// import application routes
require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");

// Start our server.
app.listen(PORT, function() {
  console.log("Friend Finder listening on: http://localhost:" + PORT);
