const mongoose = require('mongoose')

const AyurvedaMedicineSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String
        },
        username: {
            type: String
        },
        Product_Code: {
            type: String
        },
        Product_Name: {
            type: String
        },
        Brand_Name: {
            type: String
        },
        Category: {
            type: String
        },
        Quantity: {
            type: String
        },
        Price: {
            type: String
        },
        Total_Stock: {
            type: String
        },
        Sold: {
            type: String
        },
        Available_Stock: {
            type: String
        },
        Sold_By: {
            type: String
        },
        Action: {
            type: String
        },
    },
)

const AyurvedaMedicine = mongoose.model('AyurvedaMedicine', AyurvedaMedicineSchema);


module.exports = AyurvedaMedicine;
