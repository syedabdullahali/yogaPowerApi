const mongoose = require('mongoose')

const receiptsSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Date: {
            type: String,
            required: true,
        },
        Receipt_No: {
            type: String,
            required: true,
        },
        Invoice_No: {
            type: String,
            required: true,
        },
        Client_Id: {
            type: String,
            required: true,
        },
        Client_Name: {
            type: String,
            required: true
        },
        Services: {
            type: String,
            required: true
        },
        Created_By: {
            type: String,
            required: true
        },
        Paid_Amount: {
            type: String,
            required: true
        },
        PayMode: {
            type: String,
            required: true
        },
    },
)

const Receipts = mongoose.model('Receipts', receiptsSchema);


module.exports = Receipts;