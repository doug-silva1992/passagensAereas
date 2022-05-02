module.exports = function(app, param){

    let VooModel = {
        index: function(param){

        },
        create: function(param){
            const Sequelize = require('sequelize');
            const db = app.models.model;
            const var_dump = require('var_dump')
            let insert_assentos;
            
            let voo = db.define("voos", {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                fk_companhia: Sequelize.STRING,
                fk_aeroporto_origen: Sequelize.STRING,
                fk_aeroporto_destino: Sequelize.STRING,
                horario_saida: Sequelize.STRING,
                horario_chegada: Sequelize.STRING
            });

            //let assentos = db.define("assentos", {
            //    numero_assento: Sequelize.INTEGER,
            //    fk_classe: Sequelize.INTEGER,
            //    fk_voo: Sequelize.INTEGER
            //});
            
            let ret_voo = voo.create({
                fk_companhia: param.fk_companhia,
                fk_aeroporto_origen: param.fk_aeroportoOrigem,
                fk_aeroporto_destino: param.fk_aeroportoDestino,
                horario_saida: param.horarioSaida,
                horario_chegada: param.horarioChegada
            });

            for (let i = 0; i < parseInt(param.qtdAssentosEconômica); i++) {
                console.log(i);
                insert_assentos[i]['numero_assento'] = i;
                insert_assentos[i]['fk_classe'] = 1;
                insert_assentos[i]['fk_voo'] = ret_voo.then(result => result.id);
            }

            //let obj = Object.assign({}, insert_assentos);

            //console.log(var_dump(insert_assentos));

            //let ret_assento = assentos.bulkCreate({
            //    fk_companhia: param.fk_companhia,
            //    fk_aeroporto_origen: param.fk_aeroportoOrigem,
            //    fk_aeroporto_destino: param.fk_aeroportoDestino,
            //    horario_saida: param.horarioSaida,
            //    horario_chegada: param.horarioChegada
            //});
            
            if(ret_voo){
                return true
            }
            
            return false;
        }
    };
    return VooModel;
};