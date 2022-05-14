const bcrypt = require("bcrypt");
const conexaobd = require("../db");

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
exports.postLogin = (req, res, next) => {
  res.status(201).send({
    mss: "LOGIN USUARIO",
  });
};
