const express = require('express');
const router = express.Router();
const {createTeacher,deleteTeacher, getAllTeachers, getTeacherById, updateTeacher} = require('../controllers/teacherController');

router.post('/teacher', createTeacher);
router.get('/teacher', getAllTeachers);
router.get('/teacher/:id', getTeacherById);
router.put('/teacher/:id', updateTeacher);
router.delete('/teacher/:id', deleteTeacher);

module.exports = router;
