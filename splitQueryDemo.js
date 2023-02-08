var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;//Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8081);