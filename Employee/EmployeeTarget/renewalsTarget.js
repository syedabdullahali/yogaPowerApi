const mongoose = require('mongoose')

const renewalsTargetSchema = mongoose.Schema(
    {
        Sr_No:{
            type: Number,
            required:true
        },
        Employee:{
            type:String,
            required:[true,"Please enter a employee name"],
        },
        Target:{
            type:String,
            required:true
        },
        No_Of_Renewals:{
            type: String,
            required:true
        },
        Conversion:{
            type: String,
            required:true
        },
        Total_Amount:{
            type: Number,
            required:true
        },
        Achived:{
            type: String,
            required:true
        }

    },
    
)

const renewalsTarget = mongoose.model('RenewalsTarget',renewalsTargetSchema);


module.exports = renewalsTarget ;