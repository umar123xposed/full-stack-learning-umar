const express = require('express');
const router = express.Router();
const {getAllClasses, getClassById, createClass, updateClass}= require('../controllers/classController');

router.post('/class', createClass);
router.get('/class', getAllClasses);
router.get('/class/:id', getClassById);
router.put('/class/:id', updateClass);
router.delete('/class/:id', deleteClass);

module.exports = router;
