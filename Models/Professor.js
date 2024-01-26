const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConfig');
const Professor = sequelize.define('Professor', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Professor;
