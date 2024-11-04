
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: { type: String, enum: ['employee', 'manager'], default: 'employee' },
});

module.exports = mongoose.model('User', userSchema);
