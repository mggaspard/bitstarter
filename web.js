var express = require('express');
var app = express();
var fs = require('fs');
var index = fs.readFileSync('index.html','utf-8');
var buffer = new Buffer(index);

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
