//var cors = require('cors');
var express = require('express');


// Create our app
var app = express();

// app.use(function (req, res, next) {
//
//   res.setHeader('Access-Control-Allow-Origin', '*');
//
//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//
//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   next();
// });



app.use(express.static('public'));


app.listen(3000, function(){
  console.log('Express server is up on port 3000.');
});
