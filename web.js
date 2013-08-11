var express = require('express');
var fs = require('index.html');
var app = express();
var buffer = new Buffer(fs.readFileSync('index.html',string));

app.use(express.logger());

app.get('/', function(request, response) {
   response.send(buffer.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
