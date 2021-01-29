const { Router } = require('express');
const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;


//RETORNA UM PRODUTO
router.get("/", (req, res, next) => { mysql.getConnection(E) })



//INSERI UM PRODUTO






// DELETA OS PRODUTOS

router.delete("/", (req, res, next) => {
    const id = req.params.id_product
    res.status(201).send({ sm: "rota DELETE de um produto exclusivo ", producto: productcriado })
});



module.exports = router;