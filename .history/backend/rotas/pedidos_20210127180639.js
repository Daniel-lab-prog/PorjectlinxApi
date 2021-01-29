const express = require("express");
const { restart } = require("nodemon");
const router = express.router();


router.get('/', (req, res, next) => {
    res.status(200).send({ sms: "Retornar os pedidos" })


})