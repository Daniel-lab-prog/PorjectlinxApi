const { Router } = require('express');
const express = require('express');
const router = express.Router();
const mysql = require


//RETORNA UM PRODUTO
router.get('/', (req, res, next, ) => {

    res.status(200).send({ sms: "Rota de Produtos " });

});
//INSERI UM PRODUTO
router.post("/", (req, res, next) => {

    res.status(201).send({ sms: " Rota de produtos no metodo Post" });
    const product = {
        name: req,
        body,
        preço,

        preço: req,
        body,
        preço,

        maxproduct: req,
        body,
        preço,
        minproduct: req,
        body,
        preço
    }
});
// RETORNA OS DADOS DE UM PRODUTO 

router.patch("/", (req, res, next) => {
    const id = req.params.id_product
    res.status(201).send({ sm: "rota PATCH de um produto exclusivo ", id: id })
});

// DELETA OS PRODUTOS

router.delete("/", (req, res, next) => {
    const id = req.params.id_product
    res.status(201).send({ sm: "rota DELETE de um produto exclusivo ", producto: productcriado })
});



module.exports = router;