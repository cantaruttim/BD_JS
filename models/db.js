// conectando o node com o MySQL

const Sequelize = require('sequelize');
const sequelize = new Sequelize("projeto", "root", "123456", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log('Ação realizada com sucesso!');

}).catch(function(){
    console.log('ERROR Ação não realizado com sucesso');
});

module.exports = sequelize;
