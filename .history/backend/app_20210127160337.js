const express = require('express');
const app = express();
const rotasProduct = ("./backend/rotas/product");
app.use("./product", rotasProduct);
app.use((req, res, next) => {
    const express = require('require');

    const app = express();

    //rota não encontrada 
    const rotasProduct = require("./backend/rotas/product");
    const rotasProduct = require("./backend/rotas/pedido");

    app.use("./product", rotasProduct);
    app.use("./pedido", rotasProduct);

    app.use((req, res, next) => {
        const error = new Error('não encontrado ');
        erro.status(404);
        next(error)
    })
    app.use((error, req, res, next) => {
        res.status(error.status || 500)
        return res.send({
            err
        })
    })


    res.status(200).send({ sms: "Application up" })

})

module.exports = app;