const conexaobd = require('../db')

// MOSTRA TODOS OS FATURAMENTOS REGISTRADO
exports.getFaturamentos = async (req, res, next) => { 
    try{
        const result  = await conexaobd.executeQuery('SELECT * FROM caixa;')
        return res.status(200).send(result)
    } catch(erro){
        return res.status(500).send(erro)
    }
 
}
// MOSTRA UM FATURAMENTO ESPESÍFICO
exports.getFaturamentoEspesificio = async (req, res, next) => {
    try{
        const result  = await conexaobd.executeQuery('SELECT * FROM caixa WHERE id_caixa = ?', [req.params.id_caixa])
        return res.status(200).send(result)
    } catch(erro){
        return res.status(500).send(erro)
    }
}
// asd
// CADASTRA UM FATURAMENTO
exports.postFaturamento = async (req, res, next) => {
    try{
        const result  = await conexaobd.executeQuery('INSERT INTO caixa (data, dinheiro, cartao, pix, quemfechou) VALUES (curdate(),?,?,?,?);',
         ([req.body.dinheiro, req.body.cartao, req.body.pix, req.body.quemfechou]))
        return res.status(200).send({
            mss: "Produto inserido com sucesso",
            response: result
        })
    } catch(erro){
        return res.status(500).send(erro)
    }

}

// ATUALIZA UM FATURAMENTO
exports.patchFaturamento = async (req, res, next) => {
    try{
        const result = await conexaobd.executeQuery('update caixa set data = curdate(), dinheiro = ?, cartao = ?, pix = ?, quemfechou = ? where id_caixa = ?;',
        [req.body.dinheiro, req.body.cartao, req.body.pix, req.body.quemfechou, req.body.id_caixa])
        return res.status(200).send({
            mss: "Produto alterado com sucesso",
            response: result,
        })
        
    }catch(erro){
        return res.status(500).send(erro)
    }
}

// DELETA UM FATURAMENTO
exports.deleteFaturamento = async (req, res, next) => {
    try{
        const result = await conexaobd.executeQuery('delete from caixa where id_caixa = ?;',
        [req.body.id_caixa])
        return res.status(200).send({
            mss: "Produto deletado como sucesso",
            response: result,
        })
        
    }catch(erro){
        return res.status(500).send(erro)
    }
}