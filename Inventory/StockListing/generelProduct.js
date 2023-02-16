const mongoose = require('mongoose')

const GenerelProductSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Product_Code: {
            type: String,
            required: true,
        },
        Product_Name: {
            type: String,
            required: true
        },
        Brand_Name: {
            type: String,
            required: true
        },
        Quantity: {
            type: String,
            required: true
        },
        Price: {
            type: String,
            required: true
        },
        Total_Stock: {
            type: String,
            required: true
        },
        Use: {
            type: String,
            required: true
        },
        Available_Stock: {
            type: String,
            required: true
        },
        AllotBy: {
            type: String,
            required: true
        },
        AllotTo: {
            type: String,
            required: true
        },
    },
)

const GenerelProduct = mongoose.model('GenerelProduct', GenerelProductSchema);


module.exports = GenerelProduct;