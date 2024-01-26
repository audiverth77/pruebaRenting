// validationMiddleware.js
const { body, validationResult } = require('express-validator');

const validateStudent = [
    body('firstName').trim().isLength({ min: 1 }).withMessage('El campo firstName es obligatorio'),
    body('lastName').trim().isLength({ min: 1 }).withMessage('El campo lastName es obligatorio'),
    body('birthDate').optional({ nullable: true }).isISO8601().toDate().withMessage('Formato de fecha inválido'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

const validateProfessor = [
    body('firstName').trim().isLength({ min: 1 }).withMessage('El campo firstName es obligatorio'),
    body('lastName').trim().isLength({ min: 1 }).withMessage('El campo lastName es obligatorio'),
    body('email').trim().isEmail().withMessage('Formato de correo electrónico inválido'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

// Puedes continuar con las validaciones para los otros modelos (Courses, Grades) de manera similar

module.exports = { validateStudent, validateProfessor };
