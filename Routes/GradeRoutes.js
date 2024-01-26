const express = require('express');
const router = express.Router();
const GradeController = require('../Controllers/GradeController');

router.get('/grades', GradeController.getAllGrades);
router.get('/grades/:id', GradeController.getGradeById);
router.post('/grades', GradeController.createGrade);
router.put('/grades/:id', GradeController.updateGradeById);
router.delete('/grades/:id', GradeController.deleteGradeById);

module.exports = router;
