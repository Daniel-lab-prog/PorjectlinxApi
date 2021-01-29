const express = require('express');
const router = express.Router();

//RETORNA UM PRODUTO
router.get('/', (req, res, next, ) => {

    res.status(200).send({ sms: "Rota de Produtos " });

});
//inser
router.post("/", (req, res, next) => {

    res.status(201).send({ sms: " Rota de produtos no metodo Post" });

});

router.get("/id_product", (req, res, next) => {
    const id = req.params.id_product
    res.status(201).send({ sm: "rota GET de um produto exclusivo ", id: id })
})

module.exports = router;