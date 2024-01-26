const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConfig');

const Course = sequelize.define('Course', {
    nameCourse: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descriptionCourse: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Course;
