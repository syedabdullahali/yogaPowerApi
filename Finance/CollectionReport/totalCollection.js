const mongoose = require('mongoose')

const totalCollectionSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Date: {
            type: String,
            required: true,
        },
        Branch: {
            type: String,
            required: true,
        },
        Invoice_No: {
            type: String,
            required: true,
        },
        Receipt_No: {
            type: String,
            required: true
        },
        Client_Id: {
            type: String,
            required: true
        },
        Client_Name: {
            type: String,
            required: true
        },
        Payment_Mode: {
            type: String,
            required: true
        },
        Amount: {
            type: String,
            required: true
        },
        Collected_By: {
            type: String,
            required: true
        },
    },
)

const TotalCollection = mongoose.model('TotalCollection', totalCollectionSchema);


module.exports = TotalCollection;