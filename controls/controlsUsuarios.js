const bcrypt = require('bcrypt');
const conexaobd = require('../db');

exports.postCadsatro = async (req, res, next) => {
    bcrypt.hash(req.body.senha, 10, async (erroBcrypt, hash) => {
       try{
           const result = await conexaobd.executeQuery('insert into usuario (email, nome, sobrenome, senha) values (?, ?,?,?);', [req.body.email, req.body.nome, req.body.sobrenome, hash])
           res.status(200).send({
               mss: "Usuario inserido com sucesso",
               id_usuario: req.insertId    
           })
       }catch(erro){
           return req.status(500).send({mss: erro})
       }
    })
}
exports.postLogin = (req, res, next) => {
    res.status(201).send({
        mss: "LOGIN USUARIO"
    }
    )
}