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
    }
});

const Project = db.define('Projects', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
         allowNull: false,
         primaryKey: true
    },
    Project_Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Responsabile: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})


// criar a tabela
//User.sync();
module.exports = User;
Project.sync();
module.exports = Project;