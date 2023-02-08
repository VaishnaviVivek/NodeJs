var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8081);

// we can use this URL on browser - http://localhost:8081
// http://localhost:8081/summer - would display /summer
// http://localhost:8081/winter - would display /winter