module.exports = function(app){
    let ClienteController = {
        create: function(req, res){
            let novo_cliente = app.models.clienteModel.create;

            let params = {
                nome: req.query.nome,
                telefone: req.query.telefone,
                celular: req.query.celular,
                rg: req.query.rg,
                cpf: req.query.cpf,
                email: req.query.email
            };
            
            let ret = novo_cliente(params);

            if(ret){
                res.status(200).send(
                    { Sucesso: "Dados salvo com sucesso" }
                );
            }

            res.status(400).send(
                { Erro: "Falha aos salvar os dados" }
            );
        }
    };
    return ClienteController;
};