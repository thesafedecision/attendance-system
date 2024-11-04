
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const attendanceRoutes = require('./routes/attendance');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/attendanceDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/attendance', attendanceRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
