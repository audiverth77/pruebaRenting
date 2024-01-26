// controllers/studentController.js
const Student = require('../Models/Student');

// Obtener todos los estudiantes
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener estudiantes' });
    }
};

// Obtener un estudiante por ID
exports.getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.findByPk(id);
        if (student) {
            res.json(student);
        } else {
            res.status(404).json({ error: 'Estudiante no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener estudiante por ID' });
    }
};

// Crear un nuevo estudiante
exports.createStudent = async (req, res) => {
    const { firstName, lastName, birthDate } = req.body;
    try {
        const newStudent = await Student.create({ firstName, lastName, birthDate });
        res.status(201).json(newStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear estudiante' });
    }
};

// Actualizar un estudiante por ID
exports.updateStudentById = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, birthDate } = req.body;
    try {
        const updatedStudent = await Student.update({ firstName, lastName, birthDate }, { where: { id } });
        if (updatedStudent[0] === 1) {
            res.json({ message: 'Estudiante actualizado correctamente' });
        } else {
            res.status(404).json({ error: 'Estudiante no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar estudiante por ID' });
    }
};

// Eliminar un estudiante por ID
exports.deleteStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRows = await Student.destroy({ where: { id } });
        if (deletedRows === 1) {
            res.json({ message: 'Estudiante eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Estudiante no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar estudiante por ID' });
    }
};
