const mongoose=require('mongoose')
const Schema=mongoose.schema

const shiftTimeSchema=new mongoose.Schema({
     shiftName:{
        type:String
     },
     startTime:{
        type:Date
     },
     endTime:{
        type:Date
     }
})

const shiftTimeModel=mongoose.modal('shift-time-schedule', shiftTimeSchema)
module.exports=shiftTimeModel
