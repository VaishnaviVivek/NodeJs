var http=require('http');
var dt = require('./myFirstModule')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html)'});
    res.write("The date n time are currently "+dt.myDateTime());
}).listen(8082);