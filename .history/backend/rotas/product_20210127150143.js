const express = require('express');
const router = express.Router();


router.get('/', (req, res, next, ) => {

    res.status(200).send({ sms: "Rota de Produtos " });

});

router.post("/", (req, res, next) => {

    res.status(201).send({ sms: " Rota de produtos no metodo Post" });

});

router.get("/", req, res, next)

module.exports = router;