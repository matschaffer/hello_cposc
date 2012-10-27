var os = require('os'),
    http = require('http'),
    config = require('config'),
    redis = require('redis'),
    db = redis.createClient(config.redis.port, config.redis.host);

http.createServer(function (req, res) {
  db.get('message', function (err, message) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hostname: ' + os.hostname() + '\n');
    if (message) {
      res.end(message);
    } else {
      res.end('Hello from cposc from node');
    }
  });
}).listen(8000);

console.log('Server running at http://*:8000/');
