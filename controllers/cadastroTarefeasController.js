let tarefas = [
    {
        id: 1,
        idUsuario: 1,
        descricao: 'Criar tela para gerenciar as tarefas.',
        setor: 'Desenvolvimento',
        prioridade: 'Alta',
        dataCadastro: '28/11/2024',
        status: 'A fazer'
    },
];

exports.listaTarefas = (req, res) => {
    res.status(200).send(tarefas);
}

exports.cadastrarTarefa = (req, res) => {
    try {
        const novaTarefa = req.body;
        tarefas.push(novaTarefa);
        res.status(201).send({ mensagem: 'Tarefa cadastrada com sucesso!' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Erro interno!');
    }
}

exports.editarTarefa = (req, res) => {
    const id = Number(req.params.id);
    const novasInformacoes = req.body;

    const tarefa = tarefas.find((tarefa) => tarefa.id === id);

    if (!tarefa) {
        return res.status(404).send({ mensagem: 'Tarefa não encontrada!' });
    }

    Object.assign(tarefa, novasInformacoes);

    res.status(200).send({ mensagem: 'Tarefa atualizada com sucesso!', tarefa });
};

exports.removerTarefa = (req, res) => {
    const id = Number(req.params.id);
    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    res.status(200).send(tarefas);
}
