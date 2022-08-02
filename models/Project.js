
const Sequelize = require('sequelize');
const db = require('./db');

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
});


Project.sync();
module.exports = Project;