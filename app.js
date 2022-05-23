const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors');

const routerFaturamento = require('./router/faturamentoDoDia')
const routerFiado = require('./router/fiado')
const routerUsuario = require('./router/usuario')
const app = express();

/*==============================================================================================*/
//                                                                                              //
//         CONFIGURANDO O AMBIENTE, ADICIONANDO O MORGAN, BODYPARSER E CONFIGURANDO O CORS      //
//                                                                                              //
/*==============================================================================================*/
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extends: false}));
app.use(bodyParser.json())
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
/*==============================================================================================*/
//                                                                                              //
//                                  ROTAS                                                       //
//                                                                                              //
/*==============================================================================================*/


app.use('/faturamento', routerFaturamento)
app.use('/fiado', routerFiado)
app.use('/usuario', routerUsuario )





/*==============================================================================================*/
//                                                                                              //
//                           TRATAMENTO DE ERRO, CASO NÃO ENCONTRE NENHUMA ROTA                 //
//                                                                                              //
/*==============================================================================================*/

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