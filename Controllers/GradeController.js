// controllers/gradeController.js
const Grade = require('../Models/Grade');
const Student = require('../Models/Student');
const Course = require('../Models/Course');

// Obtener todas las calificaciones
exports.getAllGrades = async (req, res) => {
    try {
        const grades = await Grade.findAll({
            include: [Student, Course],
        });
        res.json(grades);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener calificaciones' });
    }
};

// Obtener una calificación por ID
exports.getGradeById = async (req, res) => {
    const { id } = req.params;
    try {
        const grade = await Grade.findByPk(id, {
            include: [Student, Course],
        });
        if (grade) {
            res.json(grade);
        } else {
            res.status(404).json({ error: 'Calificación no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener calificación por ID' });
    }
};

// Crear una nueva calificación
exports.createGrade = async (req, res) => {
    const { studentId, courseId, grade } = req.body;
    try {
        const newGrade = await Grade.create({ studentId, courseId, grade });
        res.status(201).json(newGrade);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear calificación' });
    }
};

// Actualizar una calificación por ID
exports.updateGradeById = async (req, res) => {
    const { id } = req.params;
    const { studentId, courseId, grade } = req.body;
    try {
        const updatedGrade = await Grade.update({ studentId, courseId, grade }, { where: { id } });
        if (updatedGrade[0] === 1) {
            res.json({ message: 'Calificación actualizada correctamente' });
        } else {
            res.status(404).json({ error: 'Calificación no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar calificación por ID' });
    }
};

// Eliminar una calificación por ID
exports.deleteGradeById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRows = await Grade.destroy({ where: { id } });
        if (deletedRows === 1) {
            res.json({ message: 'Calificación eliminada correctamente' });
        } else {
            res.status(404).json({ error: 'Calificación no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar calificación por ID' });
    }
};
