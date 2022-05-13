exports.postCadsatro = (req, res, next) => {
    res.status(201).send({
        mss: "CADASTRO USUARIO"
    }
    )
}
exports.postLogin = (req, res, next) => {
    res.status(201).send({
        mss: "LOGIN USUARIO"
    }
    )
}