const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConfig');

const Student = sequelize.define('Student', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
});

module.exports = Student;
