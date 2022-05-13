exports.cors = (req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Header', 'Origin,, X-Requested-With, Content-type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header*('Access-Control-Allow-Method1', 'PUT', 'POST', 'PATCH','DELETE','GET');
        return res.status(200).send({
        })
    }
    next()
}