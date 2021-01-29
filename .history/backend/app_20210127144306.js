const express = require('express');
const app = express();
const routes

app.use((req, res, next) => {

    res.status(200).send({ sms: "Application up" })

})

module.exports = app;