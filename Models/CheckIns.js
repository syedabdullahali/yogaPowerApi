let mongoose = require('mongoose')

let checkIns  = new mongoose.Schema({

username: String,
centercode: String,
date: String,
attendanceId:String,
name: String,
designation: String,
shiftTimeing:String,
startTime: String,
endTime: String,
checkInTime:String,
checkOutTime: String,
totalWorkinghour: String,
status: String,

}, { timestamps: true })


module.exports =   mongoose.model('checkIns ', checkIns );


