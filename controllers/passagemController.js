module.exports = function(app){
    let VooController = {
        clientes: function(req, res){
            let params = {
                id_voo: '1',
                companhia: "Gol",
                aeroporto: "Aeroporto de Guarulhos",
                numero_assentos: '60', 
                cliente_nome: 'Douglas Valvere da Silva',
                cliente_rg: '49.239.601-2',
                cliente_cpf: '415.844.088-20',
                cliente_nacionalidade: 'Brasileira'
            };

            res.status(200).send(
                params
            );
        },

        voo: function(req, res){
            let params = {
                id_voo: '1',
                companhia: "Gol",
                aeroporto: "Aeroporto de Guarulhos",
                numero_assentos: '60', 
                cliente_nome: 'Douglas Valvere da Silva',
                cliente_rg: '49.239.601-2',
                cliente_cpf: '415.844.088-20',
                cliente_nacionalidade: 'Brasileira'
            };

            res.status(200).send(
                params
            );
        },

        create: function(req, res){
            let params = {
                quantidade_assentos: req.qtdassentos, 
                id_cliente: req.cliassento, 
                id_passagem: req.numvoo
            };

            res.status(200).send(
                params
            );
        }
    };
    return VooController;
};