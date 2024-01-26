const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/CourseController');

router.get('/courses', CourseController.getAllCourses);
router.get('/courses/:id', CourseController.getCourseById);
router.post('/courses', CourseController.createCourse);
router.put('/courses/:id', CourseController.updateCourseById);
router.delete('/courses/:id', CourseController.deleteCourseById);

module.exports = router;
