// app.js
const express = require('express');
const sequelize = require('./sequelizeConfig');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config(); // Cargar variables de entorno desde el archivo .env

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Asociar rutas a la aplicación
const studentRoutes = require('./routes/StudentRoutes');
const professorRoutes = require('./routes/ProfessorRoutes');
const courseRoutes = require('./routes/CourseRoutes');
const gradeRoutes = require('./routes/GradeRoutes');

app.use('/api', studentRoutes);
app.use('/api', professorRoutes);
app.use('/api', courseRoutes);
app.use('/api', gradeRoutes);

// Configurar Sequelize
sequelize
    .sync({ force: false }) // Puedes cambiar a 'true' si quieres re-crear las tablas en cada reinicio
    .then(() => {
        console.log('Conexión a la base de datos establecida correctamente');
    })
    .catch((error) => {
        console.error('Error al conectar con la base de datos:', error);
    });

// Escuchar en el puerto
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
