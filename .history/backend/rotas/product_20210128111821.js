const { Router } = require('express');
const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;


//RETORNA UM PRODUTO
router.get('/', (req, res, next, ) => {

            mysql.getConnection((error, conn) => {
                    conn.Query("INSERT INTO PRODUCT(none,preço,maximo preço,minimo preço)",

                        [req.body.nome, req.body.preço, req.body.maximopreço, req.body.minimopreço],
                        (error, resultado, field) => { conn.release(); })
                }
            })


        //INSERI UM PRODUTO

        mysql.post("/", (req, res, next) => mysql.getConnection(error, corn))

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