var http = require('http');
var express = require('express');


var server = http.createServer(function(request, response) {
    console.log('Request!')
});
server.listen(8080)