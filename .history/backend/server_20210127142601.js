var http = require('http');



var server = http.createServer(function(request, response) {
    console.log('Request!')
});
server.listen(3000)