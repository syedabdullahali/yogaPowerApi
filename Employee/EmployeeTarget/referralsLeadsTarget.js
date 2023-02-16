const mongoose = require('mongoose')

const referralsLeadsTargetSchema = mongoose.Schema(
    {
        Sr_No:{
            type: Number,
            required:true
        },
        Employee:{
            type:String,
            required:[true,"Please enter a employee name"],
        },
        No_Of_Referrals_Target:{
            type: String,
            required:true
        },
        No_Of_Referrals_Leads:{
            type: String,
            required:true
        },
        Convert_To_Member:{
            type: Number,
            required:true
        },
        Total_Amount:{
            type: String,
            required:true
        },
        Achived:{
            type: String,
            required:true
        }

    },
    
)

const referralsLeadsTarget = mongoose.model('ReferralsLeadsTarget',referralsLeadsTargetSchema);


module.exports = referralsLeadsTarget ;