const mongoose = require('mongoose')

const ptClassesClientAttendenceRegSchema = mongoose.Schema(
    {
        Sr_No:{
            type: Number,
            required:true
        },
        Client_Name:{
            type:String,
            required:[true,"Please enter a client name"],
        },
        Mobile:{
            type:Number,
            required:[true,"Please enter a services name"]
        },
        Services:{
            type: String,
            required:true
        },
        Trainer_Name:{
            type: String,
            required:true
        },
        Class_Timing:{
            type: String,
            required:true
        },
        Package:{
            type: String,
            required:true
        },
        Days:{
            type: String,
            required:true
        },
        StartDate:{
            type: String,
            required:true
        },
        EndDate:{
            type: String,
            required:true
        },
       

    },
    
)

const PTClassesClientAttendenceReg = mongoose.model('PTClassesClientAttendenceReg', ptClassesClientAttendenceRegSchema);


module.exports = PTClassesClientAttendenceReg;