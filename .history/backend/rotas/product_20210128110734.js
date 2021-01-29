const { Router } = require('express');
const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;


//RETORNA UM PRODUTO
router.get('/', (req, res, next, ) => {

    res.status(200).send({ sms: "Rota de Produtos " });

});
//INSERI UM PRODUTO

mysql.post("/", (req, res, next) => mysql.getConnection(err))

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