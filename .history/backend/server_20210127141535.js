const http = require('http');
const port = process.env || 8080;
const app = require("./app");
const server = http.creatServer();
server.listen(port)