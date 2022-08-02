// conectando o node com o MySQL

const Sequelize = require('sequelize');
const sequelize = new Sequelize("projeto", "root", "123456", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log('Conexão com o Banco de Dados realizado com sucesso!');

}).catch(function(){
    console.log('ERROR conexão com o banco de dados não realizado com sucesso');
});

module.exports = sequelize;
