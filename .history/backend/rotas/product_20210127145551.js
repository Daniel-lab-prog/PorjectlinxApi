const express = require('express');
const router = express.Router();


router.get('/', (req, res, next, ) => {

    res.status(200).send({ sms: "Rota de Produtos " })

})

router.post("/", (req, res, ne))