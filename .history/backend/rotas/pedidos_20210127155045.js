const express = require('require');

const app = express();

const rotasProduct = require("./backend/rotas/product");
const rotasProduct = require("./backend/rotas/pedido");

app.use("/prod")