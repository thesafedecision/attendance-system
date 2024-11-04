
const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.post('/log', attendanceController.logAttendance);
router.get('/report', attendanceController.generateReport);

module.exports = router;
