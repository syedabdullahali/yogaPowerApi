let mongoose = require('mongoose')

let CheckIns = new mongoose.Schema({
    username: String,
    centercode: String,
    date: Date,
    attendanceId:String,
    name: String,
    designation: String,
    shiftTimeing: Number,
    startTime: String,
    endTime: String,
    checkInTime:String,
    checkOutTime: String,
    totalWorkinghour: String,
    status: String,
}, { timestamps: true })

module.exports = mongoose.model('CheckIns', CheckIns);
