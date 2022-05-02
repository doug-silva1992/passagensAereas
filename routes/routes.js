module.exports = function(app){
  //Rotas para voo
  let voos = app.controllers.vooController;
  app.get('/listar_voo', voos.index);
  app.post('/adicionar_voo', voos.create);

  //Rotas para cliente
  let clientes = app.controllers.clienteController;
  app.post('/adicionar_cliente', clientes.create);

  //Teste Banco
  //let banco = app.models.model;
  //app.get('/teste_banco', banco);

};