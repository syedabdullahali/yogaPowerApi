const mongoose = require('mongoose')

const ptClassesMonthlyReportSchema = mongoose.Schema(
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
        New_Clients:{
            type: Number,
            required:true
        },
        Left_Clients:{
            type: Number,
            required:true
        },
        Total_Clients:{
            type: Number,
            required:true
        },
       

    },
    
)

const PTClassesMonthlyReport = mongoose.model('PTClassesMonthlyReport', ptClassesMonthlyReportSchema);


module.exports = PTClassesMonthlyReport;