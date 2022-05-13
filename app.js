const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const corsConfig = require('./config/cors').cors
const app = express();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extends: false}));
app.use(bodyParser.json())
app.use(corsConfig)



app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404
    next(erro)
})
app.use((erro, req, res, next) => {
    res.status(erro.status || 500)
    res.send({
        erroe: erro.message
    })
})
module.exports = app;