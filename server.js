var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from cposc from node');
}).listen(8000);

console.log('Server running at http://*:8000/');
