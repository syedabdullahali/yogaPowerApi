const mongoose = require('mongoose')

const PurchaseReportSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Date: {
            type: String,
            required: true,
        },
        Product_Name: {
            type: String,
            required: true
        },
        Opening_Stock: {
            type: String,
            required: true
        },
        Purchase_Stock: {
            type: String,
            required: true
        },
        Balance_Stock: {
            type: String,
            required: true
        },
        Consumption_Quantity: {
            type: String,
            required: true
        },
        Closing_Stock: {
            type: String,
            required: true
        },
        
    },
)

const PurchaseReport = mongoose.model('PurchaseReport', PurchaseReportSchema);


module.exports = PurchaseReport;