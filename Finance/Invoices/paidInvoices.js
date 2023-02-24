const mongoose = require('mongoose')

const paidInvoiceSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Date: {
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
        Receipts_No: {
            type: String,
            required: true
        },
        Services: {
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
        PayMode: {
            type: String,
            required: true
        },
        Created_By: {
            type: Boolean,
            required: true
        },

    },
)

const PaidInvoice = mongoose.model('PaidInvoice', paidInvoiceSchema);


module.exports = PaidInvoice;