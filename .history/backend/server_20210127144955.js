const http = require("http");
const app = ("./app")
const port = process.env.PORT || (3000);
const server = http.createServer();
app.use("./prod")

server.listen(3000);