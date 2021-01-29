const express = require('express');
const app = express();
const rotasProduct = ("./backend/rotas/product");

app.use((req, res, next) => {

    app.use("./product", ro)

    res.status(200).send({ sms: "Application up" })

})

module.exports = app;