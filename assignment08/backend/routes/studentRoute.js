const express = require('express');
const router = express.Router();
const { getStudent, updateStudent, addStudent, deleteStudent } = require('../controller/student');

router.get('/', getStudent);
router.post('/', addStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
