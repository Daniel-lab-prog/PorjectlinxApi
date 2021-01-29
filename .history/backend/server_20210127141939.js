const http = require('http');
const app = require("./app");
const server = http.creatServer(app);
const port = process.env || 8080;
const app = require("./app");

server.listen(port)