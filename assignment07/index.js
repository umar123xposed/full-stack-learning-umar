const express = require('express');
const mongoose = require('mongoose');
const teacherRoutes = require('./routes/teacherRoutes');
const classRoutes = require('./routes/classRoutes');
const subjectRoutes = require('./routes/SubjectRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(teacherRoutes);
app.use(classRoutes);
app.use(subjectRoutes);

mongoose.connect('mongodb+srv://Umar123:incorrect123@cluster0.p5bx2eh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
