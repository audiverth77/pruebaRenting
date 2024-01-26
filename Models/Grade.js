// models/grade.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConfig');
const Student = require('./Student');
const Course = require('./Course');

const Grade = sequelize.define('Grade', {
    grade: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: true,
    },
});

Grade.belongsTo(Student, { foreignKey: 'studentId' });
Grade.belongsTo(Course, { foreignKey: 'courseId' });

module.exports = Grade;
