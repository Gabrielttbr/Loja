exports.getFaturamentos = (req, res, next) => { 
    return res.status(201).send(
        {
            mss: "GET de todos os caixas"
        }
    )
}
exports.getFaturamentoEspesificio =  (req, res, next) => {
    const id = req.params.id_caixa
    res.status(200).send({
        mss: "GET espesifico",
        id_caixa:  id
    })
}
exports.postFaturamento = (req, res, next) => {
    res.status(201).send({
        mss: "POST faturamento"
    }
    )

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