const Class = require('../models/Class');

createClass = async (req, res) => {
  try {
    const classe = new Class(req.body);
    await classe.save();
    res.status(201).send(classe);
  } catch (error) {
    res.status(400).send(error);
  }
};

getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).send(classes);
  } catch (error) {
    res.status(500).send(error);
  }
};


getClassById = async (req, res) => {
  try {
    const classe = await Class.findById(req.params.id);
    if (!classe) {
      return res.status(404).send({ message: 'Class not found' });
    }
    res.status(200).send(classe);
  } catch (error) {
    res.status(500).send(error);
  }
};

updateClass = async (req, res) => {
  try {
    const classe = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true});
    if (!classe) {
      return res.status(404).send({ message: 'Class not found' });
    }
    res.status(200).send(classe);
  } catch (error) {
    res.status(400).send(error);
  }
};

deleteClass = async (req, res) => {
  try {
    const classe = await Class.findByIdAndRemove(req.params.id);
    if (!classe) {
      return res.status(404).send({ message: 'Class not found' });
    }
    res.status(200).send({ message: 'Class deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {getAllClasses, getClassById, createClass, updateClass, deleteClass}