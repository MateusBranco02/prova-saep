const usuarios = [
    { id: 1, nome: 'João', email: 'joao@email.com' },
];

exports.listaDeUsuarios = (req, res) => {
    res.status(200).send(usuarios);
}

exports.cadastrarUsuario = (req, res) => {
    try {
        const novoUsuario = req.body;
        usuarios.push(novoUsuario);
        res.status(201).send({ mensagem: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Erro interno!');
    }
}
