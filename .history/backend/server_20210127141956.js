const http = require('http');
const app = require("./app");
V
const server = http.creatServer(app);
const port = process.env || 8080;


server.listen(port)