const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://donelmukiza05:myNewPass123@cluster0.ey1ge.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
