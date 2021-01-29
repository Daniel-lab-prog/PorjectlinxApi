const express = require('require');

const app = express();

//rota não e
const rotasProduct = require("./backend/rotas/product");
const rotasProduct = require("./backend/rotas/pedido");

app.use("./product", rotasProduct);
app.use("./pedido", rotasProduct);

app.use9((req, res, next) => {
    const error = new Error('não encontrado ');
    erro.status(404);
    next(error)
})