const express = require('express');
const router = express.Router();
const StudentController = require('../Controllers/StudentController');
const { validateStudent } = require('../Middlewares/validationMiddleware');

router.get('/students', validateStudent, StudentController.getAllStudents);
router.get('/students/:id', validateStudent, StudentController.getStudentById);
router.post('/students', StudentController.createStudent);
router.put('/students/:id', StudentController.updateStudentById);
router.delete('/students/:id', StudentController.deleteStudentById);

module.exports = router;
