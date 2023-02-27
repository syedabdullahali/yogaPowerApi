const mongoose = require('mongoose')

const revenueDetailsSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Year: {
            type: String,
            required: true,
        },
        Month: {
            type: String,
            required: true,
        },
        Total_Invoice_Amount: {
            type: String,
            required: true,
        },
        Total_Collection_Amount: {
            type: String,
            required: true,
        },
        Total_Balance_Amount: {
            type: String,
            required: true
        },
       
    },
)

const RevenueDetails = mongoose.model('RevenueDetails', revenueDetailsSchema);


module.exports = RevenueDetails;