const express = require("express");
const { restart } = require("nodemon");
const router = express.router();


router.get('/', (req, res, next) => {
    res.status(200).send({ sms: "Retornar os pedidos" })


})

router.post('/', (req, res, next) => {
            const pedido = (id_pruduct: req.Body.Id_product,

            })