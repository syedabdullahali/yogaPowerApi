let mongoose = require('mongoose')

let shiftTimeSchedule = new mongoose.Schema({
     shiftName:String,
     startTime:Date,
     endTime:Date,
     username:String,
     centerCode:String
}, { timestamps: true })


module.exports =   mongoose.model('shiftTimeSchedule', shiftTimeSchedule);
