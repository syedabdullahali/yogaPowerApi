const mongoose = require('mongoose')

const ClothesSchema = mongoose.Schema(
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
        Category: {
            type: String,
            required: true
        },
        Color: {
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
        Sold: {
            type: String,
            required: true
        },
        Available_Stock: {
            type: String,
            required: true
        },
        Sold_By: {
            type: String,
            required: true
        },
        Action: {
            type: String,
            required: true
        },
    },
)

const Clothes = mongoose.model('Clothes', ClothesSchema);


module.exports = Clothes;