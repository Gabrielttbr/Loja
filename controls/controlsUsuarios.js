const bcrypt = require("bcrypt");
const conexaobd = require("../db");
const jwt = require('jsonwebtoken')

// CADASTRO DE USUAŔIO
exports.postCadsatro = async (req, res, next) => {
  bcrypt.hash(req.body.senha, 10, async (erroBcrypt, hash) => {
    if (erroBcrypt) return res.status(500).send({ erro: erroBcrypt });

    const result = await conexaobd.executeQuery(
      "select * from usuario where email = ?;",
      [req.body.email]
    );
    if( await result.length > 0){return res.status(200).send({message: "Email já cadastro"})}
    
    try {
      const result = await conexaobd.executeQuery(
        "insert into usuario (email, nome, sobrenome, senha) values (?, ?,?,?);",
        [req.body.email, req.body.nome, req.body.sobrenome, hash]
      );
      return res.status(200).send({
        mss: "Usuario inserido com sucesso",
        id_usuario: req.insertId,
      });
    } catch (erro) {
      return res.status(500).send({ erro });
    }
  });
};


// SEÇÃO DE LOGAR DO USUÁRIO
exports.postLogin = async (req, res, next) => {
  const result = await conexaobd.executeQuery(
    "select * from usuario where email = ?;",
    [req.body.email]
  );
  if(result.length < 1) return res.status(401).send({message: " Falha na autentificação!"})
  // COMPARA SE A SENHA E VÁLIDA
  bcrypt.compare(req.body.senha, result[0].senha, (erro, resultado) => {
    if (erro) return res.status(401).send(" Falha na autentificação!");
    if (resultado) {
      let token = jwt.sign({
        id_usuario: result[0].id_usuario,
        email: result[0].email
      }, process.env.JWT_KEY, { expiresIn: '1h'})
      
      return res.status(200).send({
        message:"Autentificado com sucesso!",
        token: token 
      });

    }
    return res.status(401).send(" Falha na autentificação!");
  })
};
