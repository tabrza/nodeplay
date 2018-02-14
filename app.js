var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var readStream = fs.createReadStream(__dirname + '/htmlText.txt', 'utf8');
  readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');

console.log('listening to port 3000');
