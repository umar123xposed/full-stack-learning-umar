const Teacher = require('../models/Teachers');


createTeacher = async (req, res) => {
  try {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).send(teacher);
  } catch (error) {
    res.status(400).send(error);
  }
};


getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).send(teachers);
  } catch (error) {
    res.status(500).send(error);
  }
};


getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).send({ message: 'Teacher not found' });
    }
    res.status(200).send(teacher);
  } catch (error) {
    res.status(500).send(error);
  }
};


updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!teacher) {
      return res.status(404).send({ message: 'Teacher not found' });
    }
    res.status(200).send(teacher);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a teacher
deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndRemove(req.params.id);
    if (!teacher) {
      return res.status(404).send({ message: 'Teacher not found' });
    }
    res.status(200).send({ message: 'Teacher deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports= {createTeacher,deleteTeacher, getAllTeachers, getTeacherById, updateTeacher}
