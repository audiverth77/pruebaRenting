// controllers/courseController.js
const Course = require('../Models/Course'); // Asegúrate de que la ruta sea correcta

// Obtener todos los cursos
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener cursos' });
    }
};

// Obtener un curso por ID
exports.getCourseById = async (req, res) => {
    const { id } = req.params;
    try {
        const course = await Course.findByPk(id);
        if (course) {
            res.json(course);
        } else {
            res.status(404).json({ error: 'Curso no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener curso por ID' });
    }
};

// Crear un nuevo curso
exports.createCourse = async (req, res) => {
    const { nameCourse, descriptionCourse } = req.body;
    try {
        const newCourse = await Course.create({ nameCourse, descriptionCourse });
        res.status(201).json(newCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear curso' });
    }
};

// Actualizar un curso por ID
exports.updateCourseById = async (req, res) => {
    const { id } = req.params;
    const { nameCourse, descriptionCourse } = req.body;
    try {
        const updatedCourse = await Course.update({ nameCourse, descriptionCourse }, { where: { id } });
        if (updatedCourse[0] === 1) {
            res.json({ message: 'Curso actualizado correctamente' });
        } else {
            res.status(404).json({ error: 'Curso no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar curso por ID' });
    }
};

// Eliminar un curso por ID
exports.deleteCourseById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRows = await Course.destroy({ where: { id } });
        if (deletedRows === 1) {
            res.json({ message: 'Curso eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Curso no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar curso por ID' });
    }
};
