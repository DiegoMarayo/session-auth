const USUARIO_MOCKADO = {
    id: 1,
    nome: 'Diego',
    email: 'diego@gmail.com',
    usuario: 'admin',
    senha: '123456'
};

function rotaPublica(req, res) {
    res.json({
        mensagem: 'Essa rota é pública',
        logado: !!req.session.usuario
    });
}

function login(req, res) {

    const { usuario, senha } = req.body;

    if (
        usuario === USUARIO_MOCKADO.usuario &&
        senha === USUARIO_MOCKADO.senha
    ) {

        req.session.usuario = {
            id: USUARIO_MOCKADO.id,
            nome: USUARIO_MOCKADO.nome,
            email: USUARIO_MOCKADO.email
        };

        return res.json({
            mensagem: 'Login realizado com sucesso',
            usuario: req.session.usuario
        });
    }

    return res.status(401).json({
        mensagem: 'Usuário ou senha inválidos'
    });
}

function rotaProtegida(req, res) {

    res.json({
        mensagem: 'Você acessou uma rota protegida usando Session',
        usuario: req.session.usuario
    });
}

function status(req, res) {

    res.json({
        logado: !!req.session.usuario,
        usuario: req.session.usuario || null
    });
}

function logout(req, res) {

    req.session.destroy((err) => {

        if (err) {
            return res.status(500).json({
                mensagem: 'Erro ao realizar logout'
            });
        }

        res.clearCookie('connect.sid');

        res.json({
            mensagem: 'Logout realizado com sucesso'
        });

    });
}

module.exports = {
    rotaPublica,
    login,
    rotaProtegida,
    status,
    logout
};