const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors= require('cors')
const studentRoute= require("./routes/studentRoute")

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors())

app.use(express.json());
app.use("/student", studentRoute)

mongoose.connect(process.env.MONGOURI, {
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
