var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Book = require("./BookModel");
const { json } = require("body-parser");

var port = 8081;
var db = "mongodb://localhost/example";
mongoose.connect(db);

app.get('/books', function(req,res) {
  Book.find({})
  .exec( function(err, result) {  
  if(err) {
   res.send("wrong");
  }
  else {
    res.json(result);
    console.log(result);
  }
  });
});

app.listen(port, function () {
  console.log("app port " + port);
});
