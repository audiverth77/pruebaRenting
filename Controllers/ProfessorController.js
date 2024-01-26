// controllers/professorController.js
const Professor = require('../Models/Professor'); // Asegúrate de que la ruta sea correcta

// Obtener todos los profesores
exports.getAllProfessors = async (req, res) => {
    try {
        const professors = await Professor.findAll();
        res.json(professors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener profesores' });
    }
};

// Obtener un profesor por ID
exports.getProfessorById = async (req, res) => {
    const { id } = req.params;
    try {
        const professor = await Professor.findByPk(id);
        if (professor) {
            res.json(professor);
        } else {
            res.status(404).json({ error: 'Profesor no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener profesor por ID' });
    }
};

// Crear un nuevo profesor
exports.createProfessor = async (req, res) => {
    const { firstName, lastName, email } = req.body;
    try {
        const newProfessor = await Professor.create({ firstName, lastName, email });
        res.status(201).json(newProfessor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear profesor' });
    }
};

// Actualizar un profesor por ID
exports.updateProfessorById = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    try {
        const updatedProfessor = await Professor.update({ firstName, lastName, email }, { where: { id } });
        if (updatedProfessor[0] === 1) {
            res.json({ message: 'Profesor actualizado correctamente' });
        } else {
            res.status(404).json({ error: 'Profesor no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar profesor por ID' });
    }
};

// Eliminar un profesor por ID
exports.deleteProfessorById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRows = await Professor.destroy({ where: { id } });
        if (deletedRows === 1) {
            res.json({ message: 'Profesor eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Profesor no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar profesor por ID' });
    }
};
