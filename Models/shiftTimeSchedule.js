let mongoose = require('mongoose')

let shiftTimeSchedule = new mongoose.Schema({
     shiftName:String,
     startTime:String,
     endTime:String,
     username:String,
     centerCode:String
}, { timestamps: true })


module.exports =   mongoose.model('shiftTimeSchedule', shiftTimeSchedule);
