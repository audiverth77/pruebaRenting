const express = require('express');
const router = express.Router();
const ProfessorController = require('../Controllers/ProfessorController');

router.get('/professors', ProfessorController.getAllProfessors);
router.get('/professors/:id', ProfessorController.getProfessorById);
router.post('/professors', ProfessorController.createProfessor);
router.put('/professors/:id', ProfessorController.updateProfessorById);
router.delete('/professors/:id', ProfessorController.deleteProfessorById);

module.exports = router;

