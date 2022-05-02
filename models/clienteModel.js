module.exports = function(app, param){

    let ClienteModel = {
        create: function(param){
            const Sequelize = require('sequelize');
            const db = app.models.model;

            let cliente = db.define("clientes", {
                nome: Sequelize.STRING,
                telefone: Sequelize.STRING,
                celular: Sequelize.STRING,
                rg: Sequelize.STRING,
                cpf: Sequelize.STRING,
                ativo: Sequelize.BOOLEAN,
                email: Sequelize.STRING
            },
            {
                createdAt: false,
                updatedAt: false
            });

            let ret = cliente.create({
                nome: param.nome,
                telefone: param.telefone, 
                celular: param.celular,
                rg: param.rg,
                cpf: param.cpf,
                ativo: true,
                email: param.email                 
            });

            if(ret){
                return true
            }
            
            return false;
        }
    };
    return ClienteModel;
};