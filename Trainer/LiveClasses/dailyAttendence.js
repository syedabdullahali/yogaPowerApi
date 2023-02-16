const mongoose = require('mongoose')

const dailyAttendenceSchema = mongoose.Schema(
    {
        Sr_No:{
            type: Number,
            required:true
        },
        Trainer_Name:{
            type:String,
            required:[true,"Please enter a trainer name"],
        },
        Services:{
            type:String,
            required:[true,"Please enter a services name"]
        },
        Batch_Timing:{
            type: String,
            required:true
        },
        No_Of_Clients:{
            type: Number,
            required:true
        },
        Attended:{
            type: Number,
            required:true
        },

    },
    
)

const DailyAttendence = mongoose.model('DailyAttendence',dailyAttendenceSchema);


module.exports = DailyAttendence;