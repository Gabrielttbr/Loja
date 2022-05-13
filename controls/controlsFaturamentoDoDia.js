const conexaobd = require('../db')

exports.getFaturamentos = async (req, res, next) => { 
    try{
        const result  = await conexaobd.executeQuery('SELECT * FROM caixa;')
        return res.status(200).send(result)
    } catch(erro){
        return res.status(500).send(erro)
    }
 
}
exports.getFaturamentoEspesificio = async (req, res, next) => {
    try{
        const result  = await conexaobd.executeQuery('SELECT * FROM caixa WHERE id_caixa = ?', [req.params.id_caixa])
        return res.status(200).send(result)
    } catch(erro){
        return res.status(500).send(erro)
    }
}
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
exports.patchFaturamento = (req, res, next) => {
    res.status(200).send(
        {
            mss: "PATCH faturamento"
        }
    )
}
exports.deleteFaturamento = (req, res, next) => {
    res.status(200).send(
        {
            mss: "DELETE faturamneto"
        }
    )
}