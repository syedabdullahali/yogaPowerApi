const mongoose = require('mongoose')

const ttcClassesDailyAttendenceSchema = mongoose.Schema(
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
        Total_Classes:{
            type: Number,
            required:true
        },
        Attended:{
            type: Number,
            required:true
        },
        Left_Class:{
            type: Number,
            required:true
        },

    },
    
)

const TTCClassesDailyAttendence= mongoose.model('TTCClassesDailyAttendence',ttcClassesDailyAttendenceSchema);


module.exports = TTCClassesDailyAttendence;