const mongoose = require('mongoose')

const leadsTargetSchema = mongoose.Schema(
    {
        Sr_No:{
            type: String,
            required:true
        },
        Year:{
            type: String,
            required:true
        },
        Employee:{
            type:String,
            required:[true,"Please enter a employee name"],
        },
        Lead_Assign:{
            type:Number,
            required:true
        },
        Spot_Conversions:{
            type: String,
            required:true
        },
        Total_Leads_Conversion:{
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
        },
        annualTarget:[
            {
                monthName:{
                    type: String,
                    required:true
                },
                Target:{    
                    type: String,
                    required:true
                }
            }
            
        ]

    },
    
)

const leadsTarget = mongoose.model('LeadsTarget',leadsTargetSchema);


module.exports = leadsTarget ;