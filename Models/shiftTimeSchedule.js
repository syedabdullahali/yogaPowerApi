const mongoose=require('mongoose')

const shiftTimeSchedule=new mongoose.Schema({
     shiftName:String,
     startTime:Date,
     endTime:Date,
     username:String,
     centerCode:String
})

const shiftTimeScheduleModel=mongoose.model('shiftTimeSchedule', shiftTimeSchedule)
module.exports=shiftTimeScheduleModel
