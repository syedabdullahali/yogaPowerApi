const mongoose = require('mongoose')

const commentsInvoiceSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Date: {
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
        Services:{
            type: String,
            required: true
        },
        Cancelled_By: {
            type: String,
            required: true
        },
        Invoice_No: {
            type: String,
            required: true
        },
        Comments: {
            type: String,
            required: true
        },
    },
)

const CommentsInvoice = mongoose.model('CommentsInvoice', commentsInvoiceSchema);


module.exports = CommentsInvoice;