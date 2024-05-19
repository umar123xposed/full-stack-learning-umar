const express = require('express');
const router = express.Router();
const {getAllSubjects, getSubjectById, createSubject, updateSubject, deleteSubject} = require('../controllers/subjectController');

router.post('/subject', createSubject);
router.get('/subject', getAllSubjects);
router.get('/subject/:id', getSubjectById);
router.put('/subject/:id', updateSubject);
router.delete('/subject/:id', deleteSubject);

module.exports = router;
