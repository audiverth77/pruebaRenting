const { Sequelize } = require('sequelize');

// Lee las variables de entorno desde el archivo .env
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        // host: process.env.DB_HOST,
        host: '127.0.0.1',
        dialect: 'mssql',
        dialectOptions: {
            options: {
                connectTimeout: 30000, // Ajusta el tiempo de espera según sea necesario (en milisegundos)
            },
        }
    }
);

module.exports = sequelize;
