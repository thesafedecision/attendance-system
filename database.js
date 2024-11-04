
// Configuration file for the database connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/attendanceDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected successfully');
}).catch((error) => {
    console.log('Database connection error:', error);
});

module.exports = mongoose;
