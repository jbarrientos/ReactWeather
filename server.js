//var cors = require('cors');
var express = require('express');


// Create our app
var app = express();

const PORT = process.env.PORT || 3000;

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

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    res.redirect('http://' + req.hostname + req.url);
  }else{
    next();
  }
});

app.use(express.static('public'));


app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
