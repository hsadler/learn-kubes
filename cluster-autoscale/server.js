
var http = require('http');

var handleRequest = function(request, response) {
	console.log('Received request for URL: ' + request.url);
	var x = 0.0001;
	for (var i = 0; i <= 100000000; i++) {
		x += Math.sqrt(x);
	}
	response.writeHead(200);
	response.end('OK... x = ' + x);
};

var www = http.createServer(handleRequest);
www.listen(8080);
