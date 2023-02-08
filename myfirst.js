//display hello world on web browser

var http=require('http');

//create a server object:
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'}); //write a response to the client
    res.end('Hello World');//end the response
}).listen(8081);//the server object listens on port 8081

// we can use this URL on browser - http://localhost:8081