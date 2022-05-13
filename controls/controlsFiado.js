exports.getFiado = (req, res, next) => {
    res.status(200).send(
        {
            mss: "GET todos os fiado"
        }
    )
}
exports.getFiadoEspesfico =  (req,res,next) => {
    const id = req.params.id_fiado
    res.status(200).send(
        {
            mss: "Get do fiado espesífico",
            id_fiado: id
        }
    )
}
exports.postFiado = (req, res, next) => {
    res.status(201).send(
        {
            mss: "POST fiado"
        }
    )
}

exports.patchFiado = (req, res, next) => {
    res.status(201).send(
        {
            mss: "PATCH fiado"
        }
    )
}
exports.deleteFiado = (req, res, next) => {
    res.status(201).send(
        {
            mss: "DELETE fiado"
        }
    )
}
