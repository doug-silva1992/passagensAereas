module.exports = function(app){
    let VooController = {
        index: function(req, res){
            let voo = app.models.vooModel.create;

            if(ret){
                res.status(200).send(
                    { Sucesso: "Dados salvo com sucesso" }
                );
            }

            res.status(400).send(
                { Erro: "Falha aos consultar os dados" }
            );
        },
        create: function(req, res){
            let novo_voo = app.models.vooModel.create;

            let params = {
                fk_companhia: req.query.idCompanhia,
                fk_aeroportoOrigem: req.query.idAeroportoOrigem,
                fk_aeroportoDestino: req.query.idAeroportoDestino,
                horarioSaida: req.query.horarioSaida,
                horarioChegada: req.query.horarioChegada,
                qtdAssentosEconomica: req.query.qtdAssentosEconomica,
                qtdAssentosEconomicaPremium: req.query.qtdAssentosEconomicaPremium,
                qteAssentosExecutiva: req.query.qteAssentosExecutiva,
                qtdAssentosPrimeiraClasse: req.query.qtdAssentosPrimeiraClasse
            };

            let ret = novo_voo(params);

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
    return VooController;
};