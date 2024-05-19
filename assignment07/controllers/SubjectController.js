const Subject = require('../models/Subject');

createSubject = async (req, res) => {
  try {
    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).send(subject);
  } catch (error) {
    res.status(400).send(error);
  }
};

getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).send(subjects);
  } catch (error) {
    res.status(500).send(error);
  }
};

getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) {
      return res.status(404).send({ message: 'Subject not found' });
    }
    res.status(200).send(subject);
  } catch (error) {
    res.status(500).send(error);
  }
};

updateSubject = async (req, res) => {
  try {
    const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!subject) {
      return res.status(404).send({ message: 'Subject not found' });
    }
    res.status(200).send(subject);
  } catch (error) {
    res.status(400).send(error);
  }
};

deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findByIdAndRemove(req.params.id);
    if (!subject) {
      return res.status(404).send({ message: 'Subject not found' });
    }
    res.status(200).send({ message: 'Subject deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports= {getAllSubjects, getSubjectById, createSubject, updateSubject, deleteSubject}