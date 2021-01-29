const express = require('express');
const app = express();
const rotasProduct = ("./backend/rotas/product");
app.use("./product", rotasProduct)
app.use((req, res, next) => {



    res.status(200).send({ sms: "Application up" })

})

module.exports = app;