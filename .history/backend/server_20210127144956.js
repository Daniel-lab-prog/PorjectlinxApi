const http = require("http");
const app = ("./app")
const port = process.env.PORT || (3000);
const server = http.createServer();
app.use("./product")

server.listen(3000);