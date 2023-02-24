const mongoose = require('mongoose')

const totalInvoiceSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Date: {
            type: String,
            required: true,
        },
        Center_Name: {
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
        Invoice_No: {
            type: String,
            required: true
        },
        Services: {
            type: String,
            required: true
        },
        Start_Date: {
            type: String,
            required: true
        },
        End_Date: {
            type: String,
            required: true
        },
        Counseller: {
            type: String,
            required: true
        },
        Trainer: {
            type: String,
            required: true
        },
        Created_By: {
            type: Boolean,
            required: true
        },
        Amount: {
            type: String,
            required: true
        },
        Tax: {
            type: String,
            required: true
        },
        Total_Amount: {
            type: String,
            required: true
        },
        Paid: {
            type: String,
            required: true
        },
        Balance: {
            type: String,
            required: true
        },
        Pay_Mode: {
            type: String,
            required: true
        },
        Comments: {
            type: String,
            required: true
        },
        Invoice: {
            type: String,
            required: true
        },
        Cancel_Invoice: {
            type: String,
            required: true
        },
    },
)

const TotalInvoice = mongoose.model('TotalInvoice', totalInvoiceSchema);


module.exports = TotalInvoice;