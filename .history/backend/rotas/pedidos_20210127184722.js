const express = require("express");
const { restart } = require("nodemon");
const router = express.router();

// retornar pedido
router.get('/', (req, res, next) => {
    res.status(200).send({ sms: "Retornar os pedidos" })


})

// pedido foi criado 
router.post('/', (req, res, next) => {
    const pedido = {
        id_pruduct: req.Body.Id_product,
        quantidade: req.Body.quantidade,

    }
    res.status(201).send({ sms: "O pedido foi criado ", pedidocriado: pedido });

})

// restaurar os dados do pedido

router.get("/:id_product", (req, res, next) => {
    const id = req.params.Id_product
    res.stauts(200).send({ sms: " retornar pedido ", id_product })
});