const { Router } = require('express');
const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;


//RETORNA UM PRODUTO



//INSERI UM PRODUTO

router.post("/", (req, res, next) => {
    mysql.getConnection((error, next) => {
        conn.query(
            "INSERT PRODUCT(nome,preço,maximovalor,minimovalor)",

            [req.body.nome, req.body.preço, req.body.maximovalor, req.body.minimovalor],

            (error, resultado, fields) => {
                conn.release();
                if (error) {
                    res.status(500).send({
                        error: 'ERROR',
                        7
                    })
                }
            }
        )

    })
})



// DELETA OS PRODUTOS

router.delete("/", (req, res, next) => {
    const id = req.params.id_product
    res.status(201).send({ sm: "rota DELETE de um produto exclusivo ", producto: productcriado })
});



module.exports = router;
module.exports = router;