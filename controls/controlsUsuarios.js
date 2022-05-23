const bcrypt = require("bcrypt");
const conexaobd = require("../db");
const jwt = require('jsonwebtoken')

// CADASTRO DE USUAŔIO
exports.postCadsatro = async (req, res, next) => {
  // INÍCIA A CRIPITÓGRAFIA DA SENHA 
  bcrypt.hash(req.body.senha, 10, async (erroBcrypt, hash) => {
    // SE OCORRER ALGUM ERRO NA CRIPITÓGRAFIA DA SENHA, MOSTRA O ERRO
    if (erroBcrypt) return res.status(500).send({ erro: erroBcrypt });
      // VÉFICA SE O E-MAIL JÁ ESTA CADASTRADO 
    const result = await conexaobd.executeQuery(
      "select * from usuario where email = ?;",
      [req.body.email]
    );
    // SE O EMAIL ESTIVER CADASTRADO RETORNA UMA MENSAGEM AVISANDO!
    if( await result.length > 0){return res.status(200).send({message: "Email já cadastro"})}
    
    // SE O EMAIL NÃO ESTIVER CADASTRADO INCIA A INCERÇÃO DO DADOS NO BANCO DE DADOS
    try {
      const result = await conexaobd.executeQuery(
        "insert into usuario (email, nome, sobrenome, senha) values (?, ?,?,?);",
        [req.body.email, req.body.nome, req.body.sobrenome, hash]
      );
      // CASO NÃO ACONTEÇA NENHUM ERRO RETORNA UMA MSS AVISANDO QUE O DADO FOI INSERIDO!
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
  // VÉFICA SE O E-MAIL JÁ ESTÁ NO CADASTRO DO BANCOS DE DADOS
  const result = await conexaobd.executeQuery(
    "select * from usuario where email = ?;",
    [req.body.email]
  );
  // SE ESTIVER CADASTRADO RETORNA ERRO
  if(result.length < 1) return res.status(401).send({message: " Falha na autentificação!",   usuarioValid: false})
  // COMPARA SE A SENHA E VÁLIDA
  bcrypt.compare(req.body.senha, result[0].senha, (erro, resultado) => {
    if (erro) return res.status(401).send({ 
      message: "Falha na autentificação!",
      usuarioValid: false
    });
    if (resultado) {
      let token = jwt.sign({
        id_usuario: result[0].id_usuario,
        email: result[0].email
      }, process.env.JWT_KEY, { expiresIn: '1h'})
      
      return res.status(200).send({
        message:"Autentificado com sucesso!",
        token: token,
        usuarioValid: true

      });

    }
    return res.status(401).send(" Falha na autentificação!");
  })
};
