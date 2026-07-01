function protegerRota(req, res, next) {

    if(!req.session.usuario){

        return res.status(401).json({
            mensagem: 'Acesso negado. Faça login primeiro!'
        })
    }
    next();
}

module.exports = protegerRota;