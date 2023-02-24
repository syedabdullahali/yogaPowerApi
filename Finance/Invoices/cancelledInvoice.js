const mongoose = require('mongoose')

const cancelledInvoiceSchema = mongoose.Schema(
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
        Invoice_No: {
            type: String,
            required: true,
        },
        Client_Id: {
            type: String,
            required: true,
        },
        Member_Name: {
            type: String,
            required: true
        },
        Service_Duration:{
            type: String,
            required: true
        },
        Start_Date:{
            type: String,
            required: true
        },
        Created_By: {
            type: String,
            required: true
        },
        Final_Amount: {
            type: String,
            required: true
        },
        Paid_Amount: {
            type: String,
            required: true
        },
        Balance: {
            type: String,
            required: true
        },
        PayMode: {
            type: String,
            required: true
        },
        Cancelled_By: {
            type: String,
            required: true
        },
        Reason: {
            type: String,
            required: true
        },
    },
)

const CancelledInvoice = mongoose.model('CancelledInvoice', cancelledInvoiceSchema);


module.exports = CancelledInvoice;