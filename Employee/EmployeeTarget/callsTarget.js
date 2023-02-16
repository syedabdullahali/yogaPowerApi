const mongoose = require('mongoose')

const callsTargetSchema = mongoose.Schema(
    {
        Sr_No:{
            type: Number,
            required:true
        },
        Employee:{
            type:String,
            required:[true,"Please enter a employee name"],
        },
        Call_Target:{
            type:Number,
            required:true
        },
        Follow_Ups:{
            type: String,
            required:true
        },
        Members_Call:{
            type: String,
            required:true
        },
        Total_Completed:{
            type: Number,
            required:true
        },
        Achived:{
            type: String,
            required:true
        }

    },
    
)

const callsTarget = mongoose.model('CallsTarget',callsTargetSchema);


module.exports = callsTarget ;