// criando as tabelas

const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('Users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
         allowNull: false,
         primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    project_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    responsible: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    time_spend: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// criar a tabela
//User.sync();
//User.sync({ alter: true })
module.exports = User;

await User.destroy({
    where: { id: '6' },
  });