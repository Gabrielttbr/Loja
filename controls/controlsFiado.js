const conexaobd = require('../db')

exports.getFiado = async (req, res, next) => {
    try {        
        const result = await conexaobd.executeQuery('SELECT * FROM fiado')
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({ erro: error})
    }
}
exports.getFiadoEspesfico =  async (req,res,next) => {
    const id = req.params.id_fiado
    try {
        const result = await conexaobd.executeQuery('SELECT * FROM fiado WHERE id_fiado = ?;', [id])
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({ erro: error})
    }
}
exports.postFiado = async (req, res, next) => {
    try {
        const result = await conexaobd.executeQuery('insert into fiado (nome, descricao) values (?,?);', [req.body.nome, req.body.descricao])
        return res.status(200).send({ mss: "Produto inserito com sucesso", response: result})
    } catch (error) {
        return res.status(500).send({ erro: error})
    }
}

exports.patchFiado = async (req, res, next) => {
    try {
        const result = await conexaobd.executeQuery('UPDATE fiado set nome = ?, descricao = ? where id_fiado = ?;', [req.body.nome, req.body.descricao, req.body.id_fiado])
        return res.status(200).send({ mss: "Produto atualizado com sucesso", response: result})
    } catch (error) {
        return res.status(500).send({ erro: error})
    }
}
exports.deleteFiado = async (req, res, next) => {
    try{
        const result = await conexaobd.executeQuery('DELETE FROM fiado where id_fiado = ?;', [req.body.id_fiado])
        return res.status(201).send({
            mss: "produto deletado com sucesso", response: result 
        })
    }catch( error){
        return res.status(500).send({ erro: error})
    }
}
