const mongoose = require('mongoose')

const monthlyReportSchema = mongoose.Schema(
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

const MonthlyReport = mongoose.model('MonthlyReport', monthlyReportSchema);


module.exports = MonthlyReport;