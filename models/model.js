module.exports = function(){
  const Sequelize = require('sequelize');
  const sequelize = new Sequelize("passagensAereas", "root", "20584625D_s", {dialect: 'mysql', host: 'localhost'});
  return sequelize;
}