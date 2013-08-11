var express = require('express');
var fs = require('index.html');
var app = express();

app.use(express.logger());

app.get('/', function(request, response) {
   var k = fs.readFileSync('./index.html')
   response.send(k.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
