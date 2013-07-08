var express = require('express');
var fs = require('fs');
var content = fs.readFileSync('index.html', 'utf-8');
var buffer = new Buffer(content, 'utf-8');

//console.log(content);
//console.log(buffer.toString());
//return;

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

