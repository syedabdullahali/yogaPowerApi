const mongoose = require('mongoose')

const offerMasterSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Date: {
            type: String,
            required: true,
        },
        Service: {
            type: String,
            required: true,
        },
        Deal_Name: {
            type: String,
            required: true,
        },
        Start_Date: {
            type: String,
            required: true
        },
        End_Date: {
            type: String,
            required: true
        },
        Services_Variation: {
            type: String,
            required: true
        },
        Services_Duration: {
            type: String,
            required: true
        },
        Services_Fee: {
            type: String,
            required: true
        },
        Discount_Rate: {
            type: String,
            required: true
        },
        Discount_Value: {
            type: String,
            required: true
        },
        Status: {
            type: Boolean,
            required: true
        },
        Action: {
            type: String,
            required: true
        },
        
    },
)

const OfferMaster = mongoose.model('OfferMaster', offerMasterSchema);


module.exports = OfferMaster;